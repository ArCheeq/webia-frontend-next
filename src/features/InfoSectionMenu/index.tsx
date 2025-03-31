import { ActionIcon, CloseButton, Group, Menu, Text, Tooltip } from "@mantine/core";
import { HelpIcon } from "@/components/Icons/HelpIcon";

import styles from "./styles.module.css";

export default function InfoSectionMenu() {
    return (
        <Menu shadow="md" width={300} position={"right-end"}>
            <Menu.Target>
                <Tooltip label={"In Development (Help & Info)"}>
                    <ActionIcon
                        disabled
                        classNames={{ root: styles.actionIcon }}
                        variant={"filled"}
                        color={"#fff"}
                        size={"xl"}
                        aria-label="info-section"
                    >
                        <HelpIcon />
                    </ActionIcon>
                </Tooltip>
            </Menu.Target>

            <Menu.Dropdown p={12}>
                <Menu.Label>Application Interactions</Menu.Label>
            </Menu.Dropdown>
        </Menu>
    );
}
