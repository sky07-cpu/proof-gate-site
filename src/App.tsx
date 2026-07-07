import { useEffect, useState, type ReactNode } from 'react'

type IconName =
  | 'alert'
  | 'shield'
  | 'document'
  | 'user'
  | 'spark'
  | 'search'
  | 'risk'
  | 'check'
  | 'report'
  | 'archive'
  | 'chat'
  | 'knowledge'
  | 'launch'
  | 'vendor'

const navigation = [
  { href: '#targets', label: '導入対象' },
  { href: '#features', label: '機能' },
  { href: '#pricing', label: '料金' },
  { href: '#faq', label: 'FAQ' },
]

const challenges = [
  {
    icon: 'user' as IconName,
    title: '確認作業が属人化',
    text: 'AI導入後、回答が正しいか確認する作業が、特定の担当者に集中してしまう。',
  },
  {
    icon: 'alert' as IconName,
    title: '危険な回答を見逃す',
    text: '根拠のない回答や、業務上のリスクにつながる回答を見逃す可能性がある。',
  },
  {
    icon: 'document' as IconName,
    title: '説明できる記録がない',
    text: '顧客や社内に、何を・どのように検証したのかを示す記録が残りにくい。',
  },
  {
    icon: 'shield' as IconName,
    title: '品質基準が揺らぐ',
    text: 'リリース前の品質確認が、担当者ごとの経験や感覚に依存しやすい。',
  },
]

const targets = [
  {
    icon: 'vendor' as IconName,
    title: 'AI導入ベンダー',
    text: '納品前の品質確認を標準化し、顧客へ説明できる検証レポートを残せます。',
  },
  {
    icon: 'spark' as IconName,
    title: '社内AI推進チーム',
    text: 'PoCから本番運用まで、AI回答の品質基準をチームで共有できます。',
  },
  {
    icon: 'chat' as IconName,
    title: 'カスタマーサポート部門',
    text: '顧客対応AIが危険な回答をしないか、公開前に確認できます。',
  },
  {
    icon: 'knowledge' as IconName,
    title: 'RAG型FAQを運用する企業',
    text: 'FAQ更新後の回答変化を検査し、継続的な改善サイクルにつなげられます。',
  },
]

const solutions = [
  { icon: 'spark' as IconName, title: 'テストケース生成', text: '検証観点を整理し、再利用できるテストケースを準備。' },
  { icon: 'search' as IconName, title: '回答と根拠の検査', text: '回答内容と参照根拠を並べ、妥当性を確認。' },
  { icon: 'risk' as IconName, title: 'リスク判定', text: '誤情報や不適切表現など、注意すべき回答を可視化。' },
  { icon: 'check' as IconName, title: '人間による承認', text: '最後は人間が判断し、承認結果を明確に記録。' },
  { icon: 'report' as IconName, title: 'レポート出力', text: '検査結果を、共有・説明に使える形でまとめる。' },
  { icon: 'archive' as IconName, title: '監査証跡の保存', text: '誰がいつ確認したかを、追跡可能な履歴として残す。' },
]

const featureDetails = [
  {
    icon: 'spark' as IconName,
    title: 'テストケース管理',
    text: '質問、期待回答、評価観点をまとめ、リリース前後で繰り返し使える形にします。',
  },
  {
    icon: 'search' as IconName,
    title: '回答検査',
    text: 'AIが返した回答をテストケースごとに確認し、品質のばらつきを把握します。',
  },
  {
    icon: 'document' as IconName,
    title: '根拠確認',
    text: '回答が参照した文書やFAQと矛盾していないか、人間が判断しやすい形で表示します。',
  },
  {
    icon: 'risk' as IconName,
    title: 'リスク判定',
    text: '誤情報、断定表現、個人情報、禁止表現など、注意すべき観点を整理します。',
  },
  {
    icon: 'check' as IconName,
    title: '人間承認',
    text: '最終判断を人間が行い、誰が承認したかを品質記録として残します。',
  },
  {
    icon: 'report' as IconName,
    title: 'レポート出力',
    text: '検証結果を社内共有、顧客説明、納品前チェックに使えるレポートとしてまとめます。',
  },
  {
    icon: 'archive' as IconName,
    title: '監査ログ',
    text: '検査日時、判定、承認者、変更履歴を後から追える証跡として保存します。',
  },
]

const useCases = [
  { icon: 'chat' as IconName, label: 'RAG型FAQチャットボット', number: '01' },
  { icon: 'knowledge' as IconName, label: '社内ナレッジ検索AI', number: '02' },
  { icon: 'launch' as IconName, label: '顧客対応AIのリリース前検証', number: '03' },
  { icon: 'vendor' as IconName, label: 'AI導入ベンダーによる納品前チェック', number: '04' },
]

const workflow = [
  { step: '01', title: 'テストケースを作成', text: '期待する回答と確認観点を定義' },
  { step: '02', title: 'AIに回答させる', text: '実環境に近い条件で一括実行' },
  { step: '03', title: '回答・根拠・リスクを検査', text: '複数の観点から品質を評価' },
  { step: '04', title: '人間が承認', text: '結果を確認し、判断を記録' },
  { step: '05', title: 'レポートとして出力', text: '共有できる監査証跡を作成' },
]

const pricingPlans = [
  {
    name: 'Starter',
    label: '小さく検証を始めたいチーム向け',
    price: 'お問い合わせ',
    description: 'PoCや初期導入で、AI回答品質の確認フローを試したい方向け。',
    features: ['基本的なテストケース管理', '回答・根拠の確認', '簡易レポート出力'],
  },
  {
    name: 'Team',
    label: '継続運用するチーム向け',
    price: 'お問い合わせ',
    description: '複数メンバーで承認フローを回し、品質記録を残したい方向け。',
    features: ['チームでの承認管理', 'リスク判定の整理', '監査ログの保存'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    label: '全社・顧客向け運用に',
    price: 'お問い合わせ',
    description: '部署横断、顧客説明、納品前チェックなど、より厳密な運用向け。',
    features: ['高度なレポート設計', '運用ルールの設計支援', '個別要件への対応相談'],
  },
]

const faqs = [
  {
    question: 'Proof Gateは何をするサービスですか？',
    answer:
      '生成AIやRAG型チャットボットの回答品質を、テストケースで検査し、人間が承認し、その記録をレポートとして残すための品質管理基盤です。',
  },
  {
    question: 'RAG型AI以外にも使えますか？',
    answer:
      'はい。FAQ、社内ナレッジ検索、顧客対応AIなど、回答内容の正しさや説明責任が重要なAIであれば活用できます。',
  },
  {
    question: 'ログインやデータベースは今ありますか？',
    answer:
      '現時点のサイトは紹介用の静的1ページLPです。ログイン、データベース、API連携、問い合わせ送信処理はまだ実装していません。',
  },
  {
    question: '導入ベンダー向けですか？',
    answer:
      '導入ベンダーにも向いています。納品前のチェック、顧客への説明資料、品質確認プロセスの標準化に使える想定です。',
  },
  {
    question: 'レポートは何に使えますか？',
    answer:
      '社内レビュー、リリース判定、顧客説明、監査対応、改善履歴の共有など、AI回答品質を説明する場面で使えます。',
  },
]

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    alert: <><path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.3 3.9 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></>,
    user: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m17 11 2 2 4-4" /></>,
    spark: <><path d="m12 3-1.4 3.6L7 8l3.6 1.4L12 13l1.4-3.6L17 8l-3.6-1.4L12 3ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 13l-.6 1.4L17 15l1.4.6L19 17l.6-1.4L21 15l-1.4-.6L19 13Z" /></>,
    search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3M8 11l2 2 4-4" /></>,
    risk: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="M12 8v4M12 16h.01" /></>,
    check: <><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></>,
    report: <><path d="M4 19.5V4a2 2 0 0 1 2-2h12v18H6a2 2 0 0 0-2 2Z" /><path d="M8 7h6M8 11h6M8 15h3" /></>,
    archive: <><path d="M21 8v13H3V8M1 3h22v5H1z" /><path d="M10 12h4" /></>,
    chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.6V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4Z" /><path d="M7 8h10M7 12h6" /></>,
    knowledge: <><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2Z" /><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z" /></>,
    launch: <><path d="M14 4h6v6M10 14 20 4" /><path d="M20 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" /></>,
    vendor: <><path d="M3 21h18M6 18V8h12v10M9 8V4h6v4M9 12h.01M15 12h.01M9 15h.01M15 15h.01" /></>,
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
}: {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`section-heading section-heading--${align} reveal`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-description">{text}</p>}
    </div>
  )
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Proof Gate トップへ">
      <span className="logo-mark"><Icon name="shield" /></span>
      <span>Proof Gate</span>
    </a>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  // スクロール時に .reveal 要素へ is-visible を付け、ふわっと表示させます。
  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className={`site-header ${isMenuOpen ? 'is-menu-open' : ''}`}>
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="メインナビゲーション">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="button button--small button--outline header-cta" href="#final-cta">お問い合わせ</a>
          <button
            className="menu-button"
            type="button"
            aria-label="ナビゲーションを開閉する"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className="mobile-nav" aria-label="スマートフォン用ナビゲーション">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a href="#final-cta" onClick={closeMenu}>お問い合わせ</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <div className="hero-badge"><span /> AI Quality Assurance Platform</div>
              <h1>生成AIの回答品質を、<br /><em>検査・承認・記録</em>する。</h1>
              <p className="hero-text">
                RAG型AIの回答をテストケースで検証し、<br className="desktop-only" />
                人間の承認と監査証跡を残す品質管理基盤。
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#workflow">デモを見る <span>→</span></a>
                <a className="button button--secondary" href="#features">資料を確認する</a>
              </div>
              <div className="hero-assurances">
                <span><Icon name="check" /> テストケースで再現</span>
                <span><Icon name="check" /> 人間が最終承認</span>
                <span><Icon name="check" /> 証跡をレポート化</span>
              </div>
            </div>

            <div className="product-visual" aria-label="Proof Gateの検査画面イメージ">
              <div className="visual-glow" />
              <div className="dashboard">
                <div className="dashboard-top">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>Verification Report</span>
                  <span className="report-id">PG-2026-031</span>
                </div>
                <div className="dashboard-body">
                  <aside>
                    <span className="mini-logo"><Icon name="shield" /></span>
                    <i className="active" /><i /><i /><i />
                  </aside>
                  <div className="dashboard-content">
                    <div className="report-heading">
                      <div><small>RELEASE CHECK</small><strong>回答品質レポート</strong></div>
                      <span className="approved"><Icon name="check" /> 承認済み</span>
                    </div>
                    <div className="score-row">
                      <div className="score-card main-score">
                        <div className="score-ring"><strong>94</strong><span>/ 100</span></div>
                        <div><small>総合スコア</small><b>リリース基準を達成</b></div>
                      </div>
                      <div className="score-card"><small>根拠整合性</small><b>98<em>%</em></b><div className="bar"><i style={{ width: '98%' }} /></div></div>
                      <div className="score-card"><small>安全性</small><b>96<em>%</em></b><div className="bar"><i style={{ width: '96%' }} /></div></div>
                    </div>
                    <div className="test-table">
                      <div className="table-head"><span>テストケース</span><span>判定</span><span>リスク</span></div>
                      {['返品ポリシーについて', '契約条件の確認', '個人情報の取り扱い'].map((item, index) => (
                        <div className="table-row" key={item}>
                          <span><i className="file-icon" /> {item}</span>
                          <span className="pass"><Icon name="check" /> Pass</span>
                          <span className={index === 1 ? 'risk-low' : 'risk-none'}>{index === 1 ? 'Low' : 'None'}</span>
                        </div>
                      ))}
                    </div>
                    <div className="approval-line">
                      <span className="avatar">YK</span>
                      <p><b>品質管理チームが承認</b><small>2026.07.07 14:32</small></p>
                      <span className="signed"><Icon name="shield" /> 証跡保存済み</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-card floating-card--risk">
                <span className="floating-icon"><Icon name="risk" /></span>
                <div><small>リスク検査</small><strong>重大リスク 0件</strong></div>
              </div>
              <div className="floating-card floating-card--audit">
                <span className="floating-icon"><Icon name="archive" /></span>
                <div><small>監査証跡</small><strong>自動保存しました</strong></div>
              </div>
            </div>
          </div>
          <div className="trust-strip">
            <div className="container">
              <p>AIを「導入する」から、<strong>説明できる品質で運用する</strong>へ。</p>
              <span>REPEATABLE</span><i /><span>TRACEABLE</span><i /><span>ACCOUNTABLE</span>
            </div>
          </div>
        </section>

        <section className="section challenges" id="challenges">
          <div className="container">
            <SectionHeading eyebrow="THE CHALLENGE" title="その品質確認、担当者の経験だけに頼っていませんか？" text="生成AIの活用が広がるほど、回答品質を継続的に管理する仕組みが必要になります。" />
            <div className="challenge-grid">
              {challenges.map((item, index) => (
                <article className="challenge-card reveal" key={item.title}>
                  <span className="card-number">0{index + 1}</span>
                  <span className="icon-box icon-box--muted"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section targets" id="targets">
          <div className="container">
            <SectionHeading eyebrow="WHO IT'S FOR" title="AI回答品質を説明する責任があるチームへ。" text="Proof Gateは、AIを作る側・運用する側・顧客対応に使う側の品質確認を支えます。" />
            <div className="target-grid">
              {targets.map((item) => (
                <article className="target-card reveal" key={item.title}>
                  <span className="icon-box"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section solutions" id="features">
          <div className="container solution-layout">
            <div className="solution-intro">
              <SectionHeading
                eyebrow="THE SOLUTION"
                title="品質確認のプロセスを、ひとつの場所に。"
                text="Proof Gateは、AI回答の検査から承認、レポート作成までを一貫したプロセスに整えます。"
                align="left"
              />
              <div className="solution-statement reveal">
                <span><Icon name="shield" /></span>
                <p><b>判断を置き換えるのではなく、</b>人間がより確かに判断できる環境をつくります。</p>
              </div>
            </div>
            <div className="solution-grid">
              {solutions.map((item, index) => (
                <article className="solution-card reveal" key={item.title}>
                  <span className="icon-box"><Icon name={item.icon} /></span>
                  <div><small>0{index + 1}</small><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section feature-detail-section">
          <div className="container">
            <SectionHeading eyebrow="FEATURE DETAILS" title="検査・承認・記録に必要な機能を一通り。" text="まずは静的サイトとして表現していますが、将来Webアプリ化しやすいよう、機能のまとまりが見える構成にしています。" />
            <div className="feature-detail-grid">
              {featureDetails.map((item) => (
                <article className="feature-detail-card reveal" key={item.title}>
                  <span className="icon-box icon-box--compact"><Icon name={item.icon} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section use-cases">
          <div className="container">
            <SectionHeading eyebrow="USE CASES" title="AIの品質を説明する、あらゆる現場へ。" />
            <div className="use-case-grid">
              {useCases.map((item) => (
                <article className="use-case-card reveal" key={item.number}>
                  <span className="use-case-number">{item.number}</span>
                  <span className="use-case-icon"><Icon name={item.icon} /></span>
                  <h3>{item.label}</h3>
                  <span className="case-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section workflow-section" id="workflow">
          <div className="container">
            <SectionHeading eyebrow="HOW IT WORKS" title="検査から承認まで、迷わない5ステップ。" text="チームの誰もが同じ流れで品質を確認でき、結果を次の改善へつなげられます。" />
            <div className="workflow">
              {workflow.map((item, index) => (
                <article className="workflow-step reveal" key={item.step}>
                  <div className="step-marker">
                    <span>{item.step}</span>
                    {index < workflow.length - 1 && <i />}
                  </div>
                  <div className="step-content">
                    <small>STEP {item.step}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="workflow-result reveal">
              <span><Icon name="check" /></span>
              <div><small>OUTPUT</small><b>説明可能な品質レポートが完成</b></div>
              <p>検査条件・回答・根拠・リスク・承認者を、ひとつの記録として保存。</p>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <SectionHeading eyebrow="PRICING" title="導入段階に合わせて選べる料金プラン。" text="金額は仮置きです。現時点では、要件や利用規模を確認したうえでのご相談を想定しています。" />
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article className={`pricing-card reveal ${plan.highlighted ? 'pricing-card--featured' : ''}`} key={plan.name}>
                  {plan.highlighted && <span className="plan-badge">おすすめ</span>}
                  <p className="plan-label">{plan.label}</p>
                  <h3>{plan.name}</h3>
                  <p className="plan-price">{plan.price}</p>
                  <p className="plan-description">{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><Icon name="check" /> {feature}</li>
                    ))}
                  </ul>
                  <a className={`button ${plan.highlighted ? 'button--primary' : 'button--plan'}`} href="#final-cta">相談する</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <SectionHeading
              eyebrow="FAQ"
              title="よくある質問"
              text="導入前によく確認されるポイントをまとめました。気になる質問をクリックすると回答を確認できます。"
              align="left"
            />
            <div className="faq-list reveal">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index

                return (
                  <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <i aria-hidden="true" />
                    </button>
                    <div className="faq-answer" id={`faq-answer-${index}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="final-cta" id="final-cta">
          <div className="cta-grid" aria-hidden="true" />
          <div className="container cta-content reveal">
            <span className="cta-mark"><Icon name="shield" /></span>
            <p className="eyebrow">START WITH PROOF GATE</p>
            <h2>AI回答の品質確認を、<br />属人的なチェックから<br className="mobile-only" />再現可能なプロセスへ。</h2>
            <p>まずは、現在の検証フローや課題をお聞かせください。</p>
            <div className="cta-actions">
              <a className="button button--light" href="#workflow">デモを見る <span>→</span></a>
              <button className="button button--ghost" type="button" aria-describedby="form-note">お問い合わせ</button>
            </div>
            <small className="form-note" id="form-note">※ 現在は紹介用サイトのため、フォーム送信機能は実装していません。</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>生成AIの回答品質を、検査・承認・記録する品質管理基盤。</p>
          </div>
          <div className="footer-links">
            <h2>Navigation</h2>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>
          <div className="footer-contact">
            <h2>Contact</h2>
            <p>導入相談・資料確認は、まずはお問い合わせから。</p>
            <a className="footer-contact-link" href="#final-cta">お問い合わせへ進む</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>AI Quality, Verified.</span>
          <small>© 2026 Proof Gate. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}

export default App
