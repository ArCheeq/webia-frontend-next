import { ReactNode } from "react";

import Empty from "@/features/AddSectionMenu/components/SpecificSectionList/Empty";
import Gallery from "@/features/AddSectionMenu/components/SpecificSectionList/Gallery";

import { useStore } from "@/store";

import { TSections } from "@/constants/sections";

const sectionsPreset: Record<TSections, ReactNode>  = {
    "banner": <Empty />,
    "content": <Empty />,
    "schedule": <Empty />,
    "gallery": <Gallery />,
}

export default function SpecificSectionList() {
    const activeSection = useStore((state) => state.AddSectionMenu.activeSection);

    const activePreset = sectionsPreset[activeSection?.value!];

    return activePreset || null;
}