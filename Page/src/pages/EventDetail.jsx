import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TopBar from '../components/TopBar';
import { loadEvents } from '../utils/eventsLoader';

export default function EventDetail() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    loadEvents().then((events) => {
      if (!active) {
        return;
      }

      setEvent(events.find((item) => item.slug === slug) || null);
      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <div>
      <TopBar />
      {loading ? (
        <main className="page">
          <section className="detail">
            <div className="container detail-text">
              <h1 className="detail-title">Cargando evento...</h1>
              <p className="detail-lead">Estamos preparando la pagina.</p>
            </div>
          </section>
        </main>
      ) : !event ? (
        <main className="page">
          <section className="detail">
            <div className="container detail-text">
              <h1 className="detail-title">Evento no encontrado</h1>
              <p className="detail-lead">No existe una noticia con ese enlace.</p>
              <Link className="btn ghost" to="/">
                Volver al inicio
              </Link>
            </div>
          </section>
        </main>
      ) : (
        <main className="article-page">
          <article className="article-card">
            <header className="article-header">
              <div className="article-meta">
                <span className="pill">{event.category}</span>
                <span>{event.date}</span>
                {event.location ? <span>{event.location}</span> : null}
                {event.time ? <span>{event.time}</span> : null}
              </div>
              <h1 className="article-title">{event.title}</h1>
              {event.subtitle ? (
                <p className="article-subtitle">{event.subtitle}</p>
              ) : null}
            </header>

            <figure className="article-figure">
              <img src={event.imageSrc} alt={event.imageAlt || event.title} />
              {event.imageLabel ? (
                <figcaption className="article-caption">{event.imageLabel}</figcaption>
              ) : null}
            </figure>

            <section className="article-body">
              {event.body ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{event.body}</ReactMarkdown>
              ) : null}

              {!event.body && event.details?.length ? (
                <ul className="detail-list">
                  {event.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>

            <footer className="article-footer">
              {event.ctaHref ? (
                <a className="btn primary" href={event.ctaHref}>
                  {event.ctaLabel || 'Registro'}
                </a>
              ) : null}
              <Link className="btn ghost" to="/">
                Volver al inicio
              </Link>
            </footer>
          </article>
        </main>
      )}
    </div>
  );
}
