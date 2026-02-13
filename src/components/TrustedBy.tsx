const brands = [
    { name: 'PetInfoClub.com', src: '/logos/petinfoclub.png' },
    { name: 'British Chelonia Group', src: '/logos/british-chelonia.png' },
    { name: 'Biochi', src: '/logos/biochi.png' },
    { name: 'Virgin Media', src: '/logos/virgin-media.png' },
    { name: 'EHC Sport', src: '/logos/ehc-sport.png' },
    { name: 'Museum of Aquarium & Pet History', src: '/logos/museum-aquarium.jpg' },
];

export function TrustedBy() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/40">
            <div className="max-w-7xl mx-auto px-6 text-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <p className="text-sm text-gray-500 mb-8">Trusted by businesses across industries</p>

                <div className="flex gap-20 w-max animate-scroll items-center">
                    {[...brands, ...brands].map((brand, idx) => (
                        <div key={idx} className="flex-shrink-0 flex items-center justify-center h-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="h-14 w-auto max-w-[180px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
