const HomePage = () => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-8 m-8 text-center">
            <h1 className="font-display text-5xl">The Confluence Chronicles</h1>
            <p className="font-text max-w-xl leading-relaxed">
                A collaborative physics newsletter uniting student societies
                across Indian colleges through research, ideas, and scientific
                storytelling.
            </p>
            <div className="mt-4">
                <p className="font-text text-sm tracking-widest text-neutral-500">
                    COMING SOON
                </p>
                <div className="mt-2 h-px w-24 bg-neutral-300 mx-auto" />
            </div>
        </div>
    );
};

export default HomePage;
