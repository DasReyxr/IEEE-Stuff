import { useId, useState } from 'react';
import ieeeLogo from '../assets/IEEELogo.png';

const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Que hay de nuevo', href: '#noticias' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Convocatorias', href: '#convocatorias' },
  { label: 'Contacto', href: '#contacto' },
];

export default function BrandNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  function onNavClick() {
    setOpen(false);
  }

  return (
    <div className="brandbar">
      <div className="container brandbar-inner">
        <a className="brand" href="#inicio" onClick={onNavClick}>
          <img className="brand-logo" src={ieeeLogo} alt="Logo IEEE" />
          <div>
            <div className="brand-title">IEEE UAA</div>
            <div className="brand-sub">Rama Estudiantil</div>
          </div>
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Menu
        </button>

        <nav
          id={menuId}
          className={open ? 'brandnav open' : 'brandnav'}
          aria-label="Navegacion principal"
          onClick={onNavClick}
        >
          {NAV.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
