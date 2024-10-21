
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>

      <div >
        <div className='container w-11/12 mx-auto md:flex gap-4 mt-6'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
          
        </div>
      </div>
      
      
    </>
  )
}

export default App
