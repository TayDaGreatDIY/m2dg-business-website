export default function BadgePill({
  text,
  tone = "orange",
}: {
  text: string;
  tone?: "orange" | "gold" | "red" | "navy";
}) {
  const map = {
    orange: "bg-[#FF8C00]/15 text-[#FF8C00] border-[#FF8C00]/25",
    gold: "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/25",
    red: "bg-[#C8102E]/15 text-[#C8102E] border-[#C8102E]/25",
    navy: "bg-[#0B1B3A]/30 text-white border-white/10",
  }[tone];

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${map}`}>
      {text}
    </span>
  );
}
