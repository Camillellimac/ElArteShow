import './HomeTextBloc.scss';
import '../Buttons/Buttons.scss';
import textContent from './HomeTextContent';

function HomeTextBloc ({contentSubject}) {
    const { title, paragraph1, paragraph2, paragraph3, button} = textContent[contentSubject]
    return (

    <div className="txt-container-home">
        {title && <h2>{title}</h2>}

        <div className="paragraph-style">
            {paragraph1 && <p>{paragraph1}</p>}

            <div className="paragraph-style-below">

                {paragraph2 && <p>{paragraph2}</p>}
                {paragraph3 && <p>{paragraph3}</p>}

                {button && <div className="button-style--home">
                {button}
                </div>}
            
            </div>
        </div>
    </div>

    )
}

export default HomeTextBloc; 