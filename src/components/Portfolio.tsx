"use client";
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const portfolioData: Record<string, { label: string; title: string; images: { src: string; alt: string }[]; video?: string; vimeo?: string }> = {
    "EHC Sports": {
        label: "Supplements",
        title: "EHC Sport Shilajit",
        images: [
            { src: "https://avatar-alchemyai.replit.app/assets/Screenshot_2026-01-19_at_13.53.08_1768830796313-tZWoxg-0.png", alt: "EHC Sport Product" },
            { src: "https://avatar-alchemyai.replit.app/assets/Maximum_Efficacy_Guaranteed_version_1_1768829041108-xbco9tao.png", alt: "Maximum Efficacy Guaranteed" },
        ],
    },
    "Glastonbury Wellness": {
        label: "Wellness",
        title: "Glastonbury Wellness Centre",
        images: [
            { src: "https://avatar-alchemyai.replit.app/assets/Too_Many_Paths_to_Choose__version_1_1768829194664-C0A5FcTy.png", alt: "Too Many Paths to Choose" },
            { src: "https://avatar-alchemyai.replit.app/assets/Your_Path_to_Peace__Resourced__version_1_1768829194664-DJwU8hEk.png", alt: "Your Path to Peace" },
        ],
        video: "https://avatar-alchemyai.replit.app/assets/Seeking_Guidance_in_Glastonbury__version_1_1768829194664-CuhcBK_z.mp4"
    },
    "Biochi": {
        label: "Supplements",
        title: "Biochi Natural Supplements",
        images: [
            { src: "https://avatar-alchemyai.replit.app/assets/Nature-Sourced_Power_version_1_1768848502687-LbAM2nBW.png", alt: "Nature-Sourced Power" },
            { src: "https://avatar-alchemyai.replit.app/assets/Overwhelmed_by_Supplements__version_1_1768848502689-DgbxlpBD.png", alt: "Overwhelmed by Supplements" },
            { src: "https://avatar-alchemyai.replit.app/assets/Treasure_1__Oceanic_Energy__version_1_1768848502691-Dd1c_OqK.png", alt: "Treasure 1: Oceanic Energy" },
            { src: "https://avatar-alchemyai.replit.app/assets/Treasure_2__Earthly_Power__version_1_1768848502690-WsfOVJbz.png", alt: "Treasure 2: Earthly Power" },
            { src: "https://avatar-alchemyai.replit.app/assets/Treasure_3__Botanical_Balance__version_1_1768848502690-CLxDHimA.png", alt: "Treasure 3: Botanical Balance" },
            { src: "https://avatar-alchemyai.replit.app/assets/The_Core_3_System_version_1_1768848502691-CHqRdMk3.png", alt: "The Core 3 System" },
        ],
    },
    "British Chelonia Group": {
        label: "Conservation",
        title: "British Chelonia Group",
        images: [
            { src: "https://avatar-alchemyai.replit.app/assets/50_Million_Years_of_Survival_version_1_1768829321062-CC54o_lU.png", alt: "50 Million Years of Survival" },
            { src: "https://avatar-alchemyai.replit.app/assets/Ancient_Legacies_Need_Your_Help_version_1_1768829321069-Fqf0lg_0.png", alt: "Ancient Legacies Need Your Help" },
            { src: "https://avatar-alchemyai.replit.app/assets/Protecting_Chelonia_for_Generations_version_1_1768829321070-ChgJZnCV.png", alt: "Protecting Chelonia for Generations" },
        ],
    },
    "Pet Info Club": {
        label: "Pets & History",
        title: "Pet Info Club / Museum",
        images: [
            { src: "https://avatar-alchemyai.replit.app/assets/logo_cali_1768830155882-DcuDmhE7.png", alt: "Museum of Aquarium & Pet History" },
            { src: "https://avatar-alchemyai.replit.app/assets/ChatGPT_Image_Jul_28__2025__04_03_36_PM_1758720677527_1768830242340-Bhy2Nu6D.png", alt: "PetInfoClub.com" },
        ],
        vimeo: "https://vimeo.com/1131463466"
    },
};

const categories = Object.keys(portfolioData);

export function Portfolio() {
    const [activeTab, setActiveTab] = useState(categories[0]);
    const data = portfolioData[activeTab];

    return (
        <section className="py-24 px-6 bg-[#050609]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work in Action</h2>
                <p className="text-xl text-gray-400 mb-12">
                    Real results for real businesses. See how we help clients dominate their digital presence.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${cat === activeTab
                                ? 'bg-primary text-black border-primary'
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {data.images.map((img, idx) => (
                        <div key={idx} className="bg-[#0F1115] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                            <div className="aspect-square relative overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 text-left">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">{data.label}</span>
                                <p className="text-sm font-medium text-gray-300 truncate">{img.alt}</p>
                            </div>
                        </div>
                    ))}

                    {/* Video card if exists */}
                    {data.video && (
                        <div className="bg-[#0F1115] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                            <div className="aspect-square relative overflow-hidden">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    muted
                                >
                                    <source src={data.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="p-4 text-left">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">{data.label}</span>
                                <p className="text-sm font-medium text-gray-300">Video Content</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Vimeo link */}
                {data.vimeo && (
                    <div className="mt-8">
                        <a
                            href={data.vimeo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium text-sm transition-colors"
                        >
                            Watch on Vimeo <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                )}

            </div>
        </section>
    );
}
