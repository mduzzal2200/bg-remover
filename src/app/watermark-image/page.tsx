import { withSeoMeta } from "@/lib/seo/brand";
import { brandedTitle } from "@/lib/seo/title";
import GuidesBlock from "@/app/_components/GuidesBlock";
import { Metadata } from 'next'
import { toolConfig, toolPage } from '@/lib/tool-pages'
import AppArticle from '@/app/creative/[slug]/AppArticle'
import { toolShareImages } from '@/lib/landing-images'
import LandingPage from '../_components/LandingPage'

async function generateMetadataBase(): Promise<Metadata> {
  const config = await toolConfig('watermark-image')
  return {
    title: { absolute: brandedTitle(config.title) },
    description: config.meta_description,
    keywords: config.keywords,
    openGraph: {
      title: config.og_title || config.title,
      description: config.og_description || config.meta_description,
      images: toolShareImages('watermark-image', config.og_image),
      url: 'https://www.sjpt.io/watermark-image',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.og_title || config.title,
      description: config.og_description || config.meta_description,
      images: toolShareImages('watermark-image', config.og_image),
    },
    alternates: { canonical: 'https://www.sjpt.io/watermark-image' },
  }
}

export default async function Page() {
  const config = await toolConfig('watermark-image')
  const tp = toolPage('watermark-image')

  return (
    <>
      <LandingPage article={tp && <AppArticle sections={tp.sections} />} alt={tp?.alt} path="/watermark-image" guides={<GuidesBlock path="/watermark-image" />} config={config} toolHref="/editor?tool=watermark" pageId="watermark-image" />
    </>
  )
}

export const generateMetadata = withSeoMeta(generateMetadataBase);
