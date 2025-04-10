import { Menu, Text } from "@mantine/core";
import { useStore } from "@/store";

export default function EmptySection() {
    const section = useStore((state) => state.EditSectionMenu.section);

    if (section) return null;

    return (
        <Menu.Item>
            <Text c={"dimmed"} fz={14} fw={500}>
                The active item is not selected. Please click on the item to start editing it.
            </Text>
        </Menu.Item>
    );
}
