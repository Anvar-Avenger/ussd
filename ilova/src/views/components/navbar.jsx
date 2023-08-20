import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [show, setShow] = useState(null);

    function toggleDropDown() {
        setShow(show ? null : "show");
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg shadow-navbar bg-color">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <span className="d-block belgi-ussd"></span>
                </Link>
                <button className="navbar-toggler collapsed" aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/kodlar" className="nav-link d-flex align-items-center">
                                <i className="mr-2 fs-10 icon-link ussd-kodlar"></i>
                                <span>USSD kodlar</span>
                            </Link>
                        </li>
                        <li className={"nav-item dropdown " + show}>
                            <a href="#dropdown" data-toggle="dropdown" id="navbarDropdownHelp" onClick={toggleDropDown} role="button"className="nav-link d-flex align-items-center" aria-expanded="false">
                                <i className="mr-2 fs-10 icon-link far fa-life-ring"></i>
                                <span>Yordam</span>
                            </a>
                            <div className={"dropdown-menu dropdown-menu-right dropdown-menu-large w-320 border-0 p-4 " + show}>
                                <span className="d-block font-color-light">Qo&#8216;llab-quvvatlash telefoni:</span>
                                <a href="tel:+998-99-512-32-64" className="d-inline-block link-href fs-24">
                                    <span className="fs-18">+998</span>&nbsp;99&nbsp;512‑32‑64
                                </a>
                                <br />
                                <a href="tel:+998-99-512-32-64" className="d-inline-block link-href fs-24">
                                    <span className="fs-18">+998</span>&nbsp;99&nbsp;512‑32‑64
                                </a>
                                <br />
                                <p className="px-0 pt-2 mt-3">
                                    Yordam va qo&#8216;llab-quvvatlash markazi
                                </p>
                            </div>
                        </li>
                    </ul>
                    <Link to="/tizim" className="btn btn-warning qoshish px-5">Boshqarish</Link>
                </div>
            </div>
        </nav>
    )
}