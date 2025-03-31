import { IStateSlice } from "@/store/store";

export enum Breakpoints {
    desktop = 1280,
    tablet = 740,
    mobile = 430,
}

export interface IBreakpointsState {
    breakpoint: Breakpoints;
    setBreakpoint: (newBreakpoint: Breakpoints) => void;
}

export const createBreakpointsStore: IStateSlice<IBreakpointsState> = (set, get) => ({
    breakpoint: Breakpoints.desktop,

    setBreakpoint: (newBreakpoint) =>
        set((state) => {
            state.Breakpoints.breakpoint = newBreakpoint;
        }),
});
