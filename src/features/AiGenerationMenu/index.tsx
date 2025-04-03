import { Icon } from "@iconify/react";
import { ActionIcon, Button, Flex, Menu, Stack, Textarea } from "@mantine/core";

import { useStore } from "@/store";

import styles from './styles.module.css';
import { useState } from "react";
import {useLandingContext} from "@/store/landing-ctx";

export default function AiGenerationMenu() {
    const [prompt, setPrompt] = useState("Change styles in for the section in modern tech design, with neon, dark mode");
    const { updateElement } = useLandingContext();

    const activeSection = useStore((state => state.EditSectionMenu.element));
    const isRegenerating = useStore((state => state.EditSectionMenu.isRegenerating));
    const setRegenerating = useStore((state) => state.EditSectionMenu.setRegenerating);

    const regenerateSection = async () => {
        try {
            setRegenerating(true);

            const payload = { prompt: prompt, section: activeSection }

            const response = await fetch('/api/regenerate-section', { method: "POST", body: JSON.stringify(payload) });
            const data = await response.json();

            updateElement(activeSection?.key!, data);
            setPrompt("");
        } catch (error) {
            console.error(error);
        } finally {
            setRegenerating(false);
        }
    }

    return (
        <Menu shadow="md" width={300} position={'left-start'}>
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
                        description={'You can regenerate a section or correct details, just enter the appropriate prompt for ai to do so'}
                        placeholder={'Enter prompt...'}
                        value={prompt}
                        onChange={(e) => setPrompt(e.currentTarget.value)}
                    />
                    <Flex justify={'flex-end'}>
                        <Button
                            size={'sm'}
                            leftSection={<Icon icon="mingcute:ai-line" width="24" height="24" />}
                            loading={isRegenerating}
                            onClick={regenerateSection}
                        >
                            Regenerate
                        </Button>
                    </Flex>
                </Stack>
            </Menu.Dropdown>
        </Menu>
    );
}