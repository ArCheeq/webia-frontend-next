import { Fragment, useState } from "react";
import { Button, Loader, Overlay } from "@mantine/core";

import { useRouter } from "next/navigation";

import { useStore } from "@/store";

import styles from './styles.module.css';

export default function ExportTemplateButton() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const layout = useStore((state) => state.AppLayout.layout);

    const onExportTemplate = async () => {
        try {
            setIsPending(true);
            await fetch("/api/save-layout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(layout),
            });

            const homepageLink = layout[0]?.path;
            router.push(`/landing/${homepageLink}`);
        } catch (error) {
            console.error(error);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Fragment>
            <Button onClick={onExportTemplate} classNames={{ root: styles.exportButton }} color={"#ecebe9"}>
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
