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
              <div className="intro-grid">
                <div>
                  <h1 className="section-title">¿Qué hay de nuevo?</h1>
                  <p className="lead">
                    ¡Hola! Bienvenido a la página oficial de la Rama Estudiantil IEEE UAA. Aquí encontrarás las últimas noticias, eventos y recursos relacionados con nuestra comunidad estudiantil. 
                    La página aún sigue en desarrollo, por lo que es posible que encuentres algunos detalles sin pulir o información faltante. Estamos trabajando para mejorar la experiencia y ofrecerte el mejor contenido posible. ¡Gracias por tu comprensión y apoyo!
                  </p>
                </div>

                <div>
                  <h1 className="section-title">¿Quienes somos?</h1>
                  <p className="lead">
                    Somos la Rama Estudiantil IEEE UAA, un grupo de estudiantes apasionados por la tecnología y la innovación. Nuestra misión es fomentar el desarrollo profesional y personal de nuestros miembros a través de actividades, eventos y proyectos relacionados con la ingeniería electrónica, sistemas, computación y áreas afines. Nos esforzamos por crear una comunidad inclusiva y colaborativa donde los estudiantes puedan aprender, compartir conocimientos y crecer juntos en el mundo de la tecnología.
                  </p>
                </div>
              </div>
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
                        <span className="date">{featured.done === 'True'? 'Realizado' : 'Por venir'  }</span>
                      </div>
                      <h2 className="featured-title">{featured.title}</h2>
                      <p className="featured-lead">{featured.excerpt}</p>
                      <div className="detail-actions">
                        <a className="btn primary"  href={featured.registerLink}  target="_blank"  rel="noopener noreferrer">
                        {featured.done === 'True'? '¿Cómo te pareció?' : 'Quiero registrarme'}
                        </a>
                        <Link className="btn ghost" to={`/${featured.slug}`}>
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
