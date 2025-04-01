import {getStore, IStateSlice} from "@/store/store";
import { TSection } from "@/constants/sections";

export interface IAddSectionMenuState {
    opened: boolean;
    activeSection: TSection | null;
    parentIndex: number;
    indexToAdd: number;

    open: () => void;
    close: () => void;
    setSection: (section: TSection | null) => void;
    setParentIndex: (parentIndex: number) => void;
    setIndexToAdd: (indexToAdd: number) => void;
}

export const createAddSectionMenuStore: IStateSlice<IAddSectionMenuState> = (set, get) => ({
    opened: false,
    activeSection: null,
    parentIndex: 0,
    indexToAdd: 0,

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
        }),
    setParentIndex: (parentIndex: number) =>
        set((state) => {
            state.AddSectionMenu.parentIndex = parentIndex;
        }),
    setIndexToAdd: (indexToAdd: number) =>
        set((state) => {
            state.AddSectionMenu.indexToAdd = indexToAdd;
        }),
});
