import { ActionIcon, Menu } from "@mantine/core";

import DropdownHeader from "@/features/AddSectionMenu/components/DropdownHeader";
import SectionList from "@/features/AddSectionMenu/components/SectionList";
import SpecificSectionList from "@/features/AddSectionMenu/components/SpecificSectionList";

import { PlusIcon } from "@/components/Icons/PlusIcon";

import { useStore } from "@/store";

import styles from "./styles.module.css";

export default function AddSectionMenu() {
    const opened = useStore((state) => state.AddSectionMenu.opened);
    const open = useStore((state) => state.AddSectionMenu.open);
    const activeSection = useStore((state) => state.AddSectionMenu.activeSection);

    const isEditSectionMenuOpened = useStore((state) => state.EditSectionMenu.opened);
    const closeEditSectionMenu = useStore((state) => state.EditSectionMenu.close);

    return (
        <Menu opened={opened} shadow="md" width={300} position={"right-start"} closeOnClickOutside={true}>
            <Menu.Target>
                <ActionIcon
                    classNames={{ root: styles.actionIcon }}
                    variant={"filled"}
                    color={"#fff"}
                    size={"xl"}
                    aria-label="add-section"
                    onClick={() => {
                        open();
                        if (isEditSectionMenuOpened) closeEditSectionMenu();
                    }}
                >
                    <PlusIcon />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown p={12} className={styles.dropdown}>
                <DropdownHeader />
                {activeSection ? <SpecificSectionList /> : <SectionList /> }
            </Menu.Dropdown>
        </Menu>
    );
}
