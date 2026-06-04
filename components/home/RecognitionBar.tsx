export default function RecognitionBar() {
  const partners = ["AMFI", "BSE StAR MF", "NSE NMF II", "CDSL", "SEBI"];

  return (
    <section className="py-10 bg-white border-b border-surface-variant">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-7">
          Registered &amp; Partnered With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {partners.map((p) => (
            <span key={p} className="text-xl font-bold font-playfair text-primary">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
