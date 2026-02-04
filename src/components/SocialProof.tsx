export default function SocialProof() {
  const logos = [
    { name: 'Abogen Biosciences', src: '/abogenbiosciences_logo.png' },
    { name: 'Hippocratic AI', src: 'https://hippocraticai.com/wp-content/uploads/2025/09/Hippocratic_Logo.png' },
    { name: 'Regent Peak', src: 'https://static.spacecrafted.com/c2fccd105445452b9cf43cb0b9f5a738/i/c1fd3f0037764243a6a205cda325f3a3/1/4SoifmQp45JMgBnHiBhVe/logoTxtWhite.png' },
    { name: 'Vention', src: '/vention_logo.webp' },
  ];

  return (
    <section className="relative py-24 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.15em] mb-3">
            Trusted by
          </p>
          <h2 className="text-[32px] md:text-[40px] font-medium leading-[1.2] tracking-[-0.03em] text-white">
            Industry leaders
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 group backdrop-blur-sm"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                style={{ mixBlendMode: 'normal' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
