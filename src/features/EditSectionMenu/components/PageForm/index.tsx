import { Button, Flex, Menu, Stack, TextInput } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { useStore } from "@/store";
import { useLandingContext } from "@/store/landing-ctx";

export default function PageForm() {
    const { updateElement } = useLandingContext();
    const activeElement = useStore((state) => state.EditSectionMenu.element);

    const [pageLink, setPageLink] = useState(activeElement?.pageLink);
    const [pageName, setPageName] = useState(activeElement?.pageName);

    useEffect(() => {
        setPageLink(activeElement?.pageLink);
        setPageName(activeElement?.pageName);
    }, [activeElement]);

    const onSubmit = () => {
        if (!pageLink || !pageName) return;
        updateElement(activeElement?.key!, { pageName, pageLink });
    };

    return (
        <Fragment>
            <Menu.Item>
                <Menu.Label pl={0}>Page Attributes</Menu.Label>
                <Stack gap={8}>
                    <TextInput
                        label={"Page Name"}
                        value={pageName}
                        onChange={(e) => setPageName(e.currentTarget.value)}
                    />
                    <TextInput
                        label={"Page Link"}
                        value={pageLink}
                        leftSection={"/"}
                        onChange={(e) => setPageLink(e.currentTarget.value)}
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
