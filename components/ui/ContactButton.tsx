export default function ContactButton() {
  return (
    <button
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base transition-transform hover:scale-105 active:scale-95"
      style={{
        background: "linear-gradient(123deg, #0A2A1A 7%, #19B64F 37%, #5050F7 72%, #0BB044 100%)",
        boxShadow: "0px 4px 4px rgba(25, 182, 79, 0.25), 4px 4px 12px #0BB044 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </button>
  );
}
