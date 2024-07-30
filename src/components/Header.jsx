const Header = () => {
    return(
        <div className="bg-black p-4 flex justify-between items-center">
            <div className="flex items-center space-x-5">
                <h1 className="text-[30px] uppercase font-bold text-red-700 ">Trailermovie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="" className="text-white">Home</a>
                    <a href="" className="text-white">About</a>
                    <a href="" className="text-white">Contact</a>
                </nav>
            </div>
            <div className="flex items-center space-x-5">
                <input type="text" placeholder="Search" className="text-black py-3 px-4"/>
                <button className="rounded-lg bg-red-600 text-white p-2">Search</button>
            </div>
        </div>
    )
}

export default Header;