import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
  hover?: boolean;
  as?: React.ElementType;
}

export function GlassCard({
  children,
  className,
  strong = false,
  hover = false,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl",
        strong ? "glass-strong" : "glass",
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-white/60",
        className
      )}
    >
      {children}
    </Component>
  );
}
