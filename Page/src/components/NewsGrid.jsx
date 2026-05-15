import { Link } from 'react-router-dom';
import { placeholderDataUrl } from '../utils/placeholders';

export default function NewsGrid({ events }) {
  if (!events?.length) {
    return null;
  }

  return (
    <div className="news-grid">
      {events.map((event) => (
        <article key={event.slug} className="card" style={{ '--accent': event.accent }}>
          <Link to={`/noticias/${event.slug}`} aria-label={event.title}>
            <div className="card-media">
              <img
                src={event.imageSrc || placeholderDataUrl(event.title, event.accent)}
                alt={event.imageAlt || event.title}
              />
              {event.imageLabel ? (
                <span className="media-label">{event.imageLabel}</span>
              ) : null}
            </div>
            <div className="card-body">
              <div className="meta">
                <span className="dot" aria-hidden="true" />
                <span className="pill">{event.category}</span>
                <span className="date">{event.date}</span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.excerpt}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
