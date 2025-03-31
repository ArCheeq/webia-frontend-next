import { IStateSlice } from "@/store/store";

export interface IEditSectionMenuState {
    opened: boolean;
    element: IDynamicElement | null;

    open: (element?: IDynamicElement) => void;
    close: () => void;
}

export const createEditSectionMenuStore: IStateSlice<IEditSectionMenuState> = (set, get) => ({
    opened: false,
    element: null,

    open: (element) =>
        set((state) => {
            if (!element) {
                state.EditSectionMenu.opened = true;
                return;
            }

            const currentElement = get().EditSectionMenu.element;
            const close = get().EditSectionMenu.close;

            if (currentElement?.key === element.key) {
                close();
            } else {
                state.EditSectionMenu.opened = true;
                state.EditSectionMenu.element = element;
            }
        }),
    close: () =>
        set((state) => {
            state.EditSectionMenu.opened = false;
            state.EditSectionMenu.element = null;
        }),
});
