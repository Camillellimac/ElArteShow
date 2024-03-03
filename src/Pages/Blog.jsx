import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import './Blog.scss';
import blogImg from '../Assets/img/blogarticle1.png'; 


function Blog () {
    return (
        <>
            <Header/>
                <div className="blog-page-container">
                    <div className="blog-article-container">
                        <article className="blog-article-content">
                            <h3>Title</h3>
                            <p className="blog-intro-p">Intro</p>
                            <img src={blogImg} alt="">
                            </img>
                            <p className="blog-text-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deserunt exercitationem minus tempora rerum cumque iusto architecto officiis, cupiditate, debitis recusandae corporis sequi beatae, quasi nisi delectus porro aspernatur dolorum?</p>
                        </article>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Blog; 