export default function FeatureCard({
  title,
  desc,
  footer,
}: {
  title: string;
  desc: string;
  footer: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
      <div className="aspect-[4/3] w-full rounded-xl bg-white/10 grid place-items-center text-white/60">
        IMAGE
      </div>
      <div className="mt-4 text-lg font-extrabold">{title}</div>
      <p className="mt-1 text-sm text-white/75">{desc}</p>
      <div className="mt-3 text-xs font-bold text-[#D4AF37]">{footer}</div>
    </div>
  );
}
