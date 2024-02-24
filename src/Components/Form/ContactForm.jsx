import { useState } from "react";
import './ContactForm.scss'

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData) // A REMPLACER PAR UNE LOGIQUE D'ENVOI DE FORMULAIRE REELLE EN UTILISANT fetch POUR ENVOYER LES DONNEES A UN SERVEUR 
    }

    return (
        <form onSubmit={handleSubmit} 
        className="contact-form">

            <div>
                <label htmlFor="name">Name</label>
                <input
                 type="text"
                 id="name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 style={{
                    borderRadius: "15px",
                    width: "350px"
                }}
                 placeholder="Enter your name"/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 style={{
                    width: "350px",
                    borderRadius: "15px"}}
                 placeholder="Enter your mail"/>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <input
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 style={{
                    width: "350px", 
                    height: "130px",
                    borderRadius: "15px",
                    textAlign: "left",
                    verticalAlign: "top"}}
                 placeholder="Type your message"/>
            </div>

            <button type="submit" style={{
                backgroundColor: "rgba(0, 0, 0, 0.896)",
                width: "18vw",
                height: "6vh",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
            }}>Send Message</button>

        </form>
    )
}

export default ContactForm; 