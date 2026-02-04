export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/leftclick__2_-removebg-preview.png"
                alt="myoProcess"
                className="h-6 w-6"
              />
              <div className="text-[13px] font-medium text-[#fafafa] tracking-[-0.01em]">myoProcess</div>
            </div>
            <p className="text-[13px] text-[#71717a] tracking-[-0.01em] font-normal">
              Connecting B2B executives with their ideal clients
            </p>
          </div>

          <div className="flex items-center gap-8 text-[13px] text-[#71717a]">
            <a href="#" className="hover:text-[#fafafa] transition-colors duration-150 tracking-[-0.01em]">Privacy</a>
            <a href="#" className="hover:text-[#fafafa] transition-colors duration-150 tracking-[-0.01em]">Terms</a>
          </div>
        </div>

        <div className="mt-12 text-[13px] text-[#52525b] tracking-[-0.01em]">
          © 2025 myoProcess. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
