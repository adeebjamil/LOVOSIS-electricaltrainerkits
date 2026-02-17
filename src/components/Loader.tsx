export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      {/* Animated logo pulse */}
      <div className="relative mb-8">
        {/* Outer ring */}
        <div className="w-20 h-20 rounded-full border-[3px] border-neutral-100 flex items-center justify-center">
          {/* Spinning arc */}
          <svg
            className="absolute w-20 h-20 animate-spin"
            viewBox="0 0 80 80"
            style={{ animationDuration: '1.2s' }}
          >
            <circle
              cx="40"
              cy="40"
              r="37"
              fill="none"
              stroke="url(#loaderGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="80 160"
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center icon — Lovosis bolt */}
          <svg
            className="w-8 h-8 text-red-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>

      {/* Brand name */}
      <p className="text-sm font-bold tracking-[0.25em] uppercase text-neutral-400">
        Lovosis
      </p>

      {/* Subtle loading bar */}
      <div className="mt-6 w-40 h-[2px] bg-neutral-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
          style={{
            animation: 'loaderBar 1.4s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes loaderBar {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
