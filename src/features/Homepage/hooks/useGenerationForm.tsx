import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useStore } from "@/store";
import { api } from "@/utils/api";

import { notifications } from '@mantine/notifications';
import {useExportTemplate} from "@/features/CanvasControls/components/hooks/useExportTemplate";

const generationSchema = z.object({
    name: z.string().min(3, "Business name must be at least 3 characters"),
    short_description: z.string().min(3, "Short description must be at least 3 characters"),
    key_points: z.array(z.string()).min(1, "The list of keywords must contain at least 1 element"),
});

type GenerationSchema = z.infer<typeof generationSchema>;

const triggers: Record<number, keyof GenerationSchema> = {
    0: 'name',
    1: 'short_description',
    2: 'key_points',
}

export function useGenerationForm() {
    const [active, setActive] = useState(0);
    const [isPending, setIsPending] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const setLayout = useStore((state) => state.AppLayout.setLayout);
    const { onExportTemplate } = useExportTemplate();

    const form = useForm<GenerationSchema>({
        resolver: zodResolver(generationSchema),
        defaultValues: {
            name: 'Scent Secrets',
            short_description: 'Discover our carefully curated selection of the finest luxury fragrances available today.   ',
            key_points: ["Luxury Fragrances", "Vintage Fragrances", "Niche Parfumes"],
        }
    });

    const nextStep = () => {
        const trigger = triggers[active as keyof typeof triggers];
        form.trigger(trigger).then((result) => {
            if (result) {
                setActive((current) => (current < 3 ? current + 1 : current))
            }
        })
    };
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const onSubmit = form.handleSubmit(async (values) => {
        try {
            setIsPending(true);
            setError(null);
            nextStep();

            const response = await api.post<IPage[]>('/generate-site-components', values);

            console.log("RESPONSE_LAYOUT", response.data);

            const layout = response.data;
            setLayout(layout);

            await onExportTemplate(layout);

            notifications.show({
                color: 'green',
                title: 'Site Successfully Generated',
                message: 'Your site has been successfully generated, go to the editor page to start customizing it.'
            });
            setIsGenerated(true);
        } catch (error: any) {
            const message = error.response?.data?.detail || 'An unknown error has occurred';
            const code = error.response?.status || 500;

            setError(message);

            notifications.show({
                color: 'red',
                title: 'Site Generating Error',
                message: message
            });
            console.error("GENERATING_SITE_ERROR", `Message: ${message}`, `Code: ${code}`);
        } finally {
            setIsPending(false);
        }
    });

    return {
        form,
        onSubmit,
        isPending,
        isGenerated,
        error,
        stepper: {
            active,
            setActive,
            isFinalStep: active >= 2,
            nextStep,
            prevStep,
        }
    };
}