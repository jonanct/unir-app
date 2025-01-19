import React from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  { text: "Este es el mejor producto que he comprado!", author: "Juan Pérez" },
  { text: "Excelente servicio y calidad.", author: "María García" },
  { text: "Recomiendo este producto a todos.", author: "Carlos López" },
];

export default function Testimonials() {
  function renderTestimonial(testimonial, index) {
    return <Testimonial key={index} testimonial={testimonial} />;
  }

  return (
    <div className="testimonials">
      <h2 className="testimonial__h2">Testimonios</h2>
      {testimonials.map(renderTestimonial)}
    </div>
  );
}
