import { Fragment, useEffect, useState } from "react";

import { Button, ColorInput, Flex, Menu, Stack, TextInput } from "@mantine/core";
import { useLandingContext } from "@/store/landing-ctx";
import { splitCamelCase } from "@/utils/splitCamelCase";
import { useStore } from "@/store";

const colorProperties = ["color", "backgroundColor", "borderColor", "outlineColor", "shadowColor"];

export default function StylesForm() {
    const activeElement = useStore((state) => state.EditSectionMenu.element);
    const { updateElement } = useLandingContext();
    const [formStyles, setFormStyles] = useState<Record<string, string | number> | null>(null);

    useEffect(() => {
        if (activeElement) {
            const { styles } = activeElement;

            const mappedStyles = Object.fromEntries(
                Object.entries(styles).filter(([key]) => !key.startsWith("@") && !key.startsWith("&")),
            ) as unknown as Record<string, string | number>;

            setFormStyles(mappedStyles);
        }
    }, [activeElement]);

    if (!formStyles || !activeElement) return null;

    const isColorProperty = (key: string) => {
        return colorProperties.some((prop) => key.toLowerCase().includes(prop.toLowerCase()));
    };

    const handleInputChange = (key: string, value: string) => {
        setFormStyles((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const onSubmit = () => {
        updateElement(activeElement.key, { styles: formStyles });
    };

    return (
        <Fragment>
            <Menu.Item>
                <Menu.Label pl={0}>Element Styles</Menu.Label>
                <Stack gap={8}>
                    {Object.entries(formStyles).map(([key]) =>
                        isColorProperty(key) ? (
                            <ColorInput
                                key={key}
                                label={splitCamelCase(key)}
                                placeholder={key}
                                value={String(formStyles[key])}
                                onChange={(value) => handleInputChange(key, value)}
                            />
                        ) : (
                            <TextInput
                                key={key}
                                label={splitCamelCase(key)}
                                placeholder={key}
                                value={String(formStyles[key])}
                                onChange={(event) => handleInputChange(key, event.currentTarget.value)}
                            />
                        ),
                    )}
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
