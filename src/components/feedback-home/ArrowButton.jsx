import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS } from "./colors";

export const ArrowButton = ({ dir, onClick, disabled }) => (
  <button
    type="button"
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    disabled={disabled}
    className="p-2 rounded-full border bg-white/80 backdrop-blur hover:bg-white transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
    style={{ borderColor: COLORS.cardBorder }}
  >
    {dir === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
  </button>
);
