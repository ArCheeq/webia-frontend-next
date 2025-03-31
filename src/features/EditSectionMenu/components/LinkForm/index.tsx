import { Fragment, useEffect, useState } from "react";

import { Button, Flex, Menu, Select, Stack, TextInput } from "@mantine/core";
import { useLandingContext } from "@/store/landing-ctx";
import { useStore } from "@/store";

const linkTypes = [
    { label: "External", value: "https://" },
    { label: "Email", value: "mailto:" },
    { label: "Phone Number", value: "tel:" },
    { label: "Section", value: "#" },
];

export default function LinkForm() {
    const { updateElement } = useLandingContext();
    const activeElement = useStore((state) => state.EditSectionMenu.element);

    const type = activeElement?.type;
    const href = activeElement?.props.href;

    const [linkHref, setLinkHref] = useState<string | undefined>(href);
    const [linkType, setLinkType] = useState<string | null>(linkTypes[0].value);

    useEffect(() => {
        setLinkHref(href);
    }, [activeElement]);

    if (type !== "a") return null;

    const onSubmit = () => {
        if (!linkHref || !linkType) return;
        updateElement(activeElement?.key!, { props: { href: linkType + linkHref } });
    };

    return (
        <Fragment>
            <Menu.Item>
                <Menu.Label pl={0}>Link Attributes</Menu.Label>
                <Stack gap={8}>
                    <Select label={"Type"} data={linkTypes} value={linkType} onChange={setLinkType} />
                    <TextInput label={"Link"} value={linkHref} onChange={(e) => setLinkHref(e.currentTarget.value)} />
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
