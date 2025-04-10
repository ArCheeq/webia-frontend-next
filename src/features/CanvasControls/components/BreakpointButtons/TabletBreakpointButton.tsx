import { ActionIcon } from "@mantine/core";
import { Icon } from "@iconify/react";

import { useStore } from "@/store";
import { Breakpoints } from "@/store/states/breakpoints";

import styles from "@/features/CanvasControls/styles.module.css";

export default function TabletBreakpointButton() {
    const breakpoint = useStore((state) => state.Breakpoints.breakpoint);
    const setBreakpoint = useStore((state) => state.Breakpoints.setBreakpoint);

    return (
        <ActionIcon
            variant={"filled"}
            aria-label="tablet-view"
            classNames={{ root: styles.actionIcon }}
            color={breakpoint === Breakpoints.tablet ? "#fff" : "#e4e2df"}
            onClick={() => setBreakpoint(Breakpoints.tablet)}
        >
            <Icon icon="material-symbols-light:tablet-outline" width="24" height="24" />
        </ActionIcon>
    );
}
