import Links from '../links/Links';
const NavBar = () => {
    return (
        <div className="hidden md:flex bg-white col-span-9 rounded-md justify-center items-center px-4 py-2 dark:bg-slate-800" >
            <ul className="w-full flex items-center  text-base gap-x-10 transition-all duration-500">
                <Links iconStyle="text-rose-500 dark:text-yellow-400 text-2xl xl:text-2xl ml-4" backStyle="bg-gradient-to-l from-slate-300 dark:from-yellow-300 opacity-60" width="w-auto mt-0"/>
            </ul>
        </div>
    );
}

export default NavBar;