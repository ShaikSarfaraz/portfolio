
const siteConfig = {
    name: "Sarfaraz Shaik",
    title: "FrontEnd Developer/ React Developer / UI Developer",
    description:
        "Portfolio of Sarfaraz Shaik, a Frontend developer specializing in React Development and UI Design with 3 years of experience.",
    url: "https://sarfarazshaik.vercel.app/",
    ogImage: "https://sarfarazshaik.vercel.app/PassportSize.webp",
    links: {
        twitter: "https://x.com/sohaillsarfaraz",
        github: "https://github.com/ShaikSarfaraz",
        linkedin: "https://www.linkedin.com/in/sarfaraz-shaik/",
    },
}

export const metadata = {
    title: {
        default: `${siteConfig.name} - ${siteConfig.title}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Frontend Engineer",
        "UI Design",
        "React",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Web Development",
        "Microsft SQL Server",
    ],
    authors: [
        {
            name: siteConfig.name,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: {
            default: `${siteConfig.name} - ${siteConfig.title}`,
            template: `%s | ${siteConfig.name}`,
        },
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - ${siteConfig.title}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: {
            default: `${siteConfig.name} - ${siteConfig.title}`,
            template: `%s | ${siteConfig.name}`,
        },
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@shaiksarfaraz",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-site-verification-code",
        yandex: "your-yandex-verification-code",
    },
    alternates: {
        canonical: siteConfig.url,
    },
}

export default siteConfig

