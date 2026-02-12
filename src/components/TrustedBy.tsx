export function TrustedBy() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/40">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm text-gray-500 mb-8">Trusted by businesses across industries</p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                    {['Museum of Aquarium & Pet History', 'PetInfoClub.com', 'British Chelonia Group', 'Biochi', 'Virgin Media', 'EHC Sport'].map((logo) => (
                        <div key={logo} className="text-sm md:text-base font-bold font-heading text-white whitespace-nowrap hover:text-primary transition-colors cursor-default">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
