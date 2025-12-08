import { BookOpen, Target, Calculator, TrendingUp } from 'lucide-react';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Index Methodology</h1>
          <p className="text-xl text-gray-400">
            Understanding how the India Venture Index is constructed and calculated
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-6 w-6 text-emerald-500" />
              <h2 className="text-2xl font-semibold text-white">Overview</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The India Venture Index (IND-V) is a benchmark index tracking the performance of Indian
              &quot;New Economy&quot; (Startup/Tech) companies listed on the stock exchanges (NSE/BSE). The goal
              is to provide a comparison of how Indian VC-backed startups perform as an asset class compared
              to the broader market (Nifty 50).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Base Date</p>
                <p className="text-lg font-semibold text-white">January 1, 2021</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Base Value</p>
                <p className="text-lg font-semibold text-white">100.00</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Universe</p>
                <p className="text-lg font-semibold text-white">~30 Companies</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="h-6 w-6 text-emerald-500" />
              <h2 className="text-2xl font-semibold text-white">Construction Rules</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Universe Selection</h3>
                <p className="text-gray-300">
                  Approximately 30 VC-backed Indian companies including Zomato, Paytm, Nykaa, PolicyBazaar,
                  Delhivery, and other new-economy companies listed on NSE/BSE.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Weighting Methodology</h3>
                <p className="text-gray-300 mb-2">
                  The India Venture Index uses <strong className="text-emerald-500">Total Market Capitalization</strong> weighting,
                  where each company&apos;s weight is proportional to its total market cap.
                </p>
                <p className="text-gray-400 text-sm italic">
                  Note: This differs from Nifty 50, which uses Free-Float Market Capitalization. The IND-V methodology
                  includes all shares (including promoter holdings) to reflect the total value of the startup ecosystem.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Capping Rules</h3>
                <p className="text-gray-300">
                  Version 1.0 uses uncapped (raw market cap) methodology. No single company is capped,
                  allowing natural market-cap weighting.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <Calculator className="h-6 w-6 text-emerald-500" />
              <h2 className="text-2xl font-semibold text-white">Calculation Logic</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  &quot;Same Store Growth&quot; (Chain-Link Method)
                </h3>
                <p className="text-gray-300 mb-4">
                  To prevent the index from spiking artificially when a large company lists (e.g., Swiggy),
                  the index uses the Chain-Link formula:
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-400 mb-2">Standard Growth Formula:</p>
                  <p className="text-white font-mono text-sm">
                    Index<sub>t</sub> = Index<sub>t-1</sub> × (Total MCap<sub>t</sub> / Total MCap<sub>t-1</sub>)
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">New Listing Adjustment:</p>
                  <p className="text-white font-mono text-sm mb-2">
                    Index<sub>t</sub> = Index<sub>t-1</sub> × ((Total MCap<sub>t</sub> - MCap of S<sub>new</sub>) / Total MCap<sub>t-1</sub>)
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    When a new stock enters the index, growth is calculated ONLY on the &quot;Same Store&quot; portfolio.
                    The new stock adds to the Market Cap total but does not affect the Index Value on Day 1.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-6 w-6 text-emerald-500" />
              <h2 className="text-2xl font-semibold text-white">Corporate Actions</h2>
            </div>
            <p className="text-gray-300 mb-4">
              The index accounts for various corporate actions including:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong className="text-white">Share Count Changes:</strong> Acquisitions, QIPs, and fundraises
                  (e.g., Zomato&apos;s Blinkit acquisition, Paytm&apos;s buyback)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong className="text-white">Bonus Issues:</strong> Stock splits and bonus shares
                  (e.g., Nykaa&apos;s 5:1 bonus issue)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>
                  <strong className="text-white">Buybacks:</strong> Share count reductions through buyback programs
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 rounded-lg p-8 border border-emerald-800/50">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Characteristics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Rebalancing</h3>
                <p className="text-gray-300 text-sm">
                  Quarterly rebalancing to reflect changes in market capitalization and new listings
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Data Source</h3>
                <p className="text-gray-300 text-sm">
                  Prices and market data sourced from NSE/BSE official exchanges
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Comparison</h3>
                <p className="text-gray-300 text-sm">
                  Benchmarked against Nifty 50, both rebased to 100 on January 1, 2021
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Focus</h3>
                <p className="text-gray-300 text-sm">
                  Exclusively tracks VC-backed new economy companies (Tech, E-commerce, Fintech)
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
