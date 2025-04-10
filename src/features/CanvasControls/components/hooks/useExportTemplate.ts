import { useState } from "react";


export function useExportTemplate() {
    const [isPending, setIsPending] = useState(false);

    const onExportTemplate = async (layout: IPage[]) => {
        try {
            setIsPending(true);
            await fetch("/api/save-layout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(layout),
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIsPending(false);
        }
    };

    return { isPending, onExportTemplate };
}