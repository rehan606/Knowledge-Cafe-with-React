import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {

    // const {} = bookmarks
    return (
        <div className="md:w-1/3">
            <div className=" border p-4 rounded-lg bg-green-200 mb-4 text-center">
                <h2 className="text-lg text-gray-500">Reading Time Spaned: {readingTime}</h2>
            </div>
            <div className=" border p-4 rounded-lg bg-green-200 ">
               

                <h2 className="text-xl font-semibold text-gray-500 mb-4 text-center border-b border-green-600 pb-3">Book Marks Blog {bookmarks.length} </h2>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}> </Bookmark> )
                }
            </div>
        </div>
       
        
    );
};

Bookmarks.PropTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;