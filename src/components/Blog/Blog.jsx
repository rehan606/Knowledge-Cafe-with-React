import PropTypes from 'prop-types';


const Blog = ({blog, handleAddToBookmark }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div className='border rounded-lg mb-6'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            

            <div className='px-5 pb-5 bg-green-200'>
                
                <div className='flex justify-between items-center pt-5 mb-5 '>
                    <div className='flex items-center gap-3'>
                        <img className='w-12 h-12' src={author_img} alt="" />
                        <div>
                            <h2 className='text-lg font-bold'>{author}</h2>
                            <p className='text-gray-500 font-semibold text-sm'>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p className='text-gray-500 font-semibold text-sm mr-5'>{reading_time} Min Read </p>
                        <button  onClick={()=> handleAddToBookmark(blog)}><i className="fa-regular fa-bookmark"></i></button>
                    </div>
                </div>

                <h2 className='text-3xl font-bold mt-4'> {title} </h2>
                <p className='mt-5'>
                    {
                        hashtags.map((hash , idx)=> <span key={idx}>  <a href="" className=' mr-4 text-gray-500' > {hash} </a> </span>)
                    }
                </p>
                <button className='text-blue-500 font-semibold underline mt-4'>Mark as Read</button>
                
            </div>

            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;