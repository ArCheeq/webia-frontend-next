import { useState } from "react";

import { ActionIcon, Button, Flex, Menu, Stack, Textarea, Tooltip } from "@mantine/core";
import { Icon } from "@iconify/react";

import { useStore } from "@/store";

import styles from './styles.module.css';

export default function AiRegenerationMenu() {
    const [prompt, setPrompt] = useState("");

    const section = useStore((state => state.EditSectionMenu.section));
    const isRegenerating = useStore((state => state.EditSectionMenu.isRegenerating));
    const setRegenerating = useStore((state) => state.EditSectionMenu.setRegenerating);

    const regenerateSection = async () => {
        try {
            setRegenerating(true);

            const payload = { prompt, section }

            const response = await fetch('/api/regenerate-section', { method: "POST", body: JSON.stringify(payload) });
            const data = await response.json();

            // updateElement(activeSection?.key!, data);
            setPrompt("");
        } catch (error) {
            console.error(error);
        } finally {
            setRegenerating(false);
        }
    }

    return (
        <Menu shadow="md" width={300} position={'right-start'}>
            <Menu.Target>
                <ActionIcon size={"xl"} className={styles.regenerateControl}>
                    <Icon icon="ix:ai" width="24" height="24" />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown p={12}>
                <Stack>
                    <Textarea
                        label={'Ask Ai'}
                        styles={{ input: { minHeight: 150 }  }}
                        description={'You can regenerate a section or correct details, just enter the appropriate prompt'}
                        placeholder={'Enter prompt...'}
                        value={prompt}
                        onChange={(e) => setPrompt(e.currentTarget.value)}
                    />
                    <Flex justify={'flex-end'}>
                        <Tooltip label={'In Development'}>
                            <Button
                                size={'sm'}
                                disabled
                                leftSection={<Icon icon="mingcute:ai-line" width="24" height="24" />}
                                loading={isRegenerating}
                                onClick={regenerateSection}
                            >
                                Regenerate
                            </Button>
                        </Tooltip>
                    </Flex>
                </Stack>
            </Menu.Dropdown>
        </Menu>
    );
}