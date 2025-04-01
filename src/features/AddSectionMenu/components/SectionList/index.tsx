import { Fragment } from "react";

import { Menu, NavLink, Stack, Text, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";

import { useStore } from "@/store";

import { sections } from "@/constants/sections";

export default function SectionList() {
    const setSection = useStore(state => state.AddSectionMenu.setSection);

    return (
        <Stack gap={0}>
            {sections.map((section) => (
                <Fragment key={section.id}>
                        <NavLink
                            component={UnstyledButton}
                            label={<Text fw={500} fz={14}>{section.label}</Text>}
                            leftSection={section.icon}
                            rightSection={
                                <Icon icon="material-symbols:chevron-right-rounded" width="24" height="24" />
                            }
                            onClick={() => setSection(section)}
                        />
                    <Menu.Divider />
                </Fragment>
            ))}
        </Stack>
    )
}