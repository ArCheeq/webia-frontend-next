import { ActionIcon, Box, Menu } from "@mantine/core";
import { Icon } from "@iconify/react";

import DropdownHeader from "@/features/EditSectionMenu/components/DropdownHeader";
import EmptySection from "@/features/EditSectionMenu/components/EmptySection";
import Controls from "@/features/EditSectionMenu/components/Controls";
import EditSectionForm from "@/features/EditSectionMenu/components/EditSectionForm";

import { useStore } from "@/store";

import styles from "./styles.module.css";

export default function EditSectionMenu() {
    const opened = useStore((state) => state.EditSectionMenu.opened);
    const toggle = useStore((state) => state.EditSectionMenu.toggle);

    return (
        <Menu opened={opened} shadow="md" width={300} position={"right-start"} closeOnClickOutside={true}>
            <Menu.Target>
                <ActionIcon
                    classNames={{ root: styles.actionIcon }}
                    variant={"filled"}
                    color={"#fff"}
                    size={"xl"}
                    aria-label="edit-section"
                    onClick={() => toggle()}
                >
                    <Icon icon="material-symbols:edit-outline" width="24" height="24" />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown px={12} py={0} className={styles.dropdown}>
                <Box pos={'relative'}>
                    <Box w={'100%'} py={12} className={'bg-white sticky inset-0 z-100 border-b-1 border-slate-300'}>
                        <DropdownHeader />
                        <EmptySection />
                        <Controls />
                    </Box>
                    <EditSectionForm />
                </Box>
            </Menu.Dropdown>
        </Menu>
    );
}
