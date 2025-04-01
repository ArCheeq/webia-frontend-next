import { ReactNode } from "react";
import { Icon }  from "@iconify/react";

export const sectionsPreset = {
    "GALLERY": "gallery",
    "BANNER": "banner",
    "CONTENT": "content",
    "SCHEDULE": "schedule",
} as const;

export const sections = [
    {
        id: 1,
        label: "Banner",
        value: sectionsPreset.BANNER,
        icon: <Icon icon="bx:home" width="24" height="24" />
    },
    {
        id: 2,
        label: "Content",
        value: sectionsPreset.CONTENT,
        icon: <Icon icon="quill:text-left" width="24" height="24" />
    },
    {
        id: 3,
        label: "Schedule",
        value: sectionsPreset.SCHEDULE,
        icon: <Icon icon="ic:round-schedule" width="24" height="24" />
    },
    {
        id: 4,
        label: "Gallery",
        value: sectionsPreset.GALLERY,
        icon: <Icon icon="solar:gallery-linear" width="24" height="24" />
    },
];

export type TSections = ValueOf<typeof sectionsPreset>;

export type TSection = {
    id: number;
    label: string;
    value: TSections;
    icon: ReactNode;
}