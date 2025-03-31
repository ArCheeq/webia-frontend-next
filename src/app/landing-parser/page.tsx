import DynamicReactElement from "@/features/DynamicReactElement";

import layout from '../api/data/components.json' assert { type: 'json' };

export default function LandingParserPage() {
    return <DynamicReactElement element={layout as any} />
}