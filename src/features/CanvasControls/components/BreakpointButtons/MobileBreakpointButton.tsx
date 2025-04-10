import { ActionIcon } from "@mantine/core";
import { Icon } from "@iconify/react";

import { useStore } from "@/store";
import { Breakpoints } from "@/store/states/breakpoints";

import styles from "@/features/CanvasControls/styles.module.css";

export default function MobileBreakpointButton() {
    const breakpoint = useStore((state) => state.Breakpoints.breakpoint);
    const setBreakpoint = useStore((state) => state.Breakpoints.setBreakpoint);

    return (
        <ActionIcon
            variant={"filled"}
            aria-label="mobile-view"
            classNames={{ root: styles.actionIcon }}
            color={breakpoint === Breakpoints.mobile ? "#fff" : "#e4e2df"}
            onClick={() => setBreakpoint(Breakpoints.mobile)}
        >
            <Icon icon="mynaui:mobile" width="24" height="24" />
        </ActionIcon>
    );
}
