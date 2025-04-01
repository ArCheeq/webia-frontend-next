import { Center, Text } from "@mantine/core";


export default function Empty() {
    return (
        <Center py={'md'}>
            <Text ta={'center'} c={'dimmed'}>
                This section list is empty. (In development)
            </Text>
        </Center>
    )
}