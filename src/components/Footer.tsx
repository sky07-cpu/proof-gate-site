import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo" to="/" aria-label="Proof Gate トップへ">
            <span className="logo-mark" aria-hidden="true">PG</span>
            <span>Proof Gate</span>
          </Link>
          <p>生成AI/RAG型チャットボットの回答品質を、検査・承認・記録する品質管理基盤。</p>
        </div>
        <div className="footer-links">
          <h2>Site</h2>
          <Link to="/about">私たちについて</Link>
          <Link to="/features">機能紹介</Link>
          <Link to="/#use-cases">利用シーン</Link>
          <Link to="/#pricing">料金</Link>
          <Link to="/#faq">FAQ</Link>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <p>導入相談、納品前チェック、RAG検証フローの整理など、お気軽にご相談ください。</p>
          <Link className="footer-contact-link" to="/contact">お問い合わせページへ進む</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>AI Quality, Verified.</span>
        <small>© 2026 Proof Gate. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
