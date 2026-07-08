import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const features = [
  {
    title: 'テストケース管理',
    text: '質問、期待回答、評価観点、対象ドキュメントを整理し、リリース前後で繰り返し使える検証セットを作ります。',
  },
  {
    title: '回答と根拠の検査',
    text: 'AIの回答と参照根拠を並べて確認し、RAGの根拠不足・矛盾・曖昧な参照を見つけやすくします。',
  },
  {
    title: 'リスク判定',
    text: '誤情報、断定表現、個人情報、禁止表現、法務・医療・金融などの高リスク領域を整理して確認します。',
  },
  {
    title: '人間承認',
    text: '最終判断を人間が行い、承認・差し戻し・コメントを品質記録として残します。',
  },
  {
    title: 'レポート出力',
    text: '検証結果を、社内レビュー、顧客説明、納品前チェックに使えるレポートとしてまとめます。',
  },
  {
    title: '監査ログ',
    text: '検査日時、判定、承認者、変更履歴を後から追える証跡として保存する想定です。',
  },
  {
    title: '将来的なAPI連携',
    text: '将来的にはチャットボット、RAG基盤、社内ワークフロー、CI/CDとの連携を想定しています。',
  },
]

function Features() {
  return (
    <main>
      <section className="page-hero page-hero--features">
        <div className="animated-grid" aria-hidden="true" />
        <div className="container page-hero-inner reveal">
          <p className="eyebrow">FEATURES</p>
          <h1>検査・承認・記録を、AI品質管理の標準フローに。</h1>
          <p>テストケース管理から監査ログまで、RAG型AIの品質を説明するための機能を整理しています。</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="CORE FEATURES" title="Proof Gateの主要機能" text="現在は静的サイトでの紹介ですが、将来のWebアプリ化を見据えた機能単位で整理しています。" />
          <div className="feature-list">
            {features.map((feature, index) => (
              <article className="feature-row reveal" key={feature.title} id={feature.title === 'レポート出力' ? 'reports' : undefined}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="FUTURE"
            title="将来的には、AI運用フローの中に自然に組み込む。"
            text="今は紹介用サイトですが、将来的にはAPI連携やログ保存、承認フローなどを段階的にWebアプリ化できます。"
            align="left"
          />
          <div className="roadmap-card reveal">
            <h3>想定される拡張</h3>
            <ul>
              <li>チャットボットから回答結果を取り込む</li>
              <li>検証結果をDBに保存する</li>
              <li>承認ワークフローをチームで回す</li>
              <li>レポートをPDFや管理画面で共有する</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-grid" aria-hidden="true" />
        <div className="container cta-content reveal">
          <p className="eyebrow">NEXT STEP</p>
          <h2>現在のAI検証フローを、機能要件に落とし込みましょう。</h2>
          <p>どの検査・承認・記録から始めるべきか、一緒に整理できます。</p>
          <Link className="button button--light" to="/contact">お問い合わせ</Link>
        </div>
      </section>
    </main>
  )
}

export default Features
