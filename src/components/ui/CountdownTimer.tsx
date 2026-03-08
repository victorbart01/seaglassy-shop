"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-strong rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-deep-ocean)]">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs sm:text-sm text-[var(--color-deep-ocean)]/60 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className={className}>
        <div className="flex items-center gap-3 sm:gap-4 justify-center">
          {["Days", "Hours", "Min", "Sec"].map((label) => (
            <TimeUnit key={label} value={0} label={label} />
          ))}
        </div>
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className={className}>
        <p className="text-center font-heading text-xl text-[var(--color-deep-ocean)]">
          Drop is live!
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-3 sm:gap-4 justify-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-2xl text-[var(--color-deep-ocean)]/30 font-light mt-[-1.5rem]">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-2xl text-[var(--color-deep-ocean)]/30 font-light mt-[-1.5rem]">:</span>
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <span className="text-2xl text-[var(--color-deep-ocean)]/30 font-light mt-[-1.5rem]">:</span>
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
