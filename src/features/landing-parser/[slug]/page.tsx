import layout from "../../../app/api/data/components.json" assert { type: "json" };
import DynamicReactElement from "@/features/DynamicReactElement";

export async function generateStaticParams() {
    const pages = layout as any;

    return pages.map((page: any) => ({
        slug: page.pageLink,
    }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pages = layout as any;

    const page = pages.find((page: any) => page.pageLink === slug);

    return <DynamicReactElement element={page as any} />;
}
