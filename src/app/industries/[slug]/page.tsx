import { notFound } from "next/navigation";
import { industryPages, servicePages } from "@/lib/content-pages";
import { ContentPageLayout } from "@/components/site/ContentPageLayout";

export function generateStaticParams() {
    return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = industryPages.find((item) => item.slug === slug);

    if (!page) {
        return { title: "Industry Page | Truering" };
    }

    return {
        title: `${page.title} | Truering`,
        description: page.description,
    };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = industryPages.find((item) => item.slug === slug);

    if (!page) {
        notFound();
    }

    const relatedItems = page.relatedServices.map((serviceSlug) => {
        const service = servicePages.find((item) => item.slug === serviceSlug);
        return {
            title: service?.title ?? serviceSlug,
            href: service ? `/services/${serviceSlug}` : `/`,
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
                features={page.useCases}
                benefits={page.benefits}
                variant="industry"
                relatedItems={relatedItems}
                keywords={page.keywords}
                faqItems={page.faqItems}
            />
        </div>
    );
}
