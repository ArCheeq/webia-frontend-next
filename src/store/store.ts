import { createStore, StateCreator } from "zustand";
import { useStore as useZustandStore } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createInteractionPaneStore, IInteractionPaneState } from "@/store/states/interaction-pane";
import { createEditSectionMenuStore, IEditSectionMenuState } from "@/store/states/edit-section-menu";
import { createBreakpointsStore, IBreakpointsState } from "@/store/states/breakpoints";
import { createAppLayoutStore, IAppLayoutState } from "@/store/states/app-layout";

export interface IStore {
    InteractionPane: IInteractionPaneState;
    EditSectionMenu: IEditSectionMenuState;
    Breakpoints: IBreakpointsState;
    AppLayout: IAppLayoutState;
}

export const store = createStore<IStore>()(
    immer(
        devtools(
            (...a) => ({
                InteractionPane: createInteractionPaneStore(...a),
                EditSectionMenu: createEditSectionMenuStore(...a),
                Breakpoints: createBreakpointsStore(...a),
                AppLayout:  createAppLayoutStore(...a),
            }),
            { enabled: true, name: "APP (DEV)" },
        ),
    ),
);

export function useStore<T>(selector: (state: IStore) => T) {
    return useZustandStore(store, selector);
}

export function getStore() {
    return store.getState();
}

(globalThis as any).store = store;

export type IStateSlice<T> = StateCreator<IStore, [["zustand/immer", never]], [], T>;
