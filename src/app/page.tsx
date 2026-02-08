'use client'

import { ZoomIn, ZoomOut, Calendar, Clock, Globe2 } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-12 h-12 text-blue-500" />
              <h1 className="text-6xl font-bold text-white">Timeline</h1>
            </div>
            <p className="text-2xl text-slate-300">
              Human Progress at Every Scale
            </p>
          </div>

          {/* Main Description */}
          <div className="space-y-6 text-lg text-slate-300">
            <p className="text-xl leading-relaxed">
              An infinite, interactive timeline of human history that adapts to your perspective.
            </p>
            <p className="leading-relaxed">
              Zoom out to see millennia unfold on a single page. Zoom in to experience history
              as a live stream of events happening in real-time.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex flex-col items-center space-y-3">
                <ZoomOut className="w-10 h-10 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Zoom Out</h3>
                <p className="text-sm text-slate-400 text-center">
                  See all of human history on one page. From the Big Bang to today,
                  understand the full scope of our story.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex flex-col items-center space-y-3">
                <Calendar className="w-10 h-10 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Infinite Scroll</h3>
                <p className="text-sm text-slate-400 text-center">
                  Navigate through time seamlessly. Every event, discovery,
                  and milestone in an endless vertical timeline.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex flex-col items-center space-y-3">
                <ZoomIn className="w-10 h-10 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Zoom In</h3>
                <p className="text-sm text-slate-400 text-center">
                  Experience history as it happens. Watch events unfold
                  in real-time, minute by minute, day by day.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mt-16 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              <Globe2 className="inline w-8 h-8 mr-2 text-blue-500" />
              Built for Exploration
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-2">For Students</h4>
                <p className="text-sm text-slate-400">
                  Understand historical context by seeing how events relate across time and space.
                </p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-2">For Educators</h4>
                <p className="text-sm text-slate-400">
                  Teach history dynamically with interactive visualizations that engage students.
                </p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-2">For History Buffs</h4>
                <p className="text-sm text-slate-400">
                  Dive deep into specific eras and discover connections you never knew existed.
                </p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-2">For the Curious</h4>
                <p className="text-sm text-slate-400">
                  Explore humanity&apos;s greatest achievements and darkest moments with unprecedented clarity.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 space-y-4">
            <p className="text-slate-400 text-lg">Coming Soon</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
              />
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors w-full sm:w-auto">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-24">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-slate-500 text-sm">
            © 2026 Timeline. A project exploring the intersection of history, data, and design.
          </p>
        </div>
      </footer>
    </main>
  )
}
