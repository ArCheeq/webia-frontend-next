import React, { CSSProperties, PropsWithChildren, use } from "react";

import { Box, Group, Menu, Text, UnstyledButton } from "@mantine/core";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useStore } from "@/store";

import { PageIcon } from "@/components/Icons/PageIcon";
import { MoreIcon } from "@/components/Icons/MoreIcon";

import styles from "./styles.module.css";
import { EditIcon } from "@/components/Icons/EditIcon";

interface PageWrapperProps {
    element: IDynamicElement;
}

export default function SortablePageWrapper({ element, children }: PropsWithChildren<PageWrapperProps>) {
    const scale = useStore((state) => state.InteractionPane.scale);
    const breakpoint = useStore((state) => state.Breakpoints.breakpoint);
    const open = useStore((state) => state.EditSectionMenu.open);

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: element.id,
    });

    const style: CSSProperties = {
        transform: CSS.Translate.toString({
            x: transform ? transform.x / scale : 0,
            y: transform ? transform?.y / scale : 0,
        } as any),
        transition,
        display: "flex",
        flexDirection: "column",
        padding: "0px 60px",
        width: "100%",
        maxWidth: breakpoint,
    };

    return (
        <Box ref={setNodeRef} style={style} {...attributes}>
            <Box style={{ cursor: isDragging ? "grabbing" : "pointer" }} className={styles.topPageBar} {...listeners}>
                <Group align={"center"}>
                    <PageIcon />
                    <Text fz={16} fw={500}>
                        /
                    </Text>
                    <Text fz={16} fw={500}>
                        {element.pageName}
                    </Text>
                </Group>
                <Menu shadow="md" width={200} data-no-dnd="true">
                    <Menu.Target>
                        <UnstyledButton>
                            <MoreIcon />
                        </UnstyledButton>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label>Page</Menu.Label>
                        <Menu.Item leftSection={<EditIcon width={16} height={16} />}>Duplicate</Menu.Item>
                        <Menu.Item leftSection={<EditIcon width={16} height={16} />}>Copy</Menu.Item>
                        <Menu.Item
                            data-no-dnd="true"
                            onClick={() => open(element)}
                            leftSection={<EditIcon width={16} height={16} />}
                        >
                            Edit
                        </Menu.Item>
                        <Menu.Item
                            color={"red"}
                            leftSection={<EditIcon color={"var(--mantine-color-red-6)"} width={16} height={16} />}
                        >
                            Delete
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item leftSection={<EditIcon width={16} height={16} />}>Add page</Menu.Item>
                        <Menu.Item leftSection={<EditIcon width={16} height={16} />}>Add section</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item leftSection={<EditIcon width={16} height={16} />}>Set as home page</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Box>
            {children}
        </Box>
    );
}
