"use client";

import React, { PropsWithChildren, useContext, useState } from "react";

import { mockLayout } from "@/mock/mock-layout";
import { numberid } from "@/utils/numberid";

interface ILandingContextProps {
    layout: IDynamicElement[];
    reorderPages: (reorderedPages: IDynamicElement[]) => void;
    reorderSections: (pageId: number, reorderedSections: IDynamicElement[]) => void;
    deleteElement: (keyToDelete: string) => void;
    copyElement: (keyToCopy: string) => void;
    addElement: (parentKey: string, newElement: IDynamicElement) => void;
    updateElement: (keyToUpdate: string, updates: Partial<IDynamicElement>) => void;
    addSection: (parentIndex: number, indexToAdd: number, newSection: IDynamicElement) => void;
}

const LandingCtx = React.createContext<ILandingContextProps | null>(null);

export const LandingContextProvider = ({ children }: PropsWithChildren) => {
    const [layout, setLayout] = useState<Array<IDynamicElement>>(mockLayout);

    const deleteElement = (keyToDelete: string) => {
        if (!layout) return;

        const deleteRecursive = (element: IDynamicElement | null): IDynamicElement | null => {
            if (!element || element.key === keyToDelete) {
                return null;
            }

            return {
                ...element,
                children: element.children
                    .map((child) => deleteRecursive(child))
                    .filter((child): child is IDynamicElement => child !== null),
            };
        };

        const newLayout = layout
            .map((item) => deleteRecursive(item))
            .filter((item): item is IDynamicElement => item !== null);
        setLayout(newLayout);
    };

    const addElement = (parentKey: string, newElement: IDynamicElement) => {
        if (!layout) return;

        const addRecursive = (element: IDynamicElement): IDynamicElement => {
            if (element.key === parentKey) {
                return {
                    ...element,
                    children: [...element.children, newElement],
                };
            }

            return {
                ...element,
                children: element.children
                    .map((child) => addRecursive(child))
                    .filter((child): child is IDynamicElement => child !== null),
            };
        };

        const newLayout = layout.map((item) => addRecursive(item));
        setLayout(newLayout);
    };

    const updateElement = (keyToUpdate: string, updates: Partial<IDynamicElement>) => {
        if (!layout) return;

        const updateRecursive = (element: IDynamicElement): IDynamicElement => {
            if (element.key === keyToUpdate) {
                return {
                    ...element,
                    ...updates,
                    props: { ...element.props, ...(updates.props || {}) },
                    styles: { ...element.styles, ...(updates.styles || {}) },
                    children: updates.children !== undefined ? updates.children : element.children,
                };
            }

            return {
                ...element,
                children: element.children.map((child) => updateRecursive(child)),
            };
        };

        const newLayout = layout.map((item) => updateRecursive(item));
        setLayout(newLayout);
    };

    const copyElement = (keyToCopy: string) => {
        if (!layout) return;

        const createCopy = (element: IDynamicElement): IDynamicElement => ({
            ...element,
            id: numberid(),
            key: `${element.key}-copy-${Date.now()}`,
            children: element.children.map((child) => createCopy(child)),
        });

        const copyRecursive = (element: IDynamicElement): IDynamicElement => {
            return {
                ...element,
                children: element.children.reduce((acc: IDynamicElement[], child) => {
                    if (child.key === keyToCopy) {
                        const copiedElement = createCopy(child);
                        return [...acc, child, copiedElement];
                    }
                    return [...acc, copyRecursive(child)];
                }, []),
            };
        };

        const newLayout = layout.map((item) => copyRecursive(item));
        setLayout(newLayout);
    };

    const reorderPages = (reorderedPages: IDynamicElement[]) => {
        setLayout(reorderedPages);
    };

    const reorderSections = (pageId: number, reorderedSections: IDynamicElement[]) => {
        setLayout((layout) => {
            return layout.map((page) => {
                if (page.id === pageId) {
                    page.children = reorderedSections;
                    return page;
                } else {
                    return page;
                }
            });
        });
    };

    const addSection = (parentIndex: number, indexToAdd: number, newSection: IDynamicElement) => {
        const newLayout =  layout.map((page, pageIdx) => {
            if (pageIdx === parentIndex) {
                return {
                    ...page,
                    children: [
                        ...page.children.slice(0, indexToAdd),
                        newSection,
                        ...page.children.slice(indexToAdd)
                    ]
                };
            }
            return page;
        });

        setLayout(newLayout);
    };

    return (
        <LandingCtx.Provider
            value={{
                layout,
                reorderPages,
                reorderSections,
                deleteElement,
                copyElement,
                addElement,
                updateElement,
                addSection,
            }}
        >
            {children}
        </LandingCtx.Provider>
    );
};

export const useLandingContext = () => {
    const context = useContext(LandingCtx);

    if (!context) {
        throw new Error("Landing Context must be used within Landing Context Provider");
    }

    return context;
};
