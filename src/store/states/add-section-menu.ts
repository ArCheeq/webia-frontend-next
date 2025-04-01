import {getStore, IStateSlice} from "@/store/store";
import { TSection } from "@/constants/sections";

export interface IAddSectionMenuState {
    opened: boolean;
    activeSection: TSection | null;

    open: () => void;
    close: () => void;
    setSection: (section: TSection | null) => void;
}

export const createAddSectionMenuStore: IStateSlice<IAddSectionMenuState> = (set, get) => ({
    opened: false,
    activeSection: null,

    open: () =>
        set((state) => {
            const isEditSectionMenuOpened = get().EditSectionMenu.opened;

            if (isEditSectionMenuOpened) getStore().EditSectionMenu.close();

            state.AddSectionMenu.opened = true;
        }),
    close: () =>
        set((state) => {
            state.AddSectionMenu.opened = false;
            state.AddSectionMenu.activeSection = null;
        }),
    setSection: (section: TSection | null) =>
        set((state) => {
            state.AddSectionMenu.activeSection = section;
        })
});
