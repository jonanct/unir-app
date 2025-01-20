import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log("Formulario enviado:", this.state);
  }

  componentDidMount() {
    // Simula un efecto secundario, como la validación del formulario
    console.log("El componente ContactForm se ha montado");
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>Contacto</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        <br />
      </div>
    );
  }
}

export default ContactForm;
