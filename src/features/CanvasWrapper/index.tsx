import { PropsWithChildren } from "react";

import { Box } from "@mantine/core";

import CanvasControls from "@/features/CanvasControls";
import InteractionPane from "@/features/InteractionPane";

import styles from "./styles.module.css";

export default function CanvasWrapper({ children }: PropsWithChildren) {
    return (
        <Box className={styles.pageContainer}>
            <Box className={styles.overlayContainer}>
                <Box className={styles.childrenContainer}>
                    <InteractionPane>
                        <Box className={styles.pagesContainer}>{children}</Box>
                    </InteractionPane>
                    <CanvasControls />
                </Box>
            </Box>
        </Box>
    );
}
