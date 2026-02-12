import industryData from './industry-data.json';

// Constants
const ZERO_CLICK_ENCLOSURE_RATE = 0.70; // 70% of searches stay on Google

export interface AuditData {
    zeroClickCited: boolean; // 40%
    attributeMatchScore: number; // 0-1 (30%)
    fallowRiskLevel: 'high' | 'medium' | 'low'; // Kept for type compatibility, but re-mapped to AI Risk
    hasOperationalTransparency: boolean; // 10%
    employeeCount?: number;
    industry?: string;
    competitorTraffic?: Record<string, number>;
    keywordGaps?: string[];
    leadValue?: number;
}

export interface AuditResult {
    score: number;
    breakdown: {
        zeroClick: number;
        attributes: number;
        aiRisk: number; // Replaces fallowRisk
        transparency: number;
    };
    missedRevenue: number;
    roiMetrics: {
        annualRevenueAtRisk: number; // Replaces fallowYearLossShare
        productivityPremiumVuplift: number;
        zeroClickOpportunity: number;
        supportFrictionCost: number;
        annualOpportunityLoss: number;
    };
}

export function calculateResilienceScore(data: AuditData): AuditResult {
    let score = 0;
    const breakdown = {
        zeroClick: 0,
        attributes: 0,
        aiRisk: 0,
        transparency: 0
    };

    // 1. Zero-Click Presence (40%)
    if (data.zeroClickCited) {
        breakdown.zeroClick = 40;
        score += 40;
    }

    // 2. Niche Attribute Match (30%)
    breakdown.attributes = Math.round(data.attributeMatchScore * 30);
    score += breakdown.attributes;

    // 3. AI Displacement Risk (20%)
    // Formerly Fallow Risk. Now based on how susceptible the industry is + their optimization.
    // If they have high optimization (high attribute score), they are lower risk.
    const industryKey = (data.industry || 'default').toLowerCase() as keyof typeof industryData.industries;
    const stats = industryData.industries[industryKey] || industryData.industries.default;

    // Risk Calculation:
    // Base Industry Risk (0-1) * (1 - Optimization Score)
    // If high optimization (1.0), risk is 0.
    // If low optimization (0.2), risk is high.
    const optimizationScore = (breakdown.zeroClick + breakdown.attributes) / 70; // Normalized 0-1 based on first two factors
    const riskFactor = stats.ai_risk_factor * (1 - optimizationScore);

    // Score out of 20. Lower risk = higher score.
    // Risk 0 => 20 points. Risk 1 => 0 points.
    breakdown.aiRisk = Math.round(20 * (1 - riskFactor));
    score += breakdown.aiRisk;

    // 4. Operational Transparency (10%)
    if (data.hasOperationalTransparency) {
        breakdown.transparency = 10;
        score += 10;
    }

    // --- ROI Calculations ---

    // A. Productivity Premium
    const employees = data.employeeCount || 4;
    // Assume AI tools save 10% of time => 10% of salary. Avg salary £25k?
    // Let's keep the previous logic but generalize: £4k efficiency gain per head.
    const productivityPremiumVuplift = employees * 4202;

    // B. Annual Revenue at Risk (Replacing Fallow Year)
    // How much revenue touches Google? ~70% enclosure.
    // If invisible, you risk losing that portion of new business.
    // Assume 30% of revenue comes from new search discovery.
    const annualRevenue = stats.avg_monthly_rev * 12;
    // Risk share is: Annual Rev * 30% (New Biz) * (1 - Visibility Score)
    const visibilityFactor = score / 100;
    const annualRevenueAtRisk = Math.round(annualRevenue * 0.30 * (1 - visibilityFactor));

    // C. Zero-Click Opportunity
    // Revenue currently captured by Google's answer box.
    const zeroClickOpportunity = data.zeroClickCited ? 0 : Math.round((stats.avg_monthly_rev * 0.15)); // Conservative 15% uplift

    // D. Support Friction
    const frictionFactor = data.hasOperationalTransparency ? 0.2 : 1.0;
    const supportFrictionCost = Math.round(employees * 5 * (5 / 60) * 15 * 250 * frictionFactor);

    // E. Annual Opportunity Loss
    const leadValue = data.leadValue || 150;
    const trafficGap = 48500; // Mocked for now, in real app would be sum of competitor traffic
    const conversionRate = 0.20;
    const monthlyOpportunityLoss = trafficGap * 0.10 * conversionRate * leadValue;
    const annualOpportunityLoss = monthlyOpportunityLoss * 12;

    return {
        score,
        breakdown,
        missedRevenue: Math.round((annualRevenueAtRisk / 12) + zeroClickOpportunity + (monthlyOpportunityLoss)),
        roiMetrics: {
            annualRevenueAtRisk,
            productivityPremiumVuplift,
            zeroClickOpportunity,
            supportFrictionCost,
            annualOpportunityLoss
        }
    };
}
