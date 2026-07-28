import { notFound } from "next/navigation";
import { integrationPages, servicePages } from "@/lib/content-pages";
import { ContentPageLayout } from "@/components/site/ContentPageLayout";

export function generateStaticParams() {
    return integrationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = integrationPages.find((item) => item.slug === slug);

    if (!page) {
        return { title: "Integration Page | Truering" };
    }

    return {
        title: `${page.title} | Truering`,
        description: page.description,
    };
}

export default async function IntegrationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = integrationPages.find((item) => item.slug === slug);

    if (!page) {
        notFound();
    }

    const relatedItems = page.relatedServices
        .filter((serviceSlug) => servicePages.some((item) => item.slug === serviceSlug))
        .map((serviceSlug) => {
            const service = servicePages.find((item) => item.slug === serviceSlug)!;
            return {
                title: service.title,
                href: `/services/${serviceSlug}`,
                type: "Service",
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
                variant="integration"
                relatedItems={relatedItems}
                keywords={page.keywords}
                faqItems={page.faqItems}
            />
        </div>
    );
}
