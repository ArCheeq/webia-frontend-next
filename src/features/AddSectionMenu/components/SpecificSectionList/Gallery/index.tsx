import { Box, Flex, Stack, Text, UnstyledButton } from "@mantine/core";
import Image from "next/image";

import styles from './styles.module.css';
import {useStore} from "@/store";
import { useLandingContext } from "@/store/landing-ctx";
import {
    getNewGridGallery,
    getNewSingleImageGallery,
} from "@/features/AddSectionMenu/constants/gallery";

export default function Gallery() {
    const { addSection } = useLandingContext();

    const parentIndex = useStore((state) => state.AddSectionMenu.parentIndex);
    const indexToAdd = useStore((state) => state.AddSectionMenu.indexToAdd);

    return (
        <Stack gap={12}>
            <UnstyledButton className={styles.galleryItem} onClick={() => addSection(parentIndex, indexToAdd, getNewGridGallery())}>
                <Flex justify={'space-between'} gap={16}>
                    <Box>
                        <Text fz={14} fw={500} mb={4}>Image grid</Text>
                        <Text c={'dimmed'} fz={12} mb={8}>Display images or your work in a gallery grid</Text>
                        <Text fz={12} fw={500}>By Pikt</Text>
                    </Box>
                    <Flex align={'center'} miw={80}>
                        <Image src={'/images/image-grid.svg'} alt={'image-grid'} width={80} height={80} />
                    </Flex>
                </Flex>
            </UnstyledButton>
            <UnstyledButton className={styles.galleryItem} onClick={() => addSection(parentIndex, indexToAdd, getNewSingleImageGallery())}>
                <Flex justify={'space-between'} gap={16}>
                    <Box>
                        <Text fz={14} fw={500} mb={4}>Image</Text>
                        <Text c={'dimmed'} fz={12} mb={8}>Display a single image</Text>
                        <Text fz={12} fw={500}>By Pikt</Text>
                    </Box>
                    <Flex align={'center'} miw={80}>
                        <Image src={'/images/image.svg'} alt={'image-grid'} width={80} height={80} />
                    </Flex>
                </Flex>
            </UnstyledButton>
        </Stack>
    )
}