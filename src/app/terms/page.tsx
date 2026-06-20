import { Header, Footer, Divider } from "@/components";
import Link from "next/link";

const TermsPage = () => {
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
                            Terms of Service
                        </h1>
                        <p className="text-sm text-text-muted">
                            Last Updated: June 20, 2026
                        </p>
                    </header>

                    <Divider marginT="mt-8" marginB="mb-12" />

                    <div className="prose prose-lg text-text-muted leading-relaxed max-w-none">
                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            1. Introduction
                        </h2>
                        <p className="mb-6">
                            Welcome to Confluence Chronicles. By accessing or
                            using this website, you agree to these Terms of
                            Service. If you do not agree, you should not access
                            or use the website.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            2. Nature of Content
                        </h2>
                        <p className="mb-6">
                            All content published on this website is provided
                            for educational and informational purposes only,
                            primarily focused on physics and related scientific
                            topics. The content reflects interpretations,
                            explanations, and perspectives that may evolve over
                            time as scientific understanding progresses.
                        </p>
                        <p className="mb-6">
                            We do not guarantee that any content is complete,
                            fully accurate, or suitable for any specific
                            academic, professional, or practical application.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            3. Intellectual Property Rights
                        </h2>
                        <p className="mb-6">
                            Unless otherwise stated, all original content,
                            including articles, essays, graphics, and design
                            elements, is owned by Confluence Chronicles and/or
                            its contributors and is protected by applicable
                            intellectual property laws.
                        </p>
                        <p className="mb-6">
                            You may not reproduce, redistribute, or republish
                            content without prior permission, except where
                            explicitly allowed.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            4. User Submissions
                        </h2>
                        <p className="mb-6">
                            If you submit content, including issue reviews or
                            comments, you grant us a non-exclusive, worldwide,
                            royalty-free license to store, display, and publish
                            that content on our platform.
                        </p>
                        <p className="mb-6">
                            We may moderate, edit, or remove submissions at our
                            sole discretion without notice.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            5. No Warranties
                        </h2>
                        <p className="mb-6">
                            This website and all content are provided on an "as
                            is" and "as available" basis without warranties of
                            any kind, whether express or implied.
                        </p>
                        <p className="mb-6">
                            We do not warrant that the content will be
                            error-free, uninterrupted, or suitable for any
                            particular purpose.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            6. Limitation of Liability
                        </h2>
                        <p className="mb-6">
                            To the fullest extent permitted by applicable law,
                            Confluence Chronicles and its contributors shall not
                            be liable for any direct, indirect, incidental, or
                            consequential damages arising from the use of or
                            inability to use this website or its content.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            7. Contact and Support
                        </h2>
                        <p className="mb-6">
                            If you have questions or concerns regarding these
                            Terms, you may contact us via the{" "}
                            <Link
                                href="/contact"
                                className="text-text underline"
                            >
                                contact
                            </Link>{" "}
                            page. We may respond at our sole discretion and are
                            under no obligation to address or resolve any
                            request.
                        </p>

                        <h2 className="font-serif text-2xl text-text mt-12 mb-6">
                            8. Changes to Terms
                        </h2>
                        <p className="mb-6">
                            We may update these Terms at any time without prior
                            notice. Continued use of the website after changes
                            are posted constitutes acceptance of the updated
                            Terms.
                        </p>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default TermsPage;

export const dynamic = "force-static";
