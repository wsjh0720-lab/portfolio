export default function AboutPage() {
  return (
    <div className="px-[var(--card-padding)] py-section">
      <div className="mx-auto max-w-readable">
        {/* Page Title */}
        <h1 className="font-display text-hero-md md:text-hero text-ink-obsidian leading-[0.9] tracking-tight mb-[60px]">
          关于
        </h1>

        <div className="max-w-[640px]">
          <p className="font-sans text-lg text-ink-obsidian leading-[1.67] mb-[30px]">
            我是 Your Name，一位以影像为媒介的创作者。从纪录片到商业广告，从静态摄影到 AI 生成实验，我一直试图在不同的媒介之间寻找自己的语言。
          </p>

          <p className="font-sans text-lg text-ink-obsidian leading-[1.67] mb-[30px]">
            过去几年，我的工作涵盖了导演、摄影指导、后期剪辑与调色，以及近年来的 AI 影像探索。我不太喜欢给自己贴标签——对我来说，工具和形式只是抵达表达的手段。
          </p>

          <p className="font-sans text-lg text-ink-obsidian leading-[1.67] mb-[60px]">
            目前 base 在 [城市]，欢迎各种有趣的项目合作。
          </p>

          {/* Experience List */}
          <div className="border-t border-ink-obsidian/10 pt-[30px]">
            <h2 className="font-display text-display-lg text-ink-obsidian leading-[1] mb-[30px]">
              经历
            </h2>

            <div className="flex flex-col gap-[30px]">
              {[
                { year: '2022 — 至今', title: '独立导演 / 摄影师', desc: '专注于品牌视觉与人文纪录片' },
                { year: '2020 — 2022', title: 'XX 影视公司 · 后期主管', desc: '负责团队后期流程管理与质量控制' },
                { year: '2018 — 2020', title: 'XX 传媒 · 摄影/剪辑', desc: '商业项目全流程执行' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col md:flex-row md:items-start gap-[12px] md:gap-[40px]">
                  <span className="font-sans text-[15px] text-ink-obsidian/40 shrink-0 min-w-[140px]">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg text-ink-obsidian mb-[4px]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[15px] text-ink-obsidian/60 leading-[1.67]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
