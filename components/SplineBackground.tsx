export default function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0C0C0C]" />
      <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.03] bg-gradient-to-br from-white via-white/50 to-transparent blur-[120px] animate-[slowDrift_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.02] bg-gradient-to-tr from-white/60 via-white/30 to-transparent blur-[120px] animate-[slowDrift_25s_ease-in-out_infinite_reverse]" />
      <div className="absolute inset-0 z-[1] backdrop-blur-2xl bg-[#0C0C0C]/[0.55] pointer-events-none" />
    </div>
  );
}
