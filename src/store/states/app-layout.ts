import { nanoid } from "nanoid";

import { IStateSlice } from "@/store/store";
import layout from "../../app/api/layout/layout2.json" assert { type: "json" };

export interface IAppLayoutState {
    layout: IPage[];

    setLayout: (layout: IPage[]) => void;
    reorderPages: (pages: IPage[]) => void;
    reorderSections: (pageId: string, sections: ISection[]) => void;
    updateSectionProps: (sectionId: string, props: IProp[]) => void;
    deleteSection: (sectionId: string) => void;
    copySection: (sectionId: string) => void;
}

export const createAppLayoutStore: IStateSlice<IAppLayoutState> = (set, get) => ({
    layout: layout as any,

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
        }),
    deleteSection: (sectionId) =>
        set((state) => {
            const layout = get().AppLayout.layout;

            const newLayout = layout.map((page) => {
                const newSections = page.sections.filter(
                    (section) => section.id !== sectionId
                );

                return { ...page, sections: newSections };
            });

            state.AppLayout.layout = newLayout;
        }),
    copySection: (sectionId) =>
        set((state) => {
            const layout = get().AppLayout.layout;

            const newLayout = layout.map((page) => {
                const sectionIndex = page.sections.findIndex(
                    (section) => section.id === sectionId
                );
                if (sectionIndex === -1) return page;

                const sectionToCopy = page.sections[sectionIndex];
                const newSection = {
                    ...sectionToCopy,
                    id: nanoid(),
                };

                const newSections = [
                    ...page.sections.slice(0, sectionIndex + 1),
                    newSection,
                    ...page.sections.slice(sectionIndex + 1),
                ];

                return { ...page, sections: newSections };
            });

            state.AppLayout.layout = newLayout;
        }),
});
