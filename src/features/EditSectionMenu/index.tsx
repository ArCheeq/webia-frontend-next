import { ActionIcon, Menu } from "@mantine/core";

import DropdownHeader from "@/features/EditSectionMenu/components/DropdownHeader";
import EditPage from "@/features/EditSectionMenu/EditPage";
import EditSection from "@/features/EditSectionMenu/EditSection";

import { EditIcon } from "@/components/Icons/EditIcon";

import { useStore } from "@/store";

import styles from "./styles.module.css";

export default function EditSectionMenu() {
    const opened = useStore((state) => state.EditSectionMenu.opened);
    const open = useStore((state) => state.EditSectionMenu.open);
    const activeElement = useStore((state) => state.EditSectionMenu.element);

    return (
        <Menu opened={opened} shadow="md" width={300} position={"right-start"} closeOnClickOutside={true}>
            <Menu.Target>
                <ActionIcon
                    classNames={{ root: styles.actionIcon }}
                    variant={"filled"}
                    color={"#fff"}
                    size={"xl"}
                    aria-label="edit-section"
                    onClick={() => open()}
                >
                    <EditIcon />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown p={12} className={styles.dropdown}>
                <DropdownHeader />
                {activeElement?.pageName ? <EditPage /> : <EditSection />}
            </Menu.Dropdown>
        </Menu>
    );
}
