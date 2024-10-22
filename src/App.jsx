
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    // Remove items from bookmark 
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)
  }


  return (
    <>
      <Header></Header>

      <div >
        <div className='container w-11/12 mx-auto md:flex gap-4 mt-6'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
          
        </div>
      </div>
      
      
    </>
  )
}

export default App
