import { CloseButton, Group, Text } from "@mantine/core";
import { useStore } from "@/store";

export default function DropdownHeader() {
    const close = useStore((state) => state.EditSectionMenu.close);
    const activeElement = useStore((state) => state.EditSectionMenu.element);

    return (
        <Group px={12} py={8} align={"center"} justify={"space-between"}>
            <Text fz={16} fw={500}>
                {activeElement?.pageName ? "Page" : "Section"}
            </Text>
            <CloseButton onClick={close} />
        </Group>
    );
}
