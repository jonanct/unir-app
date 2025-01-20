import React, { useState } from "react";
import EventRegistrationForm from "./EventRegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";

const events = [
  {
    id: 1,
    name: "Ven y pinta a tu ser amado",
    description: "Ven y pinta a tu ser amado en este día especial.",
    date: "2025-02-16",
    imageUrl: "./evento-valentin.png",
  },
  {
    id: 2,
    name: "Celebra San Valentín pintando",
    description: "Celebra con nosotros el día de San Valentín pintando.",
    date: "2025-02-14",
    imageUrl: "./evento-valentin2.png",
  },
  {
    id: 3,
    name: "Experiencia navideña",
    description: "Pinta tu navidad en un lienzo.",
    date: "2024-12-15",
    imageUrl: "./evento-navidad.png",
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleRegisterClick(event) {
    setSelectedEvent(event);
  }

  function handleCloseForm() {
    setSelectedEvent(null);
  }

  function renderEventCard(event) {
    return (
      <div key={event.id} className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <img
              src={event.imageUrl}
              className="events__item-image"
              alt={event.name}
            />
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">{event.description}</p>
            <p className="card-text">{event.date}</p>
            <button
              className="btn btn-primary"
              onClick={function () {
                handleRegisterClick(event);
              }}
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="events">Próximos Eventos</h2>
      <div className="row">
        {events.map(function (event) {
          return renderEventCard(event);
        })}
      </div>
      {selectedEvent && (
        <EventRegistrationForm
          event={selectedEvent}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}
