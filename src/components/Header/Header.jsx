import profile from '../../assets/images/profile.png'

const Header = () => {
    return (

        <div>
            <div className=' container w-11/12 mx-auto flex justify-between items-center py-4 border-b'>
                <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
                <img src= {profile} alt="" />

            </div>
        </div>

        
    );
};

export default Header;