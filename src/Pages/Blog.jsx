import React from 'react';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import './Blog.scss';
import BlogContent from "../Components/BlogContent/BlogContent"; 

function Blog() {
    const { blogImg, blogText } = BlogContent;
    const blogTextArray = Object.values(blogText);

    return (
        <>
            <Header />
            <div className="blog-page-container">
                {blogTextArray.map((article, index) => (
                    <div className="blog-article-container" key={index}>
                        <article className="blog-article-content">
                            <h3>{article.title}</h3>
                            <p className="blog-date">{article.date}</p>
                            <img src={blogImg.blogImgContent[index].src} alt={blogImg.blogImgContent[index].alt} />
                            <p className="blog-text-content">{article.textContent1}</p>
                            <p className="blog-text-content">{article.textContent2}</p>
                            <p className="blog-text-content">{article.textContent3}</p>
                        </article>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Blog;
