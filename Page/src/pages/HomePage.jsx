import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import TopBar from '../components/TopBar';
import NewsGrid from '../components/NewsGrid';
import { placeholderDataUrl } from '../utils/placeholders';
import { loadEvents } from '../utils/eventsLoader';

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let active = true;

    loadEvents().then((data) => {
      if (active) {
        setEvents(data);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const { featured, rest } = useMemo(() => {
    return {
      featured: events[0],
      rest: events.slice(1),
    };
  }, [events]);

  return (
    <div>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <TopBar />

      <div id="contenido">
        <main className="page">
          <section className="hero">
            <div className="container">
              <h1 className="section-title">¿Qué hay de nuevo?</h1>
              <p className="lead">
                Seccion para centralizar anuncios y materiales recientes. El QR dirige
                a esta pagina para mantener el historico de novedades.
              </p>

              {!featured ? (
                <p className="lead">Cargando eventos...</p>
              ) : (
                <article className="featured">
                  <div className="featured-card">
                    <div className="featured-media">
                      <img
                        src={featured.imageSrc || placeholderDataUrl(featured.title, featured.accent)}
                        alt={featured.imageAlt}
                      />
                      {featured.imageLabel ? (
                        <span className="media-label">{featured.imageLabel}</span>
                      ) : null}
                    </div>
                    <div className="featured-body">
                      <div className="meta">
                        <span className="dot" aria-hidden="true" />
                        <span className="pill">{featured.category}</span>
                        <span className="date">{featured.date}</span>
                        <span className="date">{featured.done ? 'Realizado' : 'Por venir'  }</span>
                      </div>
                      <h2 className="featured-title">{featured.title}</h2>
                      <p className="featured-lead">{featured.excerpt}</p>
                      <div className="detail-actions">
                        <a className="btn primary"  href={featured.registerLink}  target="_blank"  rel="noopener noreferrer">
                        {featured.done ? 'Quiero registrarme' : '¿Cómo te pareció?'}
                        </a>
                        <Link className="btn primary" to={`/${featured.slug}`}>
                          Leer mas
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </section>

          <section className="news-section" id="noticias">
            <div className="container">
              <h2 className="section-title">Mas eventos</h2>
              <NewsGrid events={rest} />
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <div>auf Das.</div>
          <div>
            <a href="#aviso">Aviso</a> · <a href="#privacidad">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
