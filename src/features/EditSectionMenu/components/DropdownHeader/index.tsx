import { CloseButton, Group, Text } from "@mantine/core";
import { useStore } from "@/store";

export default function DropdownHeader() {
    const close = useStore((state) => state.EditSectionMenu.close);

    return (
        <Group
            pb={12}
            align={"center"}
            justify={"space-between"}
        >
            <Text fz={16} fw={500}>
                Section
            </Text>
            <CloseButton onClick={close} />
        </Group>
    );
}
