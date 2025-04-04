import layout from "../../../app/api/layout/layout.json" assert { type: "json" };

import LandingPage from "@/features/LandingPage";

export async function generateStaticParams() {
    const pages = layout as unknown as IPage[];

    return pages.map((page) => ({
        slug: page.path,
    }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pages = layout as unknown as IPage[];

    const page = pages.find((page) => page.path === slug);

    return <LandingPage page={page!} />;
}
