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

import DynamicReactElementEdit from "@/features/DynamicReactElementEdit";
import SortableSectionWrapper from "@/features/SectionsDndContext/components/SortableSectionWrapper";
import { useLandingContext } from "@/store/landing-ctx";

interface SectionsDndContextProps {
    page: IDynamicElement;
}

export default function SectionsDndContext(props: SectionsDndContextProps) {
    const contextId = useId();
    const { id, children: sections } = props.page;
    const { reorderSections } = useLandingContext();

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

            const reorderedItems = arrayMove(sections, oldIndex, newIndex);
            reorderSections(id, reorderedItems);
        }
    }

    return (
        <DndContext id={contextId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={sections} strategy={verticalListSortingStrategy}>
                {sections.map((section) => (
                    <SortableSectionWrapper key={section.id} element={section}>
                        <DynamicReactElementEdit element={section} />
                    </SortableSectionWrapper>
                ))}
            </SortableContext>
        </DndContext>
    );
}
