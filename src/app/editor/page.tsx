"use client";

import CanvasWrapper from "@/features/CanvasWrapper";
import PagesDndContext from "@/features/PagesDndContext";
import { useStore } from "@/store";

export default function EditorPage() {
    const layout = useStore((state) => state.AppLayout.layout);

    console.log("LAYOUT", layout);

    return (
        <CanvasWrapper>
            <PagesDndContext layout={layout} />
        </CanvasWrapper>
    );
}
