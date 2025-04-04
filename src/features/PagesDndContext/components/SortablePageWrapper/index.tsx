import React, { CSSProperties, PropsWithChildren } from "react";

import { Box, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useStore } from "@/store";

import styles from "./styles.module.css";

interface PageWrapperProps {
    page: IPage;
}

export default function SortablePageWrapper({ page, children }: PropsWithChildren<PageWrapperProps>) {
    const scale = useStore((state) => state.InteractionPane.scale);
    const breakpoint = useStore((state) => state.Breakpoints.breakpoint);

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: page.id,
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
        minWidth: breakpoint,
        maxWidth: breakpoint,
    };

    return (
        <Box ref={setNodeRef} style={style} {...attributes}>
            <Box w={'100%'} style={{ cursor: isDragging ? "grabbing" : "pointer" }} className={styles.topPageBar} {...listeners}>
                <Group align={"center"}>
                    <Icon icon="qlementine-icons:page-16" width="16" height="16" />
                    <Text fz={16} fw={500}>
                        /
                    </Text>
                    <Text fz={16} fw={500}>
                        {page.name}
                    </Text>
                </Group>
                <Menu shadow="md" width={200} data-no-dnd="true">
                    <Menu.Target>
                        <UnstyledButton>
                            <Icon icon="ri:more-fill" width="24" height="24" />
                        </UnstyledButton>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label>Page</Menu.Label>
                        <Menu.Item
                            leftSection={<Icon icon="material-symbols:edit-outline" width="16" height="16" />}
                        >
                            Duplicate
                        </Menu.Item>
                        <Menu.Item
                            leftSection={<Icon icon="material-symbols:edit-outline" width="16" height="16" />}
                        >
                            Copy
                        </Menu.Item>
                        <Menu.Item
                            data-no-dnd="true"
                            leftSection={<Icon icon="material-symbols:edit-outline" width="16" height="16" />}
                        >
                            Edit
                        </Menu.Item>
                        <Menu.Item
                            color={"red"}
                            leftSection={<Icon icon="material-symbols:edit-outline" width="16" height="16" />}
                        >
                            Delete
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item
                            leftSection={<Icon icon="material-symbols:edit-outline" width="16" height="16" />}
                        >
                            Add page
                        </Menu.Item>
                        <Menu.Item
                            leftSection={<Icon icon="material-symbols:edit-outline" width="16" height="16" />}
                        >
                            Add section
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item
                            leftSection={<Icon icon="material-symbols:edit-outline" width="16" height="16" />}
                        >
                            Set as home page
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Box>
            {children}
        </Box>
    );
}
