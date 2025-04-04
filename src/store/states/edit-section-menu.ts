import { IStateSlice } from "@/store/store";

export interface IEditSectionMenuState {
    opened: boolean;
    section: ISection| null;

    open: (section?: ISection) => void;
    close: () => void;
}

export const createEditSectionMenuStore: IStateSlice<IEditSectionMenuState> = (set, get) => ({
    opened: false,
    section: null,

    open: (section) =>
        set((state) => {
            if (!section) {
                state.EditSectionMenu.opened = true;
                return;
            }

            const currentSection = get().EditSectionMenu.section;
            const close = get().EditSectionMenu.close;

            if (currentSection?.id === section.id) {
                close();
            } else {
                state.EditSectionMenu.opened = true;
                state.EditSectionMenu.section = section;
            }
        }),
    close: () =>
        set((state) => {
            state.EditSectionMenu.opened = false;
            state.EditSectionMenu.section = null;
        }),
});
