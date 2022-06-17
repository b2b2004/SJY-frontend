import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import Modal from "../modal/Signin";


function Navbar() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Cod_meter
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/sopboard' className='nav-links' onClick={closeMobileMenu}>
                            스터디
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contests' className='nav-links' onClick={closeMobileMenu}>
                            공모전
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Boardtest' className='nav-links' onClick={closeMobileMenu}>
                            질문게시판
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                            내 정보
                        </Link>
                    </li>
                </ul>
                <React.Fragment>
                {button && <Button buttonStyle='btn--outline' onClick={openModal}>SIGN IN</Button>}
                <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
                </React.Fragment>
            </div>
        </nav>
    </>
    );
}

export default Navbar