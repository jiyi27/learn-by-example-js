import React from 'react';
import { Card } from "@/components/ui/card";
import { FileText, Link as LinkIcon } from "lucide-react";

interface UsageGuideProps {
    // Array of steps for how to use
    steps: string[];
    // Array of reference links
    links: Array<{
        url: string;
        title: string;
    }>;
    // Optional title for the whole component
    title?: string;
}

const UsageGuideSection = ({ steps, links, title }: UsageGuideProps) => {
    return (
        <Card className="w-full max-w-3xl mx-auto my-4 p-6">
            {title && (
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
            )}

            {/* How to use section */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <h3 className="text-lg font-semibold">How to use it</h3>
                </div>
                <div className="pl-7 space-y-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3"
                        >
                            {/*shrink-0 很重要，否则当内容过多时，会挤压序号形状, 使其变窄, 而不是圆形*/}
                            <span className="flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                                {index + 1}
                            </span>
                            <p className="text-base leading-relaxed pt-0.5">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reference Links section */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <LinkIcon className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-semibold">Reference Links</h3>
                </div>
                <div className="pl-7 space-y-2">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span className="w-4 h-4">•</span>
                            <span className="underline underline-offset-4">
                                {link.title}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const MemoUsageGuideSection = React.memo(UsageGuideSection);

export default MemoUsageGuideSection;