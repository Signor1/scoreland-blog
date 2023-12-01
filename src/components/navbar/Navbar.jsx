import { Link, NavLink } from "react-router-dom"
import { NavLinks } from "../utils/NavLinks"
import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSideBarToggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            window.document.body.style.overflowY = "hidden"
        } else {
            window.document.body.style.overflowY = "auto"
        }
    }, [isOpen])

    return (
        <header className="w-full relative font-sans h-20 flex justify-between lg:px-16 px-4 items-center bg-gray-950 border-b-4 border-mycolor">
            <Link to="/" className="inline-block uppercase text-gray-50">ScoreLand</Link>
            <ul className="md:flex hidden gap-8 font-sans">
                {
                    NavLinks.map((navlink, index) => (
                        <li key={index}>
                            <NavLink to={navlink.url} className="text-sm text-gray-50 relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:transition-all before:duration-200 hover:before:w-full before:h-0.5 before:bg-mycolor">{navlink.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <button onClick={handleSideBarToggle} className="md:hidden inline-block text-white bg-mycolor px-3 py-2 rounded" type="button">
                <List size={20} />
            </button>

            {/* Mobile side nav */}
            <div className={`flex md:hidden flex-col fixed top-0 transition-all duration-300 w-full z-50 h-screen bg-gray-950 ${isOpen ? "left-0" : "left-[100vw]"}`}>
                <header className="w-full border-b border-mycolor flex justify-between items-center py-6 px-5">
                    <Link to="/" className="inline-block uppercase text-gray-50">ScoreLand</Link>
                    <button onClick={handleSideBarToggle} className="inline-block text-white bg-mycolor px-3 py-2 rounded" type="button">
                        <X size={20} />
                    </button>
                </header>
                <ul className="flex flex-col mt-10 px-6 gap-6 font-sans">
                    {
                        NavLinks.map((navlink, index) => (
                            <li key={index}>
                                <NavLink to={navlink.url} onClick={handleSideBarToggle} className="text-sm text-gray-50 relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:transition-all before:duration-200 hover:before:w-full before:h-0.5 before:bg-mycolor">{navlink.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar