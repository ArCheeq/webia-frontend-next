import { ActionIcon, Menu } from "@mantine/core";
import { Icon } from "@iconify/react";

import DropdownHeader from "@/features/EditSectionMenu/components/DropdownHeader";
import EmptySection from "@/features/EditSectionMenu/components/EmptySection";
import Controls from "@/features/EditSectionMenu/components/Controls";
import EditSectionForm from "@/features/EditSectionMenu/components/EditSectionForm";

import { useStore } from "@/store";

import styles from "./styles.module.css";

export default function EditSectionMenu() {
    const opened = useStore((state) => state.EditSectionMenu.opened);
    const open = useStore((state) => state.EditSectionMenu.open);

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
                    <Icon icon="material-symbols:edit-outline" width="24" height="24" />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown p={12} className={styles.dropdown}>
                <DropdownHeader />
                <EmptySection />
                <Controls />
                <EditSectionForm />
            </Menu.Dropdown>
        </Menu>
    );
}
