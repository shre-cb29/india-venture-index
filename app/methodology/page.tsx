import { BookOpen, Target, Calculator, TrendingUp } from 'lucide-react';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Index Methodology</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Understanding how the India Venture Index is constructed and calculated
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
              The India Venture Index (IND-V) is a benchmark index tracking the performance of Indian
              &quot;New Economy&quot; (Startup/Tech) companies listed on the stock exchanges (NSE/BSE). The goal
              is to provide a comparison of how Indian VC-backed startups perform as an asset class compared
              to the broader market (Nifty 50).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs md:text-sm text-gray-600 mb-1">Base Date</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">January 1, 2021</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs md:text-sm text-gray-600 mb-1">Base Value</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">100.00</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs md:text-sm text-gray-600 mb-1">Universe</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">~30 Companies</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Construction Rules</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">1. Universe Selection</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Approximately 30 VC-backed Indian companies including Zomato, Paytm, Nykaa, PolicyBazaar,
                  Delhivery, and other new-economy companies listed on NSE/BSE.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">2. Weighting Methodology</h3>
                <p className="text-gray-700 mb-2 text-sm md:text-base">
                  The India Venture Index uses <strong className="text-emerald-600">Total Market Capitalization</strong> weighting,
                  where each company&apos;s weight is proportional to its total market cap.
                </p>
                <p className="text-gray-600 text-xs md:text-sm italic">
                  Note: This differs from Nifty 50, which uses Free-Float Market Capitalization. The IND-V methodology
                  includes all shares (including promoter holdings) to reflect the total value of the startup ecosystem.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">3. Capping Rules</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Version 1.0 uses uncapped (raw market cap) methodology. No single company is capped,
                  allowing natural market-cap weighting.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Calculator className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Calculation Logic</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                  &quot;Same Store Growth&quot; (Chain-Link Method)
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  The index uses a &quot;Same Store Growth&quot; approach to prevent artificial spikes when new companies list.
                  This means we only measure growth from existing companies, not from adding new ones.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                  <p className="text-sm text-emerald-600 font-semibold mb-3">Example:</p>
                  <p className="text-gray-700 text-sm mb-3">
                    Let&apos;s say on March 31st, the index has 3 companies with a total market cap of ₹100,000 crores,
                    and the index value is 150.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-900 font-medium">
                      <strong>April 30th - No new listings:</strong>
                    </p>
                    <p className="text-gray-700 ml-4">
                      • The same 3 companies now have a total market cap of ₹110,000 crores (10% growth)
                    </p>
                    <p className="text-gray-700 ml-4">
                      • Index value = 150 × (₹110,000 / ₹100,000) = 165
                    </p>
                  </div>
                  <div className="space-y-2 text-sm mt-4">
                    <p className="text-gray-900 font-medium">
                      <strong>May 31st - New company lists:</strong>
                    </p>
                    <p className="text-gray-700 ml-4">
                      • The 3 existing companies grow to ₹115,000 crores
                    </p>
                    <p className="text-gray-700 ml-4">
                      • A new company lists with ₹20,000 crores market cap
                    </p>
                    <p className="text-gray-700 ml-4">
                      • Total market cap = ₹135,000 crores
                    </p>
                    <p className="text-emerald-600 ml-4 font-semibold">
                      • Index value = 165 × (₹115,000 / ₹110,000) = 172.5
                    </p>
                    <p className="text-gray-600 text-xs ml-4 mt-2">
                      Note: We exclude the new company&apos;s ₹20,000 crores from the growth calculation.
                      It gets added to the total market cap but doesn&apos;t inflate the index on day one.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                    When are new companies included in the index value?
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    New companies are included in the index calculation starting from the month after their listing.
                    This gives the stock time to stabilize and ensures we&apos;re tracking meaningful performance.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong className="text-gray-900">Example:</strong> If Swiggy lists on November 13, 2024, it will be included
                    in the index calculation starting from December 1, 2024. From that month onwards, Swiggy&apos;s market cap
                    movements will affect the index value using the same store growth method described above.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Corporate Actions</h2>
            </div>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              The index accounts for various corporate actions including:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Share Count Changes:</strong> Acquisitions, QIPs, and fundraises
                  (e.g., Zomato&apos;s Blinkit acquisition, Paytm&apos;s buyback)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Bonus Issues:</strong> Stock splits and bonus shares
                  (e.g., Nykaa&apos;s 5:1 bonus issue)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Buybacks:</strong> Share count reductions through buyback programs
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-6 md:p-8 border border-emerald-200">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Key Characteristics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/70 rounded-lg p-4 border border-emerald-200">
                <h3 className="text-gray-900 font-semibold mb-2 text-sm md:text-base">Rebalancing</h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  Currently, no rebalancing happens
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 border border-emerald-200">
                <h3 className="text-gray-900 font-semibold mb-2 text-sm md:text-base">Data Source</h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  NSE/BSE/Company Documents/Google Finance/Gemini
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 border border-emerald-200">
                <h3 className="text-gray-900 font-semibold mb-2 text-sm md:text-base">Comparison</h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  Benchmarked against Nifty 50, both rebased to 100 on January 1, 2021
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 border border-emerald-200">
                <h3 className="text-gray-900 font-semibold mb-2 text-sm md:text-base">Focus</h3>
                <p className="text-gray-700 text-xs md:text-sm">
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
