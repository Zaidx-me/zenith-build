export default function ScrollMarquee() {
  return (
    <section className="bg-[#1C1C1C] rounded-[32px] overflow-hidden py-12 border border-white/[0.06] relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#1C1C1C] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#1C1C1C] to-transparent z-10 pointer-events-none" />
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-16">
          {[...Array(2)].map((_, outer) => (
            <div key={outer} className="flex gap-16 items-center">
              {["DESIGN", "DEVELOP", "SCALE", "LAUNCH", "ITERATE", "INNOVATE", "STRATEGIZE"].map((word) => (
                <span
                  key={word}
                  className="font-display font-black text-6xl md:text-7xl uppercase tracking-tighter text-white"
                >
                  {word}
                  <span
                    className="inline-block w-3 h-3 rounded-full ml-16 align-middle"
                    style={{ backgroundColor: "#19B64F" }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
