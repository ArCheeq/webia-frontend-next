import { Button, Flex, Stack } from "@mantine/core";
import { FormProvider } from "react-hook-form";

import TextInputField from "@/features/EditSectionMenu/components/EditSectionForm/TextInputField";
import TextAreaField from "@/features/EditSectionMenu/components/EditSectionForm/TextAreaField";

import { useStore } from "@/store";
import { useEditSection } from "@/features/EditSectionMenu/hooks/useEditSection";

export default function EditSectionForm() {
    const { form, onSubmit } = useEditSection();
    const section = useStore((state) => state.EditSectionMenu.section);

    const fields = section?.props;

    const getField = (field: IProp) => {
        switch (field.propType) {
            case "src":
                return <TextInputField key={field.propName} field={field} />;
            case "alt":
                return <TextInputField key={field.propName} field={field} />;
            case "href":
                return <TextInputField key={field.propName} field={field} />;
            case "text":
                return <TextAreaField key={field.propName} field={field} />;
            default:
                return null;
        }
    }

    if (!section) return null;

    return (
        <FormProvider {...form}>
            <form onSubmit={onSubmit}>
                <Stack pt={12} gap={12}>
                    {fields?.map((field) => getField(field))}
                    <Flex justify={'flex-end'}>
                        <Button loading={form.formState.isSubmitting} type={'submit'}>
                            Save Changes
                        </Button>
                    </Flex>
                </Stack>
            </form>
        </FormProvider>
    );
}
