import { Header, Footer, Divider } from "@/components";

const PrivacyPage = () => {
    return (
        <>
            <Header />
            <main className="px-4 sm:px-6 lg:px-8 py-24">
                <article className="max-w-3xl mx-auto">
                    <header className="mb-12">
                        <p className="tracking-widest text-text-muted mb-4 text-xs font-semibold uppercase">
                            Legal
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-text-muted">
                            Last Updated: June 20, 2026
                        </p>
                    </header>

                    <Divider marginT="mt-8" marginB="mb-12" />

                    <div className="prose prose-lg text-text-muted leading-relaxed max-w-none">
                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            1. Information We Collect
                        </h2>
                        <p className="mb-6">
                            We collect minimal information necessary to operate
                            and improve the website. This does not include
                            account creation, email addresses, or any directly
                            identifying personal data.
                        </p>
                        <p className="mb-6">
                            We may use third-party analytics services such as
                            Vercel Analytics and Google Analytics 4 to collect
                            anonymized usage data, including page views, device
                            information, browser type, and general interaction
                            patterns.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            2. Issue Reviews
                        </h2>
                        <p className="mb-6">
                            When you submit an issue review, we store only your
                            name and comment in our database. The email field is
                            disabled and no email data is collected or stored.
                        </p>
                        <p className="mb-6">
                            Issue reviews are stored permanently and are not
                            deleted upon request. Submissions are treated as
                            anonymous contributions and are not linked to any
                            verified identity.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            3. Cookies
                        </h2>
                        <p className="mb-6">
                            We do not use cookies for advertising or user
                            tracking. However, third-party analytics providers
                            may use cookies or similar technologies depending on
                            their own policies.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            4. Server Logs
                        </h2>
                        <p className="mb-6">
                            Like most websites, we maintain server logs for
                            security, performance monitoring, and debugging.
                            These logs may include IP addresses, browser
                            information, request timestamps, and accessed pages.
                            Logs are retained for a limited period and used only
                            for operational purposes.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            5. Data Sharing and Security
                        </h2>
                        <p className="mb-6">
                            We do not sell or rent user data. Limited data
                            collected through analytics or server logs may be
                            processed by trusted third-party service providers
                            (such as hosting and analytics platforms) strictly
                            for infrastructure and performance purposes.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            6. Your Rights
                        </h2>
                        <p className="mb-6">
                            Since we do not maintain user accounts or verify
                            identities, we are unable to associate data with
                            specific individuals. As a result, requests for data
                            access or deletion generally do not apply to this
                            service.
                        </p>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default PrivacyPage;

export const dynamic = "force-static";
