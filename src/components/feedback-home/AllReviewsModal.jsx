import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { QuoteCard } from "./QuoteCard";
import { COLORS } from "./colors";

export const AllReviewsModal = ({ reviews }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        className="mt-6 mx-auto block px-5 py-2 rounded-full font-medium transition border"
        style={{
          background: COLORS.accent,
          color: "white",
          borderColor: "transparent",
        }}
      >
        See All Reviews
      </button>
    </DialogTrigger>
    <DialogContent
      className="max-w-4xl max-h-[80vh] overflow-y-auto rounded-2xl p-6"
      style={{ background: COLORS.bg, borderColor: COLORS.cardBorder }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r, idx) => (
          <QuoteCard key={`${r.id}-all-${idx}`} info={r} truncate={false} />
        ))}
      </div>
    </DialogContent>
  </Dialog>
);
