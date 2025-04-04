import { ActionIcon, Button, Flex, Menu } from "@mantine/core";
import { Icon } from "@iconify/react";

import { useStore } from "@/store";

export default function Controls() {
    const section = useStore((state) => state.EditSectionMenu.section);
    const close = useStore((state) => state.EditSectionMenu.close);

    if (!section) return null;

    const onDelete = () => {
        // deleteElement(activeElement.key);
        close();
    };

    const onCopy = () => {
        // copyElement(activeElement.key);
    };

    return (
        <Flex align={"center"} gap={8}>
            <ActionIcon onClick={onDelete} size={"lg"} variant={"outline"} color={"red"}>
                <Icon icon="mynaui:trash" width="24" height="24" />
            </ActionIcon>
            <Button onClick={onCopy} variant={"filled"} color={"#e4e2df"} c={"#161616"} className={"grow"}>
                Copy Element
            </Button>
        </Flex>
    );
}
