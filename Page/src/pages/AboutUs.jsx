import { useState } from 'react';
import TopBar from '../components/TopBar';
import ActualComitee from '../assets/TP_26_5.jpg';

const GROUP_LINK = 'https://chat.whatsapp.com/GVwpX1jETZqDrAKo1oA0mh';
const IG_LINK = 'https://www.instagram.com/ieee_uaa.ags/';
const PROTESTA_TEXT = 'La toma de protesta se realizo el 20 de abril de 2026.';

export default function ContactPage() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <TopBar />
      <main className="page">
        <section className="detail">
          <div className="container detail-text">
            <h1 className="detail-title">Contacto</h1>
                    Únete a la comunidad y mantente al tanto de las actividades de IEEE UAA.
            <div className="detail-actions">
              <a
                className="btn ghost"
                href={GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Unirme al grupo
              </a>
              <a
                className="btn ghost"
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuestro instagram
              </a>
            </div>
            <h1 className="detail-title">Acerca de nosotros</h1>
            
            <p className="detail-lead">La actual mesa directiva está compuesta por:</p>
            <ul>
              <li>Presidenta: Sara Fernández Muñoz</li>
              <li>Vicepresidente: Orlando Contreras Reyes</li>
              <li>Tesorero: Kevin Adrián Lara Hernández</li>
              <li>Secretaria: Ilse Daniela Saldívar Olvera</li>
              <li>Webmaster: Óscar Gutiérrez Gutiérrez</li>
            </ul>
            <p className="detail-lead">(Toma de protesta realizada el 11 de Mayo de 2026) </p>




        
            <figure className="article-figure">
              <img src={ActualComitee} alt="QR para unirse al grupo de WhatsApp" />
              <figcaption className="article-caption">
                Mesa directiva 2026.
              </figcaption>
            </figure>

            
          </div>
        </section>
      </main>
    </div>
  );
}