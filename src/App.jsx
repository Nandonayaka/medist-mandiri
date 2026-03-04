import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <main className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex gap-12 items-center justify-center">
              <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
                <img src={viteLogo} className="w-24 h-24 drop-shadow-[0_0_2rem_#646cffaa]" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
                <img src={reactLogo} className="w-24 h-24 drop-shadow-[0_0_2rem_#61dafbaa] animate-spin-slow" alt="React logo" />
              </a>
            </div>

            <header className="space-y-4 max-w-2xl">
              <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 pb-2">
                Medist Mandiri
              </h1>
              <p className="text-xl text-slate-400 font-medium">
                React JS + Tailwind CSS v4 is ready to go!
              </p>
            </header>

            <div className="bg-slate-900/50 border border-slate-800 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-6 max-w-md w-full">
              <p className="text-slate-300">
                Test the interactive state below:
              </p>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95 flex items-center justify-center gap-3"
              >
                Count is <span className="bg-white/20 px-3 py-1 rounded-lg tabular-nums">{count}</span>
              </button>
              <p className="text-sm text-slate-500">
                Edit <code className="text-cyan-400 font-mono">src/App.jsx</code> and save to test HMR
              </p>
            </div>

            <div className="flex gap-8 text-slate-400 font-semibold pt-8">
              <p className="hover:text-cyan-400 transition-colors cursor-help">Fast</p>
              <p className="hover:text-blue-400 transition-colors cursor-help">Modern</p>
              <p className="hover:text-purple-400 transition-colors cursor-help">Scalable</p>
            </div>
          </div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      ` }} />
    </div>
  )
}

export default App
