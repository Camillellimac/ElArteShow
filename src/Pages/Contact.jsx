import Footer from "../Components/Footer/Footer";
import ContactForm from "../Components/Form/ContactForm";
import Header from "../Components/Header/Header";
import HomeImgBloc from "../Components/HomeImgs/HomeImgBloc";
import './Contact.scss'

function Contact () {
    return (
        <>
            <Header/>
                <div className="contact-page-container">
                    <div className="text-container">
                        <h3>Your feedback helps us improve</h3>
                        <p>We'd love to hear from you. Send us a message, and we'll get back to you in a resonable timeframe.</p>
                        <div className="support-us-card">
                            <h4>Contribute to our mission</h4>
                            <p>El Arte Show connects people to cultural knowledge from all over the world.</p>
                            <button>Support Us</button>
                        </div>
                    </div>

                    <div className="form-container">
                        <ContactForm/>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Contact;