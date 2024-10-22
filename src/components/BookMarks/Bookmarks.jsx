import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {

    // const {} = bookmarks
    return (
        <div className="md:w-1/3 border p-4 rounded-lg bg-gray-100 ">
            <h2 className="text-xl font-semibold text-gray-500 mb-4 text-center border-b pb-3">Book Marks Blog {bookmarks.length} </h2>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}> </Bookmark> )
            }
        </div>
    );
};

Bookmarks.PropTypes ={
    bookmarks: PropTypes.array
}

export default Bookmarks;