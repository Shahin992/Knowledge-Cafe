
import { useState } from 'react'
import './App.css'
import Header from './component/header/header'
import Blogs from './component/main/blogs'
import Bookmarks from './component/main/Bookmark/Bookmarks'

function App() {

  const [bookmark,setBookmark] = useState([])

  const bookmarkBtn = blog =>{
    const newBookmarks = [...bookmark,blog]
    setBookmark(newBookmarks)
    
  }
  

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
        <Blogs bookmarkBtn = {bookmarkBtn}></Blogs>
        <Bookmarks bookmark = {bookmark}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
