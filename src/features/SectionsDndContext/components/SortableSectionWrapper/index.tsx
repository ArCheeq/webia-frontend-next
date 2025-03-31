import React, { CSSProperties, PropsWithChildren } from "react";

import { ActionIcon, Box } from "@mantine/core";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { ReorderIcon } from "@/components/Icons/ReorderIcon";
import { useStore } from "@/store";

import styles from "./styles.module.css";

interface Props {
    element: IDynamicElement;
}

export default function SortableSectionWrapper({ element, children }: PropsWithChildren<Props>) {
    const scale = useStore((state) => state.InteractionPane.scale);
    const activeElement = useStore((state) => state.EditSectionMenu.element);

    const isElementActive = activeElement?.id === element.id;

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: element.id,
    });

    const style: CSSProperties = {
        transform: CSS.Translate.toString({
            x: transform ? transform.x / scale : 0,
            y: transform ? transform?.y / scale : 0,
        } as any),
        transition,
    };

    return (
        <Box ref={setNodeRef} style={style} {...attributes} pos={"relative"}>
            {isElementActive && (
                <ActionIcon size={"xl"} className={styles.reorderControl} {...listeners}>
                    <ReorderIcon />
                </ActionIcon>
            )}
            {children}
        </Box>
    );
}
