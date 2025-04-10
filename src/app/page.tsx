import MultistepGenerationForm from "@/features/Homepage/components/MultistepGenerationForm";
import { Box, Container, Stack, Text } from "@mantine/core";

export default function HomepagePage() {
    return (
        <Box className={'bg-slate-100 h-dvh'}>
            <Container className={'h-dvh flex items-center justify-center'}>
                <Stack align={'center'}>
                    <Stack mb={100}>
                        <Text
                            fz={'2.25rem'}
                            lh={'2.5rem'}
                            fw={'bold'}
                            ta={'center'}
                        >
                            Supercharge Your
                            <Text
                                fz={'2.25rem'}
                                lh={'2.5rem'}
                                fw={'bold'}
                                ta={'center'}
                                component={'span'}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                            >
                                {' '}Web App Creation{' '}
                            </Text>
                            with AI
                        </Text>
                        <Text fz={'1.25rem'} lh={'1.75rem'} ta={'center'}>
                            All-in-one AI-powered platform that instantly generates,
                            structures, and customizes full-featured web applications-boost
                            your development speed and creativity like never before.
                        </Text>
                    </Stack>
                    <MultistepGenerationForm />
                </Stack>
            </Container>
        </Box>
    );
}
