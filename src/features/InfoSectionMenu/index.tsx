import { ActionIcon, Menu, Tooltip } from "@mantine/core";
import { Icon } from "@iconify/react";

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
                        <Icon icon="material-symbols:help-outline-rounded" width="24" height="24" />
                    </ActionIcon>
                </Tooltip>
            </Menu.Target>

            <Menu.Dropdown p={12}>
                <Menu.Label>Application Interactions</Menu.Label>
            </Menu.Dropdown>
        </Menu>
    );
}
