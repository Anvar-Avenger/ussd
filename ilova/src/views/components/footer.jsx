import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="container pt-4 my-md-5 pt-md-5">
            <div className="row">
                <div className="col-12 col-md">
                    <Link to="/" className="navbar-brand">
                        <span className="d-block belgi-ussd"/>
                    </Link>
                </div>
                <div className="col-6 col-md">
                    <h5>Menyular</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link to="/" className="link-secondary text-decoration-none">Bosh sahifa</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="/kodlar" className="link-secondary text-decoration-none">USSD kodlar</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Xizmatlar</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link to="/yordam" className="link-secondary text-decoration-none">Yordam olish</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Tarkibni sozlash</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link to="/tizim" className="link-secondary text-decoration-none">Tizimga kirish</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="yaratuvchi border-top mt-5 pt-2 justify-content-between">
                <div className="huquq">
                    <span>Yaratuvchi: &copy; 2017 - 2021 Tajriba.uz. Barcha huquqlar himoyalangan</span>
                </div>
                <div className="ijtimoiy">
                    <a href="https://www.youtube.com/channel/UC3W6Z9wZ2e0Lf3vmyU1U7uw/"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com/anvar.zaripboyev.39/"><i className="fab fa-facebook"></i></a>
                    <a href="https://t.me/anvar_dasturchi"><i className="fab fa-telegram"></i></a>
                </div>
            </div>
        </footer>
    )
}