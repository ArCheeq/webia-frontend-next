import { Fragment, useEffect, useState } from "react";

import { Button, Flex, Menu, Stack, TextInput } from "@mantine/core";
import { useLandingContext } from "@/store/landing-ctx";
import { useStore } from "@/store";

export default function ImageForm() {
    const activeElement = useStore((state) => state.EditSectionMenu.element);
    const { updateElement } = useLandingContext();

    const type = activeElement?.type;
    const src = activeElement?.props.src;
    const alt = activeElement?.props.alt;

    const [srcValue, setSrcValue] = useState(src);
    const [altValue, setAltValue] = useState(alt);

    useEffect(() => {
        setSrcValue(src);
        setAltValue(alt);
    }, [activeElement]);

    if (type !== "img") return null;

    const onSubmit = () => {
        if (!srcValue || !altValue) return;
        updateElement(activeElement?.key!, { props: { src: srcValue, alt: altValue } });
    };

    return (
        <Fragment>
            <Menu.Item>
                <Menu.Label pl={0}>Image Attributes</Menu.Label>
                <Stack gap={8}>
                    <TextInput label={"Source"} value={srcValue} onChange={(e) => setSrcValue(e.currentTarget.value)} />
                    <TextInput
                        label={"Alternative Text"}
                        value={altValue}
                        onChange={(e) => setAltValue(e.currentTarget.value)}
                    />
                    <Flex justify={"flex-end"}>
                        <Button size={"xs"} onClick={onSubmit}>
                            Apply Changes
                        </Button>
                    </Flex>
                </Stack>
            </Menu.Item>
            <Menu.Divider />
        </Fragment>
    );
}
