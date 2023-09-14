

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="ml-10 bg-gray-300 p-5">
           <div className= "bg-white rounded-xl p-4  gap-y-5">
           <h3 className="text-2xl ml-7 font-semibold ">{title}</h3>
           </div>
            
        </div>
    );
};

export default Bookmark;