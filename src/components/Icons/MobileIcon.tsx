import React from "react";
import type { SVGProps } from "react";

export function MobileIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="none"
                stroke="#161616"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16.286 3H7.714C6.768 3 6 3.806 6 4.8v14.4c0 .994.768 1.8 1.714 1.8h8.572c.947 0 1.714-.806 1.714-1.8V4.8c0-.994-.767-1.8-1.714-1.8M10.5 6h3"
            ></path>
        </svg>
    );
}
