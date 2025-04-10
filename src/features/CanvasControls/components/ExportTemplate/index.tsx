import { Fragment } from "react";
import { Button, Loader, Overlay } from "@mantine/core";

import { useRouter } from "next/navigation";

import { useStore } from "@/store";
import { useExportTemplate } from "@/features/CanvasControls/components/hooks/useExportTemplate";

import styles from './styles.module.css';

export default function ExportTemplateButton() {
    const router = useRouter();
    const layout = useStore((state) => state.AppLayout.layout);

    const { isPending, onExportTemplate } = useExportTemplate();

    const handleExportTemplate = async () => {
        await onExportTemplate(layout);
        const homepageLink = layout[0]?.path;
        router.push(`/landing/${homepageLink}`);
    };

    return (
        <Fragment>
            <Button onClick={handleExportTemplate} classNames={{ root: styles.exportButton }} color={"#ecebe9"}>
                Export
            </Button>
            {isPending && (
                <Overlay
                    pos={"fixed"}
                    className={"flex items-center justify-center"}
                    color="#000"
                    backgroundOpacity={0.35}
                    blur={3}
                    zIndex={100000}
                >
                    <Loader size={"lg"} />
                </Overlay>
            )}
        </Fragment>
    );
}
