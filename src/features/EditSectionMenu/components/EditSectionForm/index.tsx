import { Fragment } from "react";
import EmptySection from "@/features/EditSectionMenu/components/EmptySection";
import Controls from "@/features/EditSectionMenu/components/Controls";

export default function EditSectionForm() {
    return (
        <Fragment>
            <EmptySection />
            <Controls />
        </Fragment>
    );
}
