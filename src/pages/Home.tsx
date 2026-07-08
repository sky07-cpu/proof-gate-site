import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import SectionHeading from '../components/SectionHeading'

const targets = [
  ['AI導入ベンダー', '納品前の回答品質チェックを標準化し、顧客へ説明できるレポートを残せます。'],
  ['社内AI推進チーム', 'PoCから本番運用まで、AI回答の品質基準をチームで共有できます。'],
  ['カスタマーサポート部門', '顧客対応AIが危険な回答をしないか、公開前に確認できます。'],
  ['RAG型FAQを運用する企業', 'FAQ更新後の回答変化を検査し、継続的な改善につなげられます。'],
]

const challenges = [
  ['確認作業が属人化', 'AI導入後、回答が正しいか確認する作業が、特定の担当者に集中してしまう。'],
  ['危険な回答を見逃す', '根拠のない回答や、業務上のリスクにつながる回答を見逃す可能性がある。'],
  ['説明できる記録が残らない', '顧客や社内に、何を・どのように検証したのかを示す記録が残りにくい。'],
  ['品質基準が揺らぐ', 'リリース前の品質確認が、担当者ごとの経験や感覚に依存しやすい。'],
]

const solutions = [
  ['テストケース生成', '検証観点を整理し、再利用できるテストケースを準備。'],
  ['回答と根拠の検査', '回答内容と参照根拠を並べ、妥当性を確認。'],
  ['リスク判定', '誤情報や不適切表現など、注意すべき回答を可視化。'],
  ['人間による承認', '最後は人間が判断し、承認結果を明確に記録。'],
  ['レポート出力', '検査結果を、共有・説明に使える形でまとめる。'],
  ['監査証跡の保存', '誰がいつ確認したかを、追跡可能な履歴として残す。'],
]

const featureDigest = [
  ['Test cases', '質問・期待回答・評価観点を管理'],
  ['Evidence check', '回答と参照根拠の整合性を確認'],
  ['Approval log', '承認者・日時・判定を記録'],
]

const workflow = [
  ['01', 'テストケースを作成', '期待する回答と確認観点を定義'],
  ['02', 'AIに回答させる', '実環境に近い条件で一括実行'],
  ['03', '回答・根拠・リスクを検査', '複数の観点から品質を評価'],
  ['04', '人間が承認', '結果を確認し、判断を記録'],
  ['05', 'レポートとして出力', '共有できる監査証跡を作成'],
]

const faqs = [
  {
    question: 'Proof Gateは何をするサービスですか？',
    answer: '生成AIやRAG型チャットボットの回答品質を、テストケースで検査し、人間が承認し、その記録をレポートとして残す品質管理基盤です。',
  },
  {
    question: 'RAG型AI以外にも使えますか？',
    answer: 'はい。FAQ、社内ナレッジ検索、顧客対応AIなど、回答内容の正しさや説明責任が重要なAIであれば活用できます。',
  },
  {
    question: 'ログインやデータベースは今ありますか？',
    answer: '現在は静的な紹介サイトです。ログイン、データベース、API連携、問い合わせ送信処理はまだ実装していません。',
  },
  {
    question: '導入ベンダー向けですか？',
    answer: '導入ベンダーにも向いています。納品前チェック、顧客への説明資料、品質確認プロセスの標準化に使える想定です。',
  },
  {
    question: 'レポートは何に使えますか？',
    answer: '社内レビュー、リリース判定、顧客説明、監査対応、改善履歴の共有など、AI回答品質を説明する場面で使えます。',
  },
]

function Home() {
  return (
    <main>
      <section className="hero hero--animated" id="top">
        <div className="animated-grid" aria-hidden="true" />
        <div className="orb orb--one" aria-hidden="true" />
        <div className="orb orb--two" aria-hidden="true" />
        <div className="data-card data-card--risk" aria-hidden="true">
          <span>Risk scan</span>
          <strong>0 critical</strong>
        </div>
        <div className="data-card data-card--audit" aria-hidden="true">
          <span>Audit trail</span>
          <strong>Saved</strong>
        </div>

        <div className="container hero-layout">
          <div className="hero-copy reveal">
            <div className="hero-badge"><span /> AI Quality Assurance Platform</div>
            <h1>生成AIの回答品質を、<br /><em>検査・承認・記録</em>する。</h1>
            <p className="hero-text">
              RAG型AIの回答をテストケースで検証し、人間の承認と監査証跡を残す。
              Proof Gateは、AI品質確認を属人的な作業から再現可能なプロセスへ変えます。
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/contact">お問い合わせ <span>→</span></Link>
              <Link className="button button--secondary" to="/features">機能を見る</Link>
            </div>
            <div className="hero-assurances">
              <span>テストケースで再現</span>
              <span>人間が最終承認</span>
              <span>証跡をレポート化</span>
            </div>
          </div>

          <div className="product-visual reveal" aria-label="Proof Gateの検査画面イメージ">
            <div className="dashboard">
              <div className="dashboard-top">
                <span>Verification Report</span>
                <span>PG-2026-031</span>
              </div>
              <div className="dashboard-content">
                <div className="report-heading">
                  <div><small>RELEASE CHECK</small><strong>回答品質レポート</strong></div>
                  <span className="approved">承認済み</span>
                </div>
                <div className="score-row">
                  <div className="score-card main-score"><strong>94</strong><span>総合スコア</span></div>
                  <div className="score-card"><strong>98%</strong><span>根拠整合性</span></div>
                  <div className="score-card"><strong>96%</strong><span>安全性</span></div>
                </div>
                <div className="test-table">
                  {['返品ポリシーについて', '契約条件の確認', '個人情報の取り扱い'].map((item, index) => (
                    <div className="table-row" key={item}>
                      <span>{item}</span>
                      <span className="pass">Pass</span>
                      <span className={index === 1 ? 'risk-low' : 'risk-none'}>{index === 1 ? 'Low' : 'None'}</span>
                    </div>
                  ))}
                </div>
                <div className="approval-line">
                  <span className="avatar">QA</span>
                  <p><b>品質管理チームが承認</b><small>2026.07.08 14:32</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section targets" id="targets">
        <div className="container">
          <SectionHeading eyebrow="WHO IT'S FOR" title="AI回答品質を説明する責任があるチームへ。" text="Proof Gateは、AIを作る側・運用する側・顧客対応に使う側の品質確認を支えます。" />
          <div className="card-grid card-grid--four">
            {targets.map(([title, text]) => (
              <article className="content-card reveal" key={title}>
                <span className="card-kicker">Target</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section challenges" id="challenges">
        <div className="container">
          <SectionHeading eyebrow="THE CHALLENGE" title="その品質確認、担当者の経験だけに頼っていませんか？" text="生成AIの活用が広がるほど、回答品質を継続的に管理する仕組みが必要になります。" />
          <div className="card-grid card-grid--four">
            {challenges.map(([title, text], index) => (
              <article className="content-card content-card--lined reveal" key={title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions" id="solutions">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="THE SOLUTION"
            title="品質確認のプロセスを、ひとつの場所に。"
            text="検査から承認、レポート作成までを一貫したプロセスに整えます。"
            align="left"
          />
          <div className="solution-grid">
            {solutions.map(([title, text]) => (
              <article className="solution-card reveal" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-digest" id="features">
        <div className="container">
          <SectionHeading eyebrow="FEATURE DIGEST" title="機能の全体像を、すばやく把握。" text="詳細は機能紹介ページで確認できます。" />
          <div className="digest-panel reveal">
            {featureDigest.map(([title, text]) => (
              <div className="digest-item" key={title}>
                <span>{title}</span>
                <strong>{text}</strong>
              </div>
            ))}
            <Link className="button button--primary" to="/features">機能を詳しく見る</Link>
          </div>
        </div>
      </section>

      <section className="section use-cases" id="use-cases">
        <div className="container">
          <SectionHeading eyebrow="USE CASES" title="AIの品質を説明する、あらゆる現場へ。" />
          <div className="card-grid card-grid--four">
            {['RAG型FAQチャットボット', '社内ナレッジ検索AI', '顧客対応AIのリリース前検証', 'AI導入ベンダーの納品前チェック'].map((item) => (
              <article className="use-case-card reveal" key={item}>
                <h3>{item}</h3>
                <span>↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow-section" id="workflow">
        <div className="container">
          <SectionHeading eyebrow="HOW IT WORKS" title="検査から承認まで、迷わない5ステップ。" text="チームの誰もが同じ流れで品質を確認でき、結果を次の改善へつなげられます。" />
          <div className="workflow">
            {workflow.map(([step, title, text]) => (
              <article className="workflow-step reveal" key={step}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <SectionHeading eyebrow="PRICING" title="導入段階に合わせて選べる料金プラン。" text="金額は仮置きです。現時点では、要件や利用規模を確認したうえでのご相談を想定しています。" />
          <div className="pricing-grid">
            {['Starter', 'Team', 'Enterprise'].map((plan, index) => (
              <article className={`pricing-card reveal ${index === 1 ? 'pricing-card--featured' : ''}`} key={plan}>
                {index === 1 && <span className="plan-badge">おすすめ</span>}
                <h3>{plan}</h3>
                <p className="plan-price">お問い合わせ</p>
                <p className="plan-description">AI品質確認の運用段階に合わせて、必要な機能と支援範囲を相談できます。</p>
                <Link className="button button--plan" to="/contact">相談する</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <SectionHeading eyebrow="FAQ" title="よくある質問" text="導入前によく確認されるポイントをまとめました。" align="left" />
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-grid" aria-hidden="true" />
        <div className="container cta-content reveal">
          <p className="eyebrow">START WITH PROOF GATE</p>
          <h2>AI回答の品質確認を、属人的なチェックから再現可能なプロセスへ。</h2>
          <p>まずは、現在の検証フローや課題をお聞かせください。</p>
          <div className="cta-actions">
            <Link className="button button--light" to="/contact">お問い合わせ</Link>
            <Link className="button button--ghost" to="/about">Proof Gateについて</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
