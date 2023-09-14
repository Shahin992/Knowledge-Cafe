import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-between items-center my-10 border-b-2 border-zinc-300 '>
            <h1 className='text-5xl font-bold mb-2'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;