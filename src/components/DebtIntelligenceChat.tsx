
"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
    TrendingUp,
    Target,
    BarChart3,
    Building2,
    Activity,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    DollarSign,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            // Temporarily shrink to get the right scrollHeight
            textarea.style.height = `${minHeight}px`;

            // Calculate new height
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        // Set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    // Adjust height on window resize
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function DebtIntelligenceChat() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                setValue("");
                adjustHeight(true);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-cream">
                    Private Debt Intelligence Platform
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Get institutional-grade insights on credit markets, direct lending opportunities, portfolio risk assessment, and industry benchmarking
                </p>
            </div>

            <div className="w-full">
                <div className="relative bg-gradient-glass backdrop-blur-sm rounded-2xl border border-accent-gold/30 shadow-glass">
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about credit spreads, direct lending opportunities, portfolio risk metrics..."
                            className={cn(
                                "w-full px-4 py-3",
                                "resize-none",
                                "bg-transparent",
                                "border-none",
                                "text-accent-cream text-sm",
                                "focus:outline-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-accent-gold/50 placeholder:text-sm",
                                "min-h-[60px]"
                            )}
                            style={{
                                overflow: "hidden",
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="group p-2 hover:bg-accent-gold/20 rounded-lg transition-colors flex items-center gap-1"
                            >
                                <Paperclip className="w-4 h-4 text-accent-gold" />
                                <span className="text-xs text-accent-gold/70 hidden group-hover:inline transition-opacity">
                                    Attach
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="px-2 py-1 rounded-lg text-sm text-accent-gold/70 transition-colors border border-dashed border-accent-gold/30 hover:border-accent-gold/50 hover:bg-accent-gold/10 flex items-center justify-between gap-1"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Analysis
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "px-1.5 py-1.5 rounded-lg text-sm transition-colors border border-accent-gold/30 hover:border-accent-gold/50 hover:bg-accent-gold/10 flex items-center justify-between gap-1",
                                    value.trim()
                                        ? "bg-gradient-button text-accent-foreground hover:bg-gradient-accent"
                                        : "text-accent-gold/70"
                                )}
                            >
                                <ArrowUpIcon
                                    className={cn(
                                        "w-4 h-4",
                                        value.trim()
                                            ? "text-accent-foreground"
                                            : "text-accent-gold/70"
                                    )}
                                />
                                <span className="sr-only">Send</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
                    <ActionButton
                        icon={<TrendingUp className="w-4 h-4" />}
                        label="Credit Analysis"
                    />
                    <ActionButton
                        icon={<DollarSign className="w-4 h-4" />}
                        label="Direct Lending"
                    />
                    <ActionButton
                        icon={<BarChart3 className="w-4 h-4" />}
                        label="Risk Assessment"
                    />
                    <ActionButton
                        icon={<Building2 className="w-4 h-4" />}
                        label="Portfolio Analysis"
                    />
                    <ActionButton
                        icon={<Activity className="w-4 h-4" />}
                        label="Market Intelligence"
                    />
                </div>
            </div>
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
    return (
        <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-glass backdrop-blur-sm hover:bg-gradient-accent/20 rounded-full border border-accent-gold/30 text-accent-gold/70 hover:text-accent-gold hover:border-accent-gold/50 transition-all duration-300"
        >
            {icon}
            <span className="text-xs">{label}</span>
        </button>
    );
}
