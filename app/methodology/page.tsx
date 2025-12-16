import { BookOpen, Target, Calculator, TrendingUp } from 'lucide-react';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">Index Methodology</h1>
          <p className="text-lg text-gray-600">
            Understanding how the India Venture Index is constructed and calculated
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-3">
              The India Venture Index (IND-V) is a benchmark index tracking the performance of Indian
              &quot;New Economy&quot; (Startup/Tech) companies listed on the stock exchanges (NSE/BSE).
              The goal is to track how Indian VC-backed startups perform as an asset class.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
              <p className="text-gray-700 text-xs md:text-sm">
                <strong className="text-gray-900">Data Source:</strong> NSE/BSE, Company Documents, Google Finance, and Gemini
              </p>
            </div>
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
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6">Construction Rules</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-3">1. Universe Selection</h3>
                <p className="text-gray-700 text-sm md:text-base mb-3">
                  The index applies a straightforward selection criteria: companies that have raised more than $10 million
                  in venture capital funding and completed their public listing after January 1, 2021. This currently encompasses
                  approximately 30 VC-backed Indian companies including Zomato, Paytm, Nykaa, PolicyBazaar, Delhivery, and other
                  new-economy firms listed on NSE/BSE.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-700 text-xs md:text-sm">
                    <strong className="text-gray-900">Note:</strong> If you believe a company meeting these criteria has been excluded, please bring it to our attention.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-3">2. Weighting Methodology</h3>
                <p className="text-gray-700 mb-3 text-sm md:text-base">
                  The India Venture Index uses <strong className="text-emerald-600">Total Market Capitalization</strong> weighting,
                  where each company&apos;s weight is proportional to its total market cap.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-700 text-xs md:text-sm">
                    <strong className="text-gray-900">Note:</strong> This differs from Nifty 50, which uses Free-Float Market Capitalization. The IND-V methodology
                    includes all shares (including promoter holdings) to reflect the total value of the startup ecosystem.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-3">3. Capping & Rebalancing</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  The index currently implements no capping mechanism. The aggregate market capitalization is directly
                  scaled to determine the index value, preserving natural market-cap weighting across all constituents.
                  No periodic rebalancing is currently performed.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6">Calculation Logic</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-3">
                  &quot;Same Store Growth&quot; (Chain-Link Method)
                </h3>
                <p className="text-gray-700 mb-2 text-sm md:text-base">
                  The index uses a &quot;Same Store Growth&quot; approach to prevent artificial spikes when new companies list.
                  This means we only measure growth from existing companies, not from adding new ones.
                </p>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  New companies are included in the index calculation starting from the month after their listing.
                  This gives the stock time to stabilize and ensures we&apos;re tracking meaningful performance. Once included,
                  their market cap movements affect the index value using the same store growth method.
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
                      • A new company (Company D) lists on May 15th with ₹20,000 crores market cap
                    </p>
                    <p className="text-gray-700 ml-4">
                      • Total market cap = ₹135,000 crores
                    </p>
                    <p className="text-emerald-600 ml-4 font-semibold">
                      • Index value = 165 × (₹115,000 / ₹110,000) = 172.5
                    </p>
                    <p className="text-gray-600 text-xs ml-4 mt-2">
                      Note: We exclude Company D&apos;s ₹20,000 crores from the growth calculation.
                      It gets added to the total market cap but doesn&apos;t inflate the index on day one.
                    </p>
                  </div>
                  <div className="space-y-2 text-sm mt-4">
                    <p className="text-gray-900 font-medium">
                      <strong>June 30th - New company now included:</strong>
                    </p>
                    <p className="text-gray-700 ml-4">
                      • The 3 original companies grow to ₹120,000 crores
                    </p>
                    <p className="text-gray-700 ml-4">
                      • Company D (listed in May) grows to ₹22,000 crores
                    </p>
                    <p className="text-gray-700 ml-4">
                      • Total market cap = ₹142,000 crores
                    </p>
                    <p className="text-emerald-600 ml-4 font-semibold">
                      • Index value = 172.5 × (₹142,000 / ₹135,000) = 181.4
                    </p>
                    <p className="text-gray-600 text-xs ml-4 mt-2">
                      Note: Now Company D is included in the calculation since it&apos;s been more than a month since listing.
                      Its growth from ₹20,000 to ₹22,000 crores contributes to the index movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">Corporate Actions</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              The index accounts for various corporate actions including:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base mb-4">
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
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">ESOP Exercise/Issuance:</strong> Employee stock option exercises and issuances that change share count
                </span>
              </li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-gray-700 text-xs md:text-sm">
                <strong className="text-gray-900">Note:</strong> Historical market capitalization has been calculated using share price
                multiplied by shares outstanding. Due to the complexity of tracking all corporate actions and the limited availability
                of comprehensive historical share count data, minor discrepancies may exist in historical calculations.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 mb-6 text-sm text-gray-500">
          <p>Last updated: November 30, 2024</p>
        </div>
      </div>
    </div>
  );
}
