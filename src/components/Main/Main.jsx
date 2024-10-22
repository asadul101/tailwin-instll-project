

const Main = () => {
    return (
        <div className="max-w-7xl bg-emerald-500 rounded-lg mx-auto m-10 p-6">
            <div className="flex justify-between items-center">
                <ul className="flex mr-6">
                    <li><a className="ml-4 text-2xl font-medium hover:bg-pink-400 p-2 rounded-lg bg-red-500 text-white transition-all " href="">Home</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-pink-400 p-2 rounded-lg bg-red-500 text-white transition-all " href="">About</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-pink-400 p-2 rounded-lg bg-red-500 text-white transition-all " href="">Servis</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-pink-400 p-2 rounded-lg bg-red-500 text-white transition-all " href="">Contex</a></li>
                </ul>
                <div>
                    <img className="w-12 rounded-full" src="../../../public/image/boy2.png" alt="" />
                </div>
                <div>
                    <input className="h-10 w-[300px] rounded-lg p-6" placeholder="Enter number" type="text" />
                </div>
            </div>
        </div>
    );
};

export default Main;