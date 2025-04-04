import { Box } from "@mantine/core";
import DynamicSection from "@/features/DynamicSection";

interface IProps {
    page: IPage;
}

export default function LandingPage({ page }: IProps) {
    return (
        <Box>
            {page.sections.map((section) => (
                <DynamicSection key={section.id} section={section} />
            ))}
        </Box>
    )
}