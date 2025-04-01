import React, { CSSProperties, PropsWithChildren } from "react";

import {ActionIcon, Box, Button} from "@mantine/core";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { ReorderIcon } from "@/components/Icons/ReorderIcon";
import { useStore } from "@/store";

import styles from "./styles.module.css";
import {Icon} from "@iconify/react";

interface Props {
    element: IDynamicElement;
    pageIndex: number;
    sectionIndex: number;
}

export default function SortableSectionWrapper({ element, pageIndex, sectionIndex, children }: PropsWithChildren<Props>) {
    const scale = useStore((state) => state.InteractionPane.scale);
    const activeElement = useStore((state) => state.EditSectionMenu.element);

    const open = useStore((state) => state.AddSectionMenu.open);
    const setParentIndex = useStore((state) => state.AddSectionMenu.setParentIndex);
    const setIndexToAdd = useStore((state) => state.AddSectionMenu.setIndexToAdd);


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
        zIndex: isElementActive ? 10000 : -1,
    };

    return (
        <Box ref={setNodeRef} style={style} {...attributes} pos={"relative"}>
            {isElementActive && (
                <ActionIcon size={"xl"} className={styles.reorderControl} {...listeners}>
                    <ReorderIcon />
                </ActionIcon>
            )}
            {isElementActive && (
                <Button
                    className={styles.addSectionTop}
                    leftSection={<Icon icon="ic:baseline-plus" width="24" height="24" />}
                    onClick={() => {
                        open();
                        setParentIndex(pageIndex);
                        setIndexToAdd(sectionIndex);
                    }}
                >
                    Add Section
                </Button>
            )}
            {isElementActive && (
                <Button
                    className={styles.addSectionBottom}
                    leftSection={<Icon icon="ic:baseline-plus" width="24" height="24" />}
                    onClick={() => {
                        open();
                        setParentIndex(pageIndex);
                        setIndexToAdd(sectionIndex + 1);
                    }}
                >
                    Add Section
                </Button>
            )}
            {children}
        </Box>
    );
}
