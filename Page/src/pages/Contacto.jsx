import { Link } from 'react-router-dom';

export default function ContactPage() {
  const handleContactClick = () => {
    window.location.href = 'tel:3344268098';
    window.location.href = 'https://api.whatsapp.com/send?phone=3344268098';
  };

  return (
    <div>
      <h1>Contacto</h1>
      <button onClick={handleContactClick}>Contacto</button>
      <p>Para contactarnos, llámennos al número de teléfono 33 4426 8098 o envíanos un mensaje al enlace de WhatsApp <a href="https://api.whatsapp.com/send?phone=3344268098">aquí</a>.</p>
      <img src="https://via.placeholder.com/150" alt="QR del grupo de WhatsApp" />
    </div>
  );
}