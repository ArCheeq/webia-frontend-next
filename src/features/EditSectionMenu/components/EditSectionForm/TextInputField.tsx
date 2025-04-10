import { TextInput } from "@mantine/core";
import { useFormContext } from "react-hook-form";


interface IProps {
    field: IProp;
}

export default function TextInputField({ field }: IProps) {
    const form = useFormContext();

    return (
        <TextInput
            label={field.propLabel}
            {...form.register(field.propName)}
        />
    )
}