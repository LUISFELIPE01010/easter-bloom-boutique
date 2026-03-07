import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const TIMER_KEY = "avec-countdown-end";
const DURATION = 15 * 60 * 1000; // 15 minutes

const getEndTime = () => {
  const stored = localStorage.getItem(TIMER_KEY);
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + DURATION;
  localStorage.setItem(TIMER_KEY, String(end));
  return end;
};

const CountdownTimer = () => {
  const [endTime] = useState(getEndTime);
  const [remaining, setRemaining] = useState(endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        setRemaining(0);
        clearInterval(interval);
      } else {
        setRemaining(diff);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const isUrgent = remaining < 5 * 60 * 1000 && remaining > 0;
  const isExpired = remaining <= 0;

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`sticky top-0 z-50 py-1.5 sm:py-2.5 px-4 text-center transition-colors duration-500 ${
        isExpired
          ? "bg-destructive/90 backdrop-blur-md"
          : isUrgent
          ? "bg-[hsl(0_70%_45%/0.9)] backdrop-blur-md"
          : "bg-chocolate/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Clock size={16} className={`${isUrgent ? "animate-pulse" : ""} text-cream`} />
          <span className="font-elegant text-xs sm:text-sm text-cream/80">
            {isExpired ? "Oferta encerrada!" : "Oferta expira em:"}
          </span>
        </div>

        {!isExpired && (
          <div className="flex items-center gap-1.5">
            <TimeBlock value={minutes} label="min" isUrgent={isUrgent} />
            <span className="text-gold font-bold text-lg animate-pulse">:</span>
            <TimeBlock value={seconds} label="seg" isUrgent={isUrgent} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const TimeBlock = ({ value, label, isUrgent }: { value: number; label: string; isUrgent: boolean }) => (
  <div className="flex flex-col items-center">
    <span
      className={`font-display text-xl sm:text-2xl font-bold tabular-nums leading-none ${
        isUrgent ? "text-cream" : "text-cream"
      }`}
    >
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] text-cream/50 font-elegant uppercase tracking-wider">{label}</span>
  </div>
);

export default CountdownTimer;
