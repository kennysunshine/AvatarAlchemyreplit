import React from 'react';

interface RoadmapWeek {
    title: string;
    tasks: string[];
}

interface RoadmapProps {
    weeks: RoadmapWeek[];
}

const Roadmap: React.FC<RoadmapProps> = ({ weeks }) => {
    return (
        <div className="text-left">
            {weeks.map((week, index) => (
                <div key={index} className="mb-8 relative pl-8 border-l border-white/10 last:border-0 last:mb-0">
                    {/* Setup a timeline dot */}
                    <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>

                    <h4 className="text-lg font-bold mb-4 font-heading" style={{ color: '#ffffff' }}>
                        {week.title}
                    </h4>
                    <ul className="space-y-3">
                        {week.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group">
                                <span className="text-primary mt-0.5 group-hover:text-purple-400 transition-colors">•</span>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {task}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Roadmap;
