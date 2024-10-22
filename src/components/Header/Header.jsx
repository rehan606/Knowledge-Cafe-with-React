import profile from '../../assets/images/profile.png'

const Header = () => {
    return (

        <div className='bg-green-300 sticky top-0 z-50'>
            <div className=' container w-11/12 mx-auto flex justify-between  items-center py-4 border-b'>
                <h1 className='text-2xl font-bold cursor-pointer'>Knowledge Cafe</h1>
                <img className='border-2 rounded-full border-green-200' src= {profile} alt="" />

            </div>
        </div>

        
    );
};

export default Header;