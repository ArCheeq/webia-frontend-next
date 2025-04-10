import { useStore } from "@/store";
import { useForm } from "react-hook-form";


export function useEditSection() {
    const section = useStore((state) => state.EditSectionMenu.section);
    const updateSectionProps = useStore((state) => state.AppLayout.updateSectionProps);

    const fields = section?.props;

    const defaultValues = fields?.reduce<Record<string, string>>((acc, field) => {
        acc[field.propName] = field.propValue;
        return acc;
    }, {});

    const form = useForm({
        values: defaultValues
    });

    const onSubmit = form.handleSubmit((values) => {
        const newSectionProps = fields?.map((field) => {
            return { ...field, propValue: values[field.propName] };
        });

        updateSectionProps(section?.id!, newSectionProps!);
    });

    return { form, onSubmit };
}