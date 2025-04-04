import { useId } from "react";

import { closestCenter, DndContext, DragEndEvent, useSensor, useSensors } from "@dnd-kit/core";

import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import SortablePageWrapper from "@/features/PagesDndContext/components/SortablePageWrapper";
import SectionsDndContext from "@/features/SectionsDndContext";
import { KeyboardSensor, MouseSensor } from "@/features/PagesDndContext/SmartPointerSensor";
import { useStore } from "@/store";

interface IProps {
    layout: IPage[];
}

export default function PagesDndContext({ layout }: IProps) {
    const contextId = useId();
    const reorderPages = useStore((state) => state.AppLayout.reorderPages);

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = layout.findIndex((item) => item.id === active.id);
            const newIndex = layout.findIndex((item) => item.id === over?.id);

            const reorderedItems = arrayMove(layout, oldIndex, newIndex);
            reorderPages(reorderedItems);
        }
    }

    return (
        <DndContext id={contextId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={layout} strategy={horizontalListSortingStrategy}>
                {layout.map((page, idx) => (
                    <SortablePageWrapper key={page.id} page={page}>
                        <SectionsDndContext page={page} pageIndex={idx} />
                    </SortablePageWrapper>
                ))}
            </SortableContext>
        </DndContext>
    );
}
