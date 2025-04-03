import { Fragment, useState } from "react";
import { Button, Loader, Overlay, Tooltip } from "@mantine/core";

import { useLandingContext } from "@/store/landing-ctx";
import { useRouter } from "next/navigation";

import styles from "./styles.module.css";

export default function ExportTemplateButton() {
    const { layout } = useLandingContext();
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const onExportTemplate = async () => {
        try {
            setIsPending(true);
            await fetch("/api/saveData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(layout),
            });
            router.replace(`/landing-parser/homepage`);
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
