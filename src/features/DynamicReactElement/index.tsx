'use client';

import React from 'react';

import styled from 'styled-components';
import * as Babel from '@babel/standalone';
import { createConfigItem } from "@babel/core";

interface DynamicReactElementProps {
    element: IDynamicElement;
}

export default function DynamicReactElement({ element }: DynamicReactElementProps) {
    const { key, props, styles, code, children } = element;

    const transformed = Babel.transform(code, { presets: ['react'], }).code;

    let DynamicComponent: any;

    try {
        DynamicComponent = new Function('React', `return ${transformed}`)(React);
    } catch (error) {
        throw new Error(
            `Failed to parse and execute the dynamic component code. This could be due to a syntax error, missing dependencies, or an issue with the transformation process. 
             Ensure that the provided code is valid JSX/React syntax and does not rely on external variables that are not passed in. 
             Original error message: ${error}`
        );
    }

    if (!DynamicComponent) return null;

    const StyledDynamicComponent = styled(DynamicComponent)`${styles}`;

    const content = props?.textContent ? props.textContent : children.map(child => <DynamicReactElement key={child.key} element={child} />)

    return (
        <StyledDynamicComponent key={key} {...props}>
            {content}
        </StyledDynamicComponent>
    );
};
