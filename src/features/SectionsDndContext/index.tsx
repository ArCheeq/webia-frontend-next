import { useId } from "react";

import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableSectionWrapper from "@/features/SectionsDndContext/components/SortableSectionWrapper";
import DynamicSection from "@/features/DynamicSection";

import { useStore } from "@/store";

interface SectionsDndContextProps {
    page: IPage;
    pageIndex: number;
}

export default function SectionsDndContext(props: SectionsDndContextProps) {
    const { id, sections } = props.page;

    const contextId = useId();
    const reorderSections = useStore((state) => state.AppLayout.reorderSections);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = sections.findIndex((item) => item.id === active.id);
            const newIndex = sections.findIndex((item) => item.id === over?.id);

            const reorderedSections = arrayMove(sections, oldIndex, newIndex);
            reorderSections(id, reorderedSections);
        }
    }

    return (
        <DndContext id={contextId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={sections} strategy={verticalListSortingStrategy}>
                {sections.map((section, idx) => (
                    <SortableSectionWrapper key={section.id} section={section}>
                        <DynamicSection section={section} />
                    </SortableSectionWrapper>
                ))}
            </SortableContext>
        </DndContext>
    );
}
