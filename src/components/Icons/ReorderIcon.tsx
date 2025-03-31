import React from "react";
import type { SVGProps } from "react";

export function ReorderIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            {...props}
        >
            <g className="reorder-outline">
                <path
                    fill="currentColor"
                    d="M9.5 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5-15a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"
                    className="Vector"
                ></path>
            </g>
        </svg>
    );
}
