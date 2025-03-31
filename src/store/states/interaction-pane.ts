import { IStateSlice } from "@/store/store";

export interface IInteractionPaneState {
    offset: { x: number; y: number };
    scale: number;

    setOffset: (newOffset: IInteractionPaneState["offset"]) => void;
    setScale: (newScale: IInteractionPaneState["scale"]) => void;
}

export const createInteractionPaneStore: IStateSlice<IInteractionPaneState> = (set, get) => ({
    offset: { x: 0, y: 0 },
    scale: 0.12,

    setOffset: (newOffset) =>
        set((state) => {
            state.InteractionPane.offset = newOffset;
        }),
    setScale: (newScale) =>
        set((state) => {
            state.InteractionPane.scale = newScale;
        }),
});
