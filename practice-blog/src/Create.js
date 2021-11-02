import { useState } from "react";
import { useHistory } from "react-router";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setISLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setISLoading(true);
        //console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("blog added");
            setISLoading(false);
            //history.go(-1);
            history.push('/');
        })

    }

    return ( 
    <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label >Blog title:</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
            value={author}
            onChange= {(e) => setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!isLoading &&
                <button>Add Blog</button>
            }
             {isLoading &&
                <button disabled>Adding blog...</button>
            }
        </form>
    </div> );
}
 
export default Create;