import Checkbox from "../Components/Checkbox/Checkbox";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import './Collection.scss'


function Collection () {
    return (
        <>
            <Header/>

                <div className="collection-page-container">

                    <div className="collection-text-container">
                        <h3>Check our insanes collections</h3>
                        <p>We'd love to hear from you. Send us a message, and we'll get back to you in a resonable timeframe.</p>
                    </div>

                    <div className="collection-card-buttons">
                        <div className="buttons-card">
                            <h4>All collections</h4>
                            <button>Year</button>
                            <p>by</p>
                            <button>Theme</button>
                        </div>
                    </div>
                </div>

              

                <div className="collection-item-container">
                    <div className="checkbox-left">
                        <Checkbox/>
                    </div>

                    <div className="card-items-right">
                        
                    </div>
                </div>

            <Footer/>
        </>
    )
}

export default Collection;