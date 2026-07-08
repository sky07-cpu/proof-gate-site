import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const pageLinks = [
  { to: '/about', label: '私たちについて' },
  { to: '/features', label: '機能' },
  { to: '/#use-cases', label: '利用シーン' },
  { to: '/#pricing', label: '料金' },
  { to: '/#faq', label: 'FAQ' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <div className="container header-inner">
        <Link className="logo" to="/" aria-label="Proof Gate トップへ" onClick={closeMenu}>
          <span className="logo-mark" aria-hidden="true">PG</span>
          <span>Proof Gate</span>
        </Link>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {pageLinks.map((item) => (
            <NavLink
              to={item.to}
              key={item.to}
              className={({ isActive }) => (isActive && !item.to.includes('#') ? 'is-active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="button button--small button--outline" to="/features#reports">資料ダウンロード</Link>
          <Link className="button button--small button--primary" to="/contact">お問い合わせ</Link>
        </div>

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
        {pageLinks.map((item) => (
          <Link to={item.to} key={item.to} onClick={closeMenu}>{item.label}</Link>
        ))}
        <Link to="/features#reports" onClick={closeMenu}>資料ダウンロード</Link>
        <Link to="/contact" onClick={closeMenu}>お問い合わせ</Link>
      </nav>
    </header>
  )
}

export default Header
