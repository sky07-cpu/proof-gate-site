import SectionHeading from '../components/SectionHeading'

function Contact() {
  return (
    <main>
      <section className="page-hero page-hero--contact">
        <div className="animated-grid" aria-hidden="true" />
        <div className="container page-hero-inner reveal">
          <p className="eyebrow">CONTACT</p>
          <h1>AI回答品質の確認フローについて相談する。</h1>
          <p>導入前チェック、RAG検証、レポート化、監査証跡の残し方など、まずは相談内容を整理する入口です。</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <SectionHeading
            eyebrow="DEMO FORM"
            title="お問い合わせ"
            text="現在はデモ表示です。入力内容の送信処理はまだ実装していません。"
            align="left"
          />

          <div className="contact-card reveal" aria-label="お問い合わせフォーム風UI">
            <label>
              <span>名前</span>
              <input type="text" placeholder="山田 太郎" />
            </label>
            <label>
              <span>会社名</span>
              <input type="text" placeholder="株式会社サンプル" />
            </label>
            <label>
              <span>メールアドレス</span>
              <input type="email" placeholder="sample@example.com" />
            </label>
            <label>
              <span>相談内容</span>
              <textarea placeholder="RAG型FAQのリリース前検証について相談したいです。" rows={6} />
            </label>
            <button className="button button--primary" type="button">送信する</button>
            <p className="demo-note">※ 現在はデモ表示です。ボタンを押しても送信処理は行われません。</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
