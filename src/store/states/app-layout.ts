import { IStateSlice } from "@/store/store";
import { mockLayout } from "@/mock/mock-layout";

export interface IAppLayoutState {
    layout: IPage[];

    setLayout: (layout: IPage[]) => void;
    reorderPages: (pages: IPage[]) => void;
    reorderSections: (pageId: number, sections: ISection[]) => void;
    updateSectionProps: (sectionId: number, props: IProp[]) => void;
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

            state.AppLayout.layout = newLayout;
        }),
    updateSectionProps: (sectionId, props) =>
        set((state) => {
            const layout = get().AppLayout.layout;

            const newLayout = layout.map((page) => {
                const newPageSections = page.sections.map((section) => {
                    if (section.id === sectionId) {
                        return { ...section, props }
                    } else {
                        return section;
                    }
                })

                return { ...page, sections: newPageSections };
            });

            state.AppLayout.layout = newLayout;
        })
});
