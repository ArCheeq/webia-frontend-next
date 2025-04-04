import { IStateSlice } from "@/store/store";
import { mockLayout } from "@/mock/mock-layout";

export interface IAppLayoutState {
    layout: IPage[];

    setLayout: (layout: IPage[]) => void;
    reorderPages: (pages: IPage[]) => void;
    reorderSections: (pageId: number, sections: ISection[]) => void;
}

export const createAppLayoutStore: IStateSlice<IAppLayoutState> = (set, get) => ({
    layout: mockLayout,

    setLayout: (layout) =>
        set((state) => {
            state.AppLayout.layout = layout;
        }),
    reorderPages: (pages) =>
        set((state) => {
            state.AppLayout.layout = pages;
        }),
    reorderSections: (pageId, sections) =>
        set((state) => {
            const layout = get().AppLayout.layout;

            const newLayout = layout.map((page) => {
                if (page.id === pageId) {
                    return { ...page, sections }
                }

                return page;
            });

            console.log(newLayout)

            state.AppLayout.layout = newLayout;
        })
});
