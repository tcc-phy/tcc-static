import { Header, Footer, Divider } from "@/components";

const ContactPage = () => {
    return (
        <>
            <Header />
            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="font-serif text-4xl text-text mb-4">
                        Contact Us
                    </h1>

                    <p className="text-text-muted mb-10">
                        Questions, feedback, or collaborations.
                    </p>

                    <Divider marginT="mt-6" marginB="mb-10" />

                    <div>
                        <p className="text-text-muted tracking-widest">EMAIL</p>
                        <p className="text-lg">COMING SOON</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;

export const dynamic = "force-static";
