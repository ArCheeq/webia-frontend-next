import { ActionIcon, Button, Flex, Menu } from "@mantine/core";
import { TrashIcon } from "@/components/Icons/TrashIcon";
import { useLandingContext } from "@/store/landing-ctx";
import { useStore } from "@/store";

export default function Controls() {
    const activeElement = useStore((state) => state.EditSectionMenu.element);
    const close = useStore((state) => state.EditSectionMenu.close);
    const { deleteElement, copyElement } = useLandingContext();

    if (!activeElement) return null;

    const onDelete = () => {
        deleteElement(activeElement.key);
        close();
    };

    const onCopy = () => {
        copyElement(activeElement.key);
    };

    return (
        <Menu.Item>
            <Flex align={"center"} gap={8}>
                <ActionIcon onClick={onDelete} size={"lg"} variant={"outline"} color={"red"}>
                    <TrashIcon width={"24px"} height={"24px"} />
                </ActionIcon>
                <Button onClick={onCopy} variant={"filled"} color={"#e4e2df"} c={"#161616"} className={"grow"}>
                    Copy Element
                </Button>
            </Flex>
        </Menu.Item>
    );
}
