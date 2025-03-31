import { ActionIcon } from "@mantine/core";
import { DesktopIcon } from "@/components/Icons/DesktopIcon";

import { useStore } from "@/store";
import { Breakpoints } from "@/store/states/breakpoints";

import styles from "@/features/CanvasControls/styles.module.css";

export default function DesktopBreakpointButton() {
    const breakpoint = useStore((state) => state.Breakpoints.breakpoint);
    const setBreakpoint = useStore((state) => state.Breakpoints.setBreakpoint);

    return (
        <ActionIcon
            variant={"filled"}
            aria-label="desktop-view"
            classNames={{ root: styles.actionIcon }}
            color={breakpoint === Breakpoints.desktop ? "#fff" : "#e4e2df"}
            onClick={() => setBreakpoint(Breakpoints.desktop)}
        >
            <DesktopIcon />
        </ActionIcon>
    );
}
