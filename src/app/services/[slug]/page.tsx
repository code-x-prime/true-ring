import { notFound } from "next/navigation";
import { industryPages, servicePages } from "@/lib/content-pages";
import { ContentPageLayout } from "@/components/site/ContentPageLayout";

export function generateStaticParams() {
    return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = servicePages.find((item) => item.slug === slug);

    if (!page) {
        return { title: "Service Page | Truering" };
    }

    return {
        title: `${page.title} | Truering`,
        description: page.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = servicePages.find((item) => item.slug === slug);

    if (!page) {
        notFound();
    }

    const relatedItems = page.relatedIndustries
        .filter((industrySlug) => industryPages.some((item) => item.slug === industrySlug))
        .map((industrySlug) => {
            const industry = industryPages.find((item) => item.slug === industrySlug)!;
            return {
                title: industry.title,
                href: `/industries/${industrySlug}`,
                type: "Industry",
            };
        });

    return (
        <div>
            <ContentPageLayout
                eyebrow={page.eyebrow}
                title={page.title}
                description={page.description}
                heroTitle={page.heroTitle}
                overview={page.overview}
                stats={page.stats}
                features={page.features}
                benefits={page.benefits}
                relatedItems={relatedItems}
                keywords={page.keywords}
                faqItems={page.faqItems}
            />
        </div>
    );
}
