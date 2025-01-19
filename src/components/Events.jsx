import React, { useState } from "react";
import EventRegistrationForm from "./EventRegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";

const events = [
  {
    id: 1,
    name: "Concierto de Rock",
    description: "Un concierto de rock con las mejores bandas.",
    date: "2023-11-01",
    imageUrl: "./evento-valentin.png",
  },
  {
    id: 2,
    name: "Feria de Libros",
    description: "Una feria con los mejores libros y autores.",
    date: "2023-11-15",
    imageUrl: "./evento-valentin2.png",
  },
  {
    id: 3,
    name: "Exposición de Arte",
    description: "Una exposición de arte contemporáneo.",
    date: "2023-12-01",
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
