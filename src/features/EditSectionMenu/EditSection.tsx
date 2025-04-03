import { Fragment } from "react";
import EmptySection from "@/features/EditSectionMenu/components/EmptySection";
import Controls from "@/features/EditSectionMenu/components/Controls";
import TextContentForm from "@/features/EditSectionMenu/components/TextContentForm";
import ImageForm from "@/features/EditSectionMenu/components/ImageForm";
import LinkForm from "@/features/EditSectionMenu/components/LinkForm";
import StylesForm from "@/features/EditSectionMenu/components/StylesForm";

export default function EditSection() {
    return (
        <Fragment>
            <EmptySection />
            <Controls />
            <TextContentForm />
            <ImageForm />
            <LinkForm />
            {/*<StylesForm />*/}
        </Fragment>
    );
}
