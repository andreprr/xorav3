"use client";

export default function HeroSideLabels(){
  return (
    <>

      {/* Right vertical copyright */}
      <div className="absolute right-6 top-1/2 z-30 -translate-y-1/2 flex items-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-[11px] font-medium text-slate-400" style={{writingMode:'vertical-rl'}}>
            © 2026 XORA STUDIO. ALL RIGHTS RESERVED
          </div>
          <div className="h-0.5 w-8 bg-slate-200" />
        </div>
      </div>
    </>
  );
}
