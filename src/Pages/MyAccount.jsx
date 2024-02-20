import './MyAccount.scss';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SignInForm from "../Components/Form/SignInForm";

function MyAccount () {
    return (
        <>
            <Header/>   

                <div className="myAccountPage-container">
                    <div className="form-container">
                        <SignInForm/>
                    </div>
                    <div className="element-separator"></div>
                    <div className="quote-container">
                        <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. "</p>   
                    </div>
                </div>   

            <Footer/>
        </>
    )
}

export default MyAccount; 