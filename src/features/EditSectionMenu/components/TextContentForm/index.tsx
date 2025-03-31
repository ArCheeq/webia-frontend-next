import { Fragment, useEffect, useState } from "react";

import { Button, Flex, Menu, Stack, Textarea } from "@mantine/core";
import { useLandingContext } from "@/store/landing-ctx";
import { useStore } from "@/store";

export default function TextContentForm() {
    const activeElement = useStore((state) => state.EditSectionMenu.element);
    const { updateElement } = useLandingContext();
    const textContent = activeElement?.props.textContent;

    const [value, setValue] = useState(textContent);

    useEffect(() => {
        setValue(textContent);
    }, [activeElement]);

    if (!textContent) return null;

    const onSubmit = () => {
        if (!value) return;
        updateElement(activeElement?.key!, { props: { textContent: value } });
    };

    return (
        <Fragment>
            <Menu.Item>
                <Menu.Label pl={0}>Text</Menu.Label>
                <Stack gap={8}>
                    <Textarea
                        label={"Text Content"}
                        styles={{ input: { minHeight: 200 } }}
                        value={value}
                        onChange={(e) => setValue(e.currentTarget.value)}
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
