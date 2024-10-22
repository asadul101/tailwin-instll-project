import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";

const Icon = () => {
    return (
        <div className="max-w-7xl bg-lime-400 rounded-lg mx-auto m-10 p-6">
            <div className="flex justify-between items-center">
                <ul className="flex mr-6">
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-600 p-2 rounded-lg bg-purple-400 text-white transition-all " href="">Home</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-600 p-2 rounded-lg bg-purple-400 text-white transition-all " href="">About</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-600 p-2 rounded-lg bg-purple-400 text-white transition-all " href="">Servis</a></li>
                    <li><a className="ml-4 text-2xl font-medium hover:bg-orange-600 p-2 rounded-lg bg-purple-400 text-white transition-all " href="">Contex</a></li>
                </ul>
                <div>
                    <img className="w-12 rounded-full" src="../../../public/image/boy2.png" alt="" />
                </div>
                <div>
                    <ul className="flex items-center gap-6">
                        <li className="text-3xl text-black"><FiTwitter></FiTwitter></li>
                        <li className="text-3xl text-blue-700"><FaFacebookSquare></FaFacebookSquare></li>
                        <li className="text-3xl text-red-700"><IoLogoYoutube></IoLogoYoutube></li>
                        <li className="text-3xl text-purple-700"><FaFacebookMessenger></FaFacebookMessenger></li>
                    </ul>
                </div>
                <div>
                    <input className="h-10 w-[300px] rounded-lg p-6" placeholder="Enter number" type="text" />
                </div>
            </div>
        </div>
    );
};

export default Icon;