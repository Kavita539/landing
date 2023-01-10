import "./blogCard.css";

const BlogCard = ({img, title, content}) => {
    return(
        <div className="blog-card" style={{backgroundImage: `url(${img})`}}>
            <div className="blog-content">
                <h5 className="blog-title">{title}</h5>
                <p className="blog-desc">{content}</p>
            </div>
        </div>
    )
}

export {BlogCard};