export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-xl">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <img
              src="/leftclick__2_-removebg-preview.png"
              alt="myoProcess"
              className="h-8 w-8"
            />
            <div className="text-[13px] font-medium tracking-[-0.01em] text-[#fafafa]">
              myoProcess
            </div>
          </div>

          <a
            href="https://cal.com/saadmyoprocess/quick-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-normal text-[#a1a1aa] hover:text-[#fafafa] transition-colors duration-150"
          >
            Access the Routing Layer
          </a>
        </div>
      </div>
    </nav>
  );
}
