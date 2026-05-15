import eventsFile from '../content/events/events.md';
import ev1 from '../assets/AI_Flyer.png';
import tp2 from '../assets/TP_2.jpg';
import { placeholderDataUrl } from './placeholders';

const IMAGE_MAP = {
  'AI_Flyer.png': ev1,
  'TP_2.jpg': tp2,
};

let cachedEvents = null;
let pending = null;

function parseEvents(text) {
  const chunks = text
    .split('<!-- EVENT -->')
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  return chunks
    .map((chunk) => {
      const { data, content } = parseFrontmatter(chunk);
      return {
        ...data,
        body: content.trim(),
      };
    })
    .filter((event) => event.slug);
}

function parseFrontmatter(chunk) {
  const match = chunk.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: chunk };
  }

  const raw = match[1];
  const content = match[2] || '';
  const data = {};

  raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const idx = line.indexOf(':');
      if (idx === -1) {
        return;
      }

      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      data[key] = value;
    });

  return { data, content };
}

export async function loadEvents() {
  if (cachedEvents) {
    return cachedEvents;
  }

  if (pending) {
    return pending;
  }

  pending = fetch(eventsFile)
    .then((response) => response.text())
    .then((text) => {
      const events = parseEvents(text)
        .map((event) => ({
          ...event,
          imageSrc: IMAGE_MAP[event.image] || placeholderDataUrl(event.title, event.accent),
        }))
        .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));

      cachedEvents = events;
      pending = null;
      return events;
    });

  return pending;
}
