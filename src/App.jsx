export default function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Card */}
      <div className="w-full max-w-6xl overflow-hidden rounded-[28px] border border-blue-500/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left panel */}
          <div className="relative min-h-[520px] lg:min-h-[680px] p-10 text-white">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF] via-[#5B40F1] to-[#2B7DE9]" />
            <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.22),transparent_55%)]" />

            <div className="relative z-10 h-full flex flex-col">
              {/* logo */}
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                {/* simple hourglass */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M7 3h10M7 21h10M8 3v5c0 2 2 3 4 4-2 1-4 2-4 4v5M16 3v5c0 2-2 3-4 4 2 1 4 2 4 4v5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="mt-10">
                <h1 className="text-4xl font-semibold leading-tight">
                  Stay on top of
                  <br />
                  time tracking
                </h1>
              </div>

              {/* Illustration placeholder (card) */}
              <div className="mt-10 w-full max-w-[420px]">
                <div className="relative rounded-2xl bg-white/15 backdrop-blur border border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.25)] overflow-hidden">
                  {/* top bar */}
                  <div className="h-10 bg-[#2C2C2C]/40 flex items-center px-4 gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="ml-3 h-2.5 flex-1 rounded bg-white/15" />
                  </div>

                  {/* grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 28 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-4 rounded bg-white/20"
                          style={{
                            opacity:
                              i % 9 === 0
                                ? 0.55
                                : i % 5 === 0
                                ? 0.4
                                : 0.25,
                          }}
                        />
                      ))}
                    </div>

                    {/* people silhouette-ish */}
                    <div className="mt-5 flex items-end justify-between px-6">
                      <div className="w-28 h-28 rounded-full bg-black/35" />
                      <div className="w-24 h-40 rounded-[32px] bg-black/25" />
                    </div>
                  </div>
                </div>
              </div>

              {/* little plant */}
              <div className="mt-auto flex items-end gap-6 pt-10">
                <div className="w-16 h-20 rounded-xl bg-white/10 border border-white/15" />
                <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/15" />
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-white p-8 sm:p-12">
            <div className="mx-auto w-full max-w-[520px]">
              <h2 className="text-center text-3xl font-semibold text-[#222]">
                Create Account
              </h2>

              <form className="mt-10 space-y-6">
                {/* names row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full h-11 rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full h-11 rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full h-11 rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder=""
                    className="w-full h-11 rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60"
                  />
                </div>

                <button
                  type="button"
                  className="w-full h-12 rounded-lg bg-[#1F1F1F] text-white font-medium hover:bg-black transition"
                >
                  Create Account
                </button>

                <div className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Login
                  </a>
                </div>

                {/* divider */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-gray-400">or</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* social buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <button
                    type="button"
                    className="h-12 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3 text-sm text-gray-700"
                  >
                    {/* Google icon */}
                    <svg width="18" height="18" viewBox="0 0 48 48">
                      <path
                        fill="#FFC107"
                        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24 44c5.3 0 10.1-2 13.7-5.2l-6.3-5.2C29.4 35.1 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.7 16.2 44 24 44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.6 20.1H42V20H24v8h11.3c-1 2.7-3 4.9-5.6 6.3l.1.1 6.3 5.2C39.5 36.7 44 31.2 44 24c0-1.3-.1-2.6-.4-3.9z"
                      />
                    </svg>
                    Sign up with Google
                  </button>

                  <button
                    type="button"
                    className="h-12 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3 text-sm text-gray-700"
                  >
                    {/* Facebook icon */}
                    <svg width="18" height="18" viewBox="0 0 48 48">
                      <path
                        fill="#1877F2"
                        d="M24 4C12.95 4 4 12.95 4 24c0 9.98 7.31 18.25 16.88 19.75V29.8h-5.1v-5.8h5.1v-4.4c0-5.04 3-7.82 7.6-7.82 2.2 0 4.5.39 4.5.39v4.96h-2.54c-2.5 0-3.28 1.55-3.28 3.14V24h5.58l-.89 5.8h-4.69v13.95C36.69 42.25 44 33.98 44 24 44 12.95 35.05 4 24 4z"
                      />
                      <path
                        fill="#fff"
                        d="M32.98 29.8l.89-5.8h-5.58v-3.74c0-1.59.78-3.14 3.28-3.14h2.54v-4.96s-2.3-.39-4.5-.39c-4.6 0-7.6 2.78-7.6 7.82V24h-5.1v5.8h5.1v13.95c1.02.16 2.06.25 3.12.25s2.1-.09 3.12-.25V29.8h4.73z"
                      />
                    </svg>
                    Sign up with Facebook
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}