import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const reasons = [
  ['AI導入後の説明責任が重くなる', '回答が正しいか、なぜそう判断したかを、顧客や社内に説明する必要があります。'],
  ['確認作業が個人の経験に寄りやすい', '担当者の勘や努力だけでは、リリース前後の品質を安定して保ちにくくなります。'],
  ['検証記録が残らないと改善できない', 'どのテストで何が起きたかを残すことで、AIの改善点をチームで共有できます。'],
]

const teams = ['AI導入ベンダー', '社内AI推進チーム', 'カスタマーサポート部門', 'RAG型FAQを運用する企業', '品質保証・監査部門', '生成AI活用を広げたい事業部門']

function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="animated-grid" aria-hidden="true" />
        <div className="container page-hero-inner reveal">
          <p className="eyebrow">ABOUT PROOF GATE</p>
          <h1>AI回答品質を、説明できる運用プロセスへ。</h1>
          <p>
            Proof Gateは、生成AI/RAG型チャットボットの回答品質をテストケースで検査し、
            人間が承認し、監査証跡として残すための品質管理基盤です。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="MISSION"
            title="AI回答の品質確認を、属人的な作業から再現可能なプロセスへ。"
            text="AIを導入するだけでなく、安心して運用し続けるための品質確認の型をつくります。"
            align="left"
          />
          <div className="mission-card reveal">
            <span>Mission statement</span>
            <p>
              Proof Gateが目指すのは、AIの判断をブラックボックスのまま受け入れる世界ではありません。
              人間が確認し、根拠を見て、リスクを判断し、その判断を後から説明できる状態をつくることです。
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="WHY IT MATTERS" title="なぜ今、AI品質管理が必要なのか。" />
          <div className="card-grid card-grid--three">
            {reasons.map(([title, text]) => (
              <article className="content-card reveal" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FOR TEAMS" title="このような企業・チームに向いています。" text="AIの回答品質を社内外に説明する必要があるチームに向いています。" />
          <div className="tag-cloud reveal">
            {teams.map((team) => (
              <span key={team}>{team}</span>
            ))}
          </div>
          <div className="page-cta reveal">
            <h2>Proof Gateの機能を詳しく見てみますか？</h2>
            <Link className="button button--primary" to="/features">機能紹介へ</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
