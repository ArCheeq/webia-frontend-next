"use client";

import React from "react";
import { motion } from "framer-motion";

import * as Babel from "@babel/standalone";

interface IProps {
    section: ISection;
}

export default function DynamicSection({ section }: IProps) {
    const { id, props, code } = section;

    let DynamicSectionComponent: any;

    try {
        const transformed = Babel.transform(code, { presets: ["react"] }).code;
        DynamicSectionComponent = new Function("React", "motion", `return ${transformed}`)(React, motion);
    } catch (error) {
        throw new Error(
            `Failed to parse and execute the dynamic component code. This could be due to a syntax error, missing dependencies, or an issue with the transformation process. 
             Ensure that the provided code is valid JSX/React syntax and does not rely on external variables that are not passed in. 
             Original error message: ${error}`,
        );
    }

    if (!DynamicSectionComponent) return null;

    const initAcc: Record<string, any> = {};

    const mappedProps = props.reduce((acc, prop) => {
        acc[prop.propName] = prop.propValue;
        return acc;
    }, initAcc);

    return <DynamicSectionComponent key={id} {...mappedProps} />;
}
