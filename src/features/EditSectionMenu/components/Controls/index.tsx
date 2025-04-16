import { ActionIcon, Button, Flex } from "@mantine/core";
import { Icon } from "@iconify/react";

import { useStore } from "@/store";

export default function Controls() {
    const section = useStore((state) => state.EditSectionMenu.section);
    const close = useStore((state) => state.EditSectionMenu.close);
    const deleteSection = useStore((state) => state.AppLayout.deleteSection);
    const copySection = useStore((state) => state.AppLayout.copySection);

    if (!section) return null;

    const onDelete = () => {
        close();
        deleteSection(section?.id!);
    };

    const onCopy = () => {
        copySection(section?.id!);
    };

    return (
        <Flex align={"center"} gap={8}>
            <ActionIcon onClick={onDelete} size={"lg"} variant={"outline"} color={"red"}>
                <Icon icon="mynaui:trash" width="24" height="24" />
            </ActionIcon>
            <Button onClick={onCopy} variant={"outline"} color={"violet"} className={"grow"}>
                Copy Element
            </Button>
        </Flex>
    );
}
