import { useId } from "react";

import { closestCenter, DndContext, DragEndEvent, useSensor, useSensors } from "@dnd-kit/core";

import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import SortablePageWrapper from "@/features/PagesDndContext/components/SortablePageWrapper";
import { useLandingContext } from "@/store/landing-ctx";
import SectionsDndContext from "@/features/SectionsDndContext";
import { KeyboardSensor, MouseSensor } from "@/features/PagesDndContext/SmartPointerSensor";

export default function PagesDndContext() {
    const contextId = useId();
    const { layout, reorderPages } = useLandingContext();

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
                {layout.map((page) => (
                    <SortablePageWrapper key={page.id} element={page}>
                        <SectionsDndContext page={page} />
                    </SortablePageWrapper>
                ))}
            </SortableContext>
        </DndContext>
    );
}
