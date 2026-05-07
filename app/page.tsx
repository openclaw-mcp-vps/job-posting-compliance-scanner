export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Job Posts for<br />
          <span className="text-[#58a6ff]">Discriminatory Language</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          AI-powered analysis detects biased language, checks salary disclosure compliance, and scores accessibility — before you publish.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scanning — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>

        <div className="grid grid-cols-3 gap-4 mt-14 text-center">
          {[
            ['Bias Detection', 'Flags gendered, ageist, and exclusionary phrasing'],
            ['Salary Compliance', 'Checks state-level pay transparency requirements'],
            ['Accessibility Score', 'Ensures inclusive language for all candidates']
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-2">{title}</div>
              <div className="text-[#8b949e] text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              '100 job post scans/month',
              'Bias & discrimination detection',
              'Salary disclosure compliance',
              'Accessibility language scoring',
              'Detailed PDF reports',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'Which laws does the scanner check for?',
              'We check against EEOC guidelines, state-level pay transparency laws (CA, NY, CO, WA, and more), and ADA accessibility language standards.'
            ],
            [
              'How does the AI detect biased language?',
              'Our model is trained on HR compliance datasets and flags gendered pronouns, age-coded phrases, ability-biased terms, and culturally exclusionary language with explanations.'
            ],
            [
              'Can I scan multiple job posts at once?',
              'Yes. Pro subscribers can paste or upload up to 100 job descriptions per month. Bulk CSV upload is available on request.'
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Job Posting Compliance Scanner. All rights reserved.
      </footer>
    </main>
  )
}
