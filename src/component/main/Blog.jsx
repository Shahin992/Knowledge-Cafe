import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,bookmarkBtn}) => {
    const {title,cover,author_img,author,posted_date,reading_time} = blog; 
   
    return (
        <div className='mb-10'>
           <img className="w-full mb-5 rounded-xl" src={cover} alt="" />
                <div className="flex gap-10 items-center justify-between">
                    <div className="flex gap-10 items-center">
                        <img className="h-20" src={author_img} alt="" />
                        <div>
                            <h4 className="text-4xl font-semibold">{author}</h4>
                            <p>{posted_date}</p>
                        </div>
                    </div>
               
                    
                    <div className="flex gap-4">
                    <p><small className="text-2xl font-semibold">{reading_time} min read</small></p>
                    <button onClick={()=>bookmarkBtn(blog)} className='text-3xl'><FaBookmark></FaBookmark></button>
                    </div>
                    
                </div>
           <h3 className="mb-16 text-4xl font-bold"> {title}</h3>
            
        </div>
    );
};

export default Blog;