import { useState } from "react";
import Blog from "./Blog";
import { useEffect } from "react";


const Blogs = ({bookmarkBtn}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className=' w-2/3 my-10'>
           <h3 className="text-4xl font-bold mb-10">Blogs: {blogs.length}</h3>
           {
           
           blogs.map(blog => <Blog bookmarkBtn ={bookmarkBtn}  blog={blog} key={blog.id}></Blog>)
           }
           
            
        </div>
    );
};

export default Blogs;