import React, {useState} from 'react'
import {styles} from "../styles";
import {Link} from "react-router-dom";
import {logo, menu, close} from "../assets";
import {navLinks} from "../constants";

const Navbar = () => {
    const [active, setActive] = useState<string>('');
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.98] xxs:h-[12vh]`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                    <img
                        src={logo}
                        alt="logo"
                        className="sm:w-12 sm:h-12 w-11 h-11 object-contain"
                    />
                    <p className="text-[21px] uppercase font-medium font-mova text-french">Julian Delgado</p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? 'text-french' : 'text-eerieBlack'
                            } text-eerieBlack hover:text-taupe text-[21px] font-medium
                uppercase tracking-[3px] cursor-pointer nav-links`}
                            onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
                    {toggle ? (
                        <div
                            className={`p-6 bg-flashWhite opacity-[0.98] absolute
                top-0 left-0 w-screen h-screen z-10 menu ${
                                toggle ? 'menu-open' : 'menu-close'
                            }`}>
                            <div className="flex justify-end">
                                <img
                                    src={close}
                                    alt="close"
                                    className="w-[22px] h-[22px] object-contain cursor-pointer"
                                    onClick={() => setToggle(!toggle)}
                                />
                            </div>
                            <ul
                                className="list-none flex flex-col -gap-[1rem]
                items-start justify-end mt-[10rem] -ml-[35px]">
                                {navLinks.map((nav) => (
                                    <li
                                        id={nav.id}
                                        key={nav.id}
                                        className={`${
                                            active === nav.title ? 'text-french' : 'text-eerieBlack'
                                        } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(nav.title);
                                        }}>
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <img
                            src={menu}
                            alt="menu"
                            className="w-[34px] h-[34px] object-contain cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;