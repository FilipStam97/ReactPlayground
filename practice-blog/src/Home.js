import { useState, useEffect } from "react";
import BLogList from "./BlogList";
import useFetch from "./useFetch";




const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

   
    return (
      <div className="home">
       {error && <div> {error} </div>}   
       {isLoading && <div>Loading...</div>}
       {blogs && 
       <BLogList blogs={blogs} title="All Blogs!" />
       }
        {/* <BLogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}
      </div>
    );
}
 
export default Home;