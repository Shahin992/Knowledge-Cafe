import Bookmark from "./Bookmark";


const Bookmarks = ({bookmark}) => {
    return (
        <div className='w-1/3 my-10 flex flex-col items-center'>
           
            <h3 className='text-4xl font-bold mb-10'>Bookmarks: {bookmark.length} </h3>
            {
                bookmark.map(bookmark =><Bookmark bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

export default Bookmarks;