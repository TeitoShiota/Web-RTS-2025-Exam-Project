'use client';

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

// Lib
import { useCheckSession } from "@/hooks/useCheckSession";
import { deleteSessionCookies } from '@/actions/user-actions';



// Components
import Link from "next/link";

// React icons
import { IoTriangle } from "react-icons/io5";
import { RxTriangleLeft } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

// Styles
import './primary-nav-style.scss';

export default function PrimaryNav(){
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const { isLoggedIn, checkSession } = useCheckSession();

    const router = useRouter();

    const pathname = usePathname();
    const isHome = ( pathname === '/' )

    const loadedRef = useRef(false);

    function onClickHandler() {
        setIsOpen( ( prev ) => !prev )
    } 

    useEffect(() => {
        // if (!loadedRef.current) {
            checkSession()
            loadedRef.current = true;
        // }
    }, [loadedRef, isOpen]);

    return(
        <>
        <header
            className="primary-nav"
        >
            {
                isHome === true && ( <h2>Popular Classes</h2> )
            }
            <div>
                {
                    isHome === true ? (
                            <IoTriangle className="primary-nav__icon" />
                    ) : (
                        <button 
                            className="primary-nav__return-link"
                            type="button"
                            onClick={ () => router.back() }
                        >
                            <RxTriangleLeft /> 
                            <span>back</span>
                        </button>
                    )
                }

                <button
                    type="button"
                    className="primary-nav__button"
                    onClick={ () => onClickHandler() }
                >
                    <HiOutlineMenuAlt3 />
                </button>
            </div>
        </header>

        <nav className="primary-nav__content">
            <button
                type="button"
                className="primary-nav__content__button"
                onClick={ () => onClickHandler() }
            >
                <CgClose />
            </button>
            <div>
                <Link href="/" onClick={()=> { setIsOpen(false) }}>Home</Link>
                <Link href="/search" onClick={()=> { setIsOpen(false) }}>Search</Link>
                {
                    isLoggedIn === false ? (
                        null
                    ) : (
                        <Link href="/schedule" onClick={()=> { setIsOpen(false) }}>My Schedule</Link>
                    )
                }
                {
                    isLoggedIn === false ? (
                        <Link href="/login" onClick={()=> { setIsOpen(false) }}>Log In</Link>
                    ) : (
                        <Link href="/" onClick={()=> { deleteSessionCookies(); setIsOpen(false) }}>Log Out</Link>
                    )
                }
            </div>
        </nav>
        
        <style jsx>{`
            .primary-nav__content{
                width: ${ !isOpen ? '0' : '100dvw'}
                /* display: ${ !isOpen ? 'inline' : 'none' } */
            };
        `}</style>
        </>
    )
}