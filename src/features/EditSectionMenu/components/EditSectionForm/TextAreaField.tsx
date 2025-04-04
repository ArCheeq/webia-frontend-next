import { Textarea } from "@mantine/core";
import { useFormContext } from "react-hook-form";


interface IProps {
    field: IProp;
}

export default function TextAreaField({ field }: IProps) {
    const form = useFormContext();

    return (
        <Textarea
            label={field.propLabel}
            styles={{ input: { minHeight: 150 } }}
            {...form.register(field.propName)}
        />
    )
}