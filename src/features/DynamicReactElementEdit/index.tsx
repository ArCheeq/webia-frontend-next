"use client";

import React from "react";

import styled from "styled-components";
import * as Babel from "@babel/standalone";

import { useStore } from "@/store";

interface DynamicReactElementProps {
    element: IDynamicElement;
}

export default function DynamicReactElementEdit({ element }: DynamicReactElementProps) {
    const { id, key, props, styles, code, children } = element;

    const activeElement = useStore((state) => state.EditSectionMenu.element);
    const selectElement = useStore((state) => state.EditSectionMenu.open);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        selectElement(element);
    };
    const transformed = Babel.transform(code, { presets: ["react"] }).code;

    let DynamicComponent: any;

    try {
        DynamicComponent = new Function("React", `return ${transformed}`)(React);
    } catch (error) {
        throw new Error(
            `Failed to parse and execute the dynamic component code. This could be due to a syntax error, missing dependencies, or an issue with the transformation process. 
             Ensure that the provided code is valid JSX/React syntax and does not rely on external variables that are not passed in. 
             Original error message: ${error}`,
        );
    }

    if (!DynamicComponent) return null;

    const isComponentActive = activeElement && activeElement.id === id;

    const StyledDynamicComponent = styled(DynamicComponent)`
        ${styles}
        ${isComponentActive ? "outline: 2px solid blue;" : ""}
    `;

    const content = props?.textContent
        ? props.textContent
        : children.map((child) => <DynamicReactElementEdit key={child.key} element={child} />);

    return (
        <div style={{ display: "contents" }} onClick={handleClick}>
            <StyledDynamicComponent key={key} {...props}>
                {content}
            </StyledDynamicComponent>
        </div>
    );
}
