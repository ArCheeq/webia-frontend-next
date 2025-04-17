import { Fragment } from "react";
import { Avatar, Box, Button, Divider, Text, Tooltip, UnstyledButton } from "@mantine/core";

import InfoSectionMenu from "@/features/InfoSectionMenu";
import EditSectionMenu from "@/features/EditSectionMenu";
import TemplateTabs from "@/features/CanvasControls/components/TemplateTabs";
import ExportTemplateButton from "@/features/CanvasControls/components/ExportTemplate";
import BreakpointButtons from "@/features/CanvasControls/components/BreakpointButtons";

import { useStore } from "@/store";

import styles from "./styles.module.css";

export default function CanvasControls() {
    const scale = useStore((state) => state.InteractionPane.scale);
    const scalePercent = scale * 100;
    let formattedScale;

    if (scalePercent >= 1) {
        formattedScale = Math.round(scalePercent);
    } else {
        formattedScale = scalePercent.toFixed(2);
    }

    return (
        <Fragment>
            <Box className={styles.topLeft}>
                <Tooltip label="Edit" withArrow position={"right"}>
                    <EditSectionMenu />
                </Tooltip>
            </Box>
            <Box className={styles.topCenter}>
                <Tooltip label={'Templates'} withArrow position={'bottom-start'}>
                    <TemplateTabs />
                </Tooltip>
            </Box>
            <Box className={styles.topRight}>
                <Avatar variant="filled" radius="xl" color="violet" src="" />
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
            <Tooltip withArrow label={"In Development (Resize)"}>
                <Box className={styles.bottomRight}>
                    <BreakpointButtons.Desktop />
                    <BreakpointButtons.Tablet />
                    <BreakpointButtons.Mobile />
                    <Divider ml={6} color={"#16161626"} orientation="vertical" />
                    <UnstyledButton px={12} color={"#e4e2df"}>
                        <Text fz={14} fw={500} c={"#686868"}>
                            {formattedScale}%
                        </Text>
                    </UnstyledButton>
                </Box>
            </Tooltip>
        </Fragment>
    );
}
