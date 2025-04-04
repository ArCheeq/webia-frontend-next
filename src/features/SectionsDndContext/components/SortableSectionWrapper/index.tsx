import React, { CSSProperties, PropsWithChildren } from "react";

import { ActionIcon, Box, Loader, Skeleton } from "@mantine/core";
import { Icon } from "@iconify/react";

import AiRegenerationMenu from "@/features/AiRegenerationMenu";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useStore } from "@/store";

import styles from "./styles.module.css";

interface Props {
    section: ISection;
}

export default function SortableSectionWrapper({ section, children }: PropsWithChildren<Props>) {
    const scale = useStore((state) => state.InteractionPane.scale);
    const activeSection = useStore((state) => state.EditSectionMenu.section);
    const open = useStore((state) => state.EditSectionMenu.open);
    const isRegenerating = useStore((state) => state.EditSectionMenu.isRegenerating);

    const isElementActive = activeSection?.id === section.id;

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: section.id,
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
        <Box
            ref={setNodeRef}
            style={style}
            {...attributes}
            pos={"relative"}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                open(section);
            }}
        >
            {isElementActive && (
                <ActionIcon size={"xl"} className={styles.reorderControl} {...listeners}>
                    <Icon icon="cuida:reorder-outline" width="24" height="24" />
                </ActionIcon>
            )}
            {isElementActive && (
                <AiRegenerationMenu />
            )}
            {isElementActive && isRegenerating && (
                <Skeleton radius={0} className={styles.skeleton}>
                    <Loader classNames={{ root: 'z-[1000]' }} size={'lg'} />
                </Skeleton>
            )}
            {children}
        </Box>
    );
}
