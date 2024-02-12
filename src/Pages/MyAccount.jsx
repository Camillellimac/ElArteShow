import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SignInForm from "../Components/Form/SignInForm";

function MyAccount () {
    return (
        <>
            <Header/>            
                <h3>My Account</h3>
                <SignInForm/>
            <Footer/>
        </>
    )
}

export default MyAccount; 