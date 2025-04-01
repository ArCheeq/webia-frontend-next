import { CloseButton, Group, Menu, Stack, Text, TextInput, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";

import { SearchIcon } from "@/components/Icons/SearchIcon";

import { useStore } from "@/store";

export default function DropdownHeader() {
    const close = useStore((state) => state.AddSectionMenu.close);
    const activeSection = useStore((state) => state.AddSectionMenu.activeSection);
    const setSection = useStore((state) => state.AddSectionMenu.setSection);

    return (
        <Stack gap={0}>
            <Group px={12} py={8} align={"center"} justify={"space-between"}>
                <Group align={'center'} gap={12}>
                    {activeSection && (
                        <UnstyledButton onClick={() => setSection(null)}>
                            <Icon icon="solar:arrow-left-outline" width="20" height="20" />
                        </UnstyledButton>
                    )}
                    <Text fz={16} fw={500}>
                        {activeSection ? activeSection.label : 'Add Section' }
                    </Text>
                </Group>
                <CloseButton onClick={close} />
            </Group>
            <Menu.Divider mb={12} />
            <Group>
                <TextInput leftSection={<SearchIcon />} placeholder={'Search...'} w={'100%'} />
            </Group>
            <Menu.Divider my={12} />
        </Stack>
    );
}
