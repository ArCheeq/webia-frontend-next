'use client';

import {
    Alert,
    Box,
    Button,
    Group,
    Loader,
    Stack,
    Stepper,
    TagsInput,
    Text,
    Textarea
} from "@mantine/core";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Controller } from "react-hook-form";

import { useGenerationForm } from "@/features/Homepage/hooks/useGenerationForm";


export default function MultistepGenerationForm() {
    const {
        form,
        onSubmit,
        isPending,
        isGenerated,
        error,
        stepper: {
            active,
            isFinalStep,
            setActive,
            prevStep,
            nextStep,
        }
    } = useGenerationForm();

    return (
        <Box w={'100%'} maw={800}>
            <form onSubmit={onSubmit}>
                <Stepper size={'sm'} color={'violet'} active={active} onStepClick={setActive} allowNextStepsSelect={false}>
                    <Stepper.Step label="First step" description="Сome up with a business name" allowStepSelect={!isPending}>
                        <Textarea
                            label={'Business name'}
                            description={'Enter the name of your website/business'}
                            placeholder={'Enter business name...'}
                            {...form.register('name')}
                            error={form.formState.errors.name?.message}
                        />
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Сome up with a short description" allowStepSelect={!isPending}>
                        <Textarea
                            label={'Short description'}
                            description={'Enter the short description of your website/business'}
                            placeholder={'Enter short description...'}
                            {...form.register('short_description')}
                            error={form.formState.errors.short_description?.message}
                        />
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Сome up with keywords" allowStepSelect={!isPending}>
                        <Controller
                            name={'key_points'}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <TagsInput
                                    label={'Keywords'}
                                    description="Press Enter to submit a keyword of your website/business"
                                    placeholder="Enter keyword..."
                                    styles={{ input: { minHeight: 56 } }}
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    error={fieldState.error?.message}
                                />
                            )}
                        />
                    </Stepper.Step>
                    <Stepper.Completed>
                        {isPending && (
                            <Alert
                                variant="light"
                                color="violet"
                                title="Site generation in progress"
                                icon={<Loader size={'xs'} />}
                            >
                                Your site is in the process of generating,
                                please stay on the page and do not reload it!
                            </Alert>
                        )}
                        {error && (
                            <Alert
                                variant="light"
                                color="red"
                                title="Site generation error"
                                icon={<Icon icon="material-symbols:error" width="24" height="24" />}
                            >
                                An error occurred while trying to generate a website: {error}
                            </Alert>
                        )}
                        {!isPending && !error && (
                            <Alert
                                variant="light"
                                color="green"
                                title="Site successfully generated!"
                                icon={<Icon icon="carbon:checkmark-filled" width="32" height="32" />}
                            >
                                <Stack align={'flex-start'} gap={'md'}>
                                    <Text>
                                        Your site has been successfully generated, go to the editor page to start customizing it.
                                    </Text>
                                    <Button component={Link} href={'/editor'}>
                                        Start customizing!
                                    </Button>
                                </Stack>
                            </Alert>
                        )}
                    </Stepper.Completed>
                </Stepper>

                {!isGenerated && (
                    <Group justify="center" mt="xl">
                        <Button loading={isPending} variant="default" onClick={prevStep}>Back</Button>
                        {!isFinalStep && (
                            <Button onClick={nextStep}>
                                Next step
                            </Button>
                        )}
                        {isFinalStep && (
                            <Button loading={isPending} type={'submit'}>
                                Generate
                            </Button>
                        )}
                    </Group>
                )}
            </form>
        </Box>
    )
}