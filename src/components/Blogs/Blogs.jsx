import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    // Blogs State 
    const [blogs, setBlogs] = useState([])

    // Load data from api 
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3 border">
            <h2>{blogs.length}</h2>
        </div>
    );
};

export default Blogs;