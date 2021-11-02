import { Link } from "react-router-dom";

const BLogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // destructured in the function argument insted of props 
 
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BLogList;