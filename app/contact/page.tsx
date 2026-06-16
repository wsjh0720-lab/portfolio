export default function ContactPage() {
  return (
    <div className="px-[var(--card-padding)] py-section">
      <div className="mx-auto max-w-readable">
        {/* Page Title */}
        <h1 className="font-display text-hero-md md:text-hero text-ink-obsidian leading-[0.9] tracking-tight mb-[60px]">
          联系
        </h1>

        <div className="max-w-[640px]">
          <p className="font-sans text-lg text-ink-obsidian leading-[1.67] mb-[60px]">
            如果有合作意向或其他想聊的，欢迎通过以下方式找到我。
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col gap-[40px] mb-[80px]">
            <div>
              <h2 className="font-sans text-[13px] text-ink-obsidian/40 uppercase tracking-[0.05em] mb-[12px]">
                Email
              </h2>
              <a
                href="mailto:hello@yourname.com"
                className="font-display text-display-lg md:text-display-xl text-ink-obsidian hover:text-deep-midnight transition-colors duration-200 leading-[1]"
              >
                hello@yourname.com
              </a>
            </div>

            <div>
              <h2 className="font-sans text-[13px] text-ink-obsidian/40 uppercase tracking-[0.05em] mb-[12px]">
                社交媒体
              </h2>
              <div className="flex flex-col gap-[12px]">
                {[
                  { platform: 'Bilibili', handle: '@yourname', url: '#' },
                  { platform: 'Instagram', handle: '@yourname', url: '#' },
                  { platform: '微博', handle: '@yourname', url: '#' },
                  { platform: '微信', handle: 'YourName_Studio', url: '#' },
                ].map((item) => (
                  <a
                    key={item.platform}
                    href={item.url}
                    className="group flex items-center gap-[16px] font-sans text-lg text-ink-obsidian hover:text-deep-midnight transition-colors duration-200"
                  >
                    <span className="w-[100px] text-ink-obsidian/40 group-hover:text-ink-obsidian/60 transition-colors">
                      {item.platform}
                    </span>
                    <span className="border-b border-transparent group-hover:border-deep-midnight transition-all duration-200">
                      {item.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Collaboration CTA */}
          <div className="border-t border-ink-obsidian/10 pt-[40px]">
            <p className="font-sans text-lg text-ink-obsidian/60 leading-[1.67]">
              目前开放导演、摄影指导、后期及 AI 影像相关合作。
              <br />
              请通过邮件联系，我会在 48 小时内回复。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
