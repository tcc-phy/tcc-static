import { Header, Footer, Link, Divider } from "@/components";

const GlobalNotFound = () => {
    return (
        <>
            <Header />
            <main className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-6xl w-full text-center">
                    <p className="tracking-widest text-text-muted mb-4 ">
                        404 ERROR
                    </p>

                    <h1 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-8">
                        Page Not Found
                    </h1>

                    <p className="text-lg text-text-muted leading-relaxed mb-10 font-light max-w-xl mx-auto">
                        The page you are looking for has been moved, deleted, or
                        possibly never existed. Let's get you back on track.
                    </p>

                    <Divider marginT="mt-8" marginB="mb-10" />

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">Return Home</Link>
                        <Link href="/archive" variant="outline">
                            Browse Archive
                        </Link>
                    </div>

                    <p className="text-xs text-text-muted mt-12">
                        If you believe this is a technical error, please contact
                        our support team.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default GlobalNotFound;

export const dynamic = "force-static";
