import { Fragment } from "react";
import { ActionIcon, Avatar, Box, Button, Divider, Text, Tooltip, UnstyledButton } from "@mantine/core";

import EditSectionMenu from "@/features/EditSectionMenu";
import InfoSectionMenu from "@/features/InfoSectionMenu";
import ExportTemplateButton from "@/features/CanvasControls/components/ExportTemplate";
import BreakpointButtons from "@/features/CanvasControls/components/BreakpointButtons";

import { PlusIcon } from "@/components/Icons/PlusIcon";

import styles from "./styles.module.css";

export default function CanvasControls() {
    return (
        <Fragment>
            <Box className={styles.topLeft}>
                <Tooltip label="Edit" withArrow position={"right"}>
                    <EditSectionMenu />
                </Tooltip>
                <Tooltip withArrow label={"In Development (Add section)"}>
                    <ActionIcon
                        disabled
                        classNames={{ root: styles.actionIcon }}
                        variant={"filled"}
                        color={"#fff"}
                        size={"xl"}
                        aria-label="edit-section"
                    >
                        <PlusIcon />
                    </ActionIcon>
                </Tooltip>
            </Box>
            <Box className={styles.topRight}>
                <Avatar variant="filled" radius="xl" color="orange" src="" />
                <Tooltip withArrow label={"In Development (Share Template)"}>
                    <Button disabled classNames={{ root: styles.actionIcon }} color={"#ecebe9"}>
                        Share
                    </Button>
                </Tooltip>
                <ExportTemplateButton />
                <Tooltip withArrow label={"In Development (Upgrade)"}>
                    <Button disabled classNames={{ root: styles.actionIcon }} color={"#ecebe9"}>
                        Upgrade
                    </Button>
                </Tooltip>
            </Box>
            <Box className={styles.bottomLeft}>
                <InfoSectionMenu />
            </Box>
            <Box className={styles.bottomRight}>
                <BreakpointButtons.Desktop />
                <BreakpointButtons.Tablet />
                <BreakpointButtons.Mobile />
                <Divider ml={6} color={"#16161626"} orientation="vertical" />
                <UnstyledButton px={12} color={"#e4e2df"}>
                    <Text fz={14} fw={500} c={"#686868"}>
                        75%
                    </Text>
                </UnstyledButton>
            </Box>
        </Fragment>
    );
}
