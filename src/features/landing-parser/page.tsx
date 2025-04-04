import DynamicReactElement from "@/features/DynamicReactElement";

import layout from '../../app/api/data/components.json' assert { type: 'json' };

export default function LandingParserPage() {
    return <DynamicReactElement element={layout as any} />
}