
const Navber = () => {
    return (
        <div className="max-w-7xl bg-red-300 rounded-lg mx-auto m-10 p-6">
            <div className="flex justify-between items-center">
                <ul className="flex mr-6">
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-500 p-2 rounded-lg bg-slate-400 transition-all " href="">Home</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-500 p-2 rounded-lg bg-slate-400 transition-all " href="">About</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-500 p-2 rounded-lg bg-slate-400 transition-all " href="">Servis</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-500 p-2 rounded-lg bg-slate-400 transition-all " href="">Contex</a></li>
                </ul>
                <div className="flex gap-8">
                    <input className="h-10 w-[300px] rounded-lg p-6" placeholder="Enter number" type="text" />
                    <img className="w-12" src="../../../public/image/boy1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navber;