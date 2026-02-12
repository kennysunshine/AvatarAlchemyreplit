'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
    chart: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'dark',
            securityLevel: 'loose',
            fontFamily: 'inherit',
            themeVariables: {
                primaryColor: '#2beeee', // Cyan
                primaryTextColor: '#FFFFFF',
                primaryBorderColor: '#2beeee',
                lineColor: '#9333ea',   // Purple
                secondaryColor: '#14161a',
                tertiaryColor: '#14161a',
                pieTitleTextSize: '20px',
                pieTitleTextColor: '#FFFFFF',
                pieSectionTextColor: '#FFFFFF',
                pieLegendTextColor: '#FFFFFF',
                xyChartTitleColor: '#FFFFFF',
                xyChartAxisLabelColor: '#FFFFFF',
                xyChartAxisTitleColor: '#FFFFFF',
                pie1: '#2beeee', // Cyan
                pie2: '#9333ea', // Purple
                pie3: '#0ea5e9', // Sky Blue
                pie4: '#a855f7', // Light Purple
                pie5: '#22d3ee', // Light Cyan
                pie6: '#c084fc', // Lighter Purple
                pie7: '#ffffff', // White
            }
        });

        if (ref.current) {
            mermaid.contentLoaded();
        }
    }, [chart]);

    useEffect(() => {
        if (ref.current && chart) {
            ref.current.removeAttribute('data-processed');
            mermaid.render('mermaid-svg-' + Math.random().toString(36).substr(2, 9), chart).then(({ svg }) => {
                if (ref.current) {
                    ref.current.innerHTML = svg;
                }
            });
        }
    }, [chart]);

    return (
        <div
            ref={ref}
            className="mermaid"
            style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}
        />
    );
};

export default MermaidChart;
