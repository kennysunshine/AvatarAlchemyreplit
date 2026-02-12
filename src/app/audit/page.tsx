'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { calculateResilienceScore, AuditData, AuditResult } from '@/lib/scoring-engine';
import MermaidChart from '@/components/MermaidChart';
import Roadmap from '@/components/Roadmap';
import Link from 'next/link';

export default function AuditPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!query) return;

        // Simulate API call / Crawler delay
        const timer = setTimeout(() => {
            // MOCK DATA INPUT for the scoring engine
            // In a real app, this would come from the crawler
            const mockInput: AuditData = {
                zeroClickCited: false,
                attributeMatchScore: 0.4,
                fallowRiskLevel: 'high',
                hasOperationalTransparency: false,
                industry: 'medispa',
                employeeCount: 5
            };

            const result = calculateResilienceScore(mockInput);
            setAuditResult(result);
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [query]);

    if (!query) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">No URL Provided</h1>
                    <Link href="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white space-y-4">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xl animate-pulse">Analyzing {query}...</p>
                <div className="flex gap-2 text-sm text-gray-400">
                    <span>Checking AI Search Visibility...</span>
                    <span>Analyzing Schema...</span>
                    <span>Calculating Risk...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white p-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <Link href="/" className="text-gray-500 hover:text-white transition-colors mb-2 block">← Back to Search</Link>
                        <h1 className="text-3xl font-bold font-heading">Audit Results for <span className="text-primary">{query}</span></h1>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-400">Total Resilience Score</div>
                        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">{auditResult?.score}/100</div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Visualizations Column */}
                    <div className="space-y-8">
                        {/* Score Breakdown Chart */}
                        <div className="bg-[#14161a] p-6 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold mb-6">Score Breakdown</h3>
                            <MermaidChart chart={`pie showData
    title Resilience Factors
    "Zero Click" : ${auditResult?.breakdown.zeroClick}
    "Attributes" : ${auditResult?.breakdown.attributes}
    "AI Risk" : ${auditResult?.breakdown.aiRisk}
    "Transparency" : ${auditResult?.breakdown.transparency}`} />
                        </div>

                        {/* Revenue Risk */}
                        <div className="bg-[#14161a] p-6 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold mb-4">Annual Revenue at Risk</h3>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-red-500">
                                    £{auditResult?.roiMetrics.annualRevenueAtRisk.toLocaleString()}
                                </span>
                                <span className="text-gray-500 mb-1">/ year</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">
                                Based on industry averages and your current AI visibility gap.
                            </p>
                        </div>
                    </div>

                    {/* Roadmap Column */}
                    <div className="bg-[#14161a] p-6 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold mb-6">30-Day Recovery Roadmap</h3>
                        <Roadmap weeks={[
                            {
                                title: "Week 1: Foundation",
                                tasks: ["Claim Knowledge Panel", "Fix Schema Markup", "Operational Transparency"]
                            },
                            {
                                title: "Week 2: Content Injection",
                                tasks: ["Publish FAQ Pillar Page", "Video Content Repurposing", "Social Mirroring"]
                            },
                            {
                                title: "Week 3: Authority Building",
                                tasks: ["Local Citations", "Entity Association", "Review Management"]
                            },
                            {
                                title: "Week 4: AI Optimization",
                                tasks: ["Zero-Click Optimization", "Generative Engine Verification", "Digital Twin Activation"]
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    );
}
