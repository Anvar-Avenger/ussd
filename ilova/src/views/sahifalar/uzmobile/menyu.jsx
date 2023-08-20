function faol(h) {
    document.querySelectorAll('.havola').forEach(function(bir) {
        if (h.target === bir)
            bir.classList.add('faol');
        else
            bir.classList.remove('faol')
    });
}

export default function Menyu() {
    return (
        <header className="header-uz">
            <nav id="ishla" className="123">
                <div className="logotip">
                    <p className="boshi">
                        <img src="/rasmlar/belgi-mobile.png" alt="Belgi" />
                    </p>
                </div>
                <div onClick={faol} className="menyu-uchun">
                    <a href="#boshi" className="havola faol">Xizmatlar</a>
                    <a href="#haqida" className="havola">Haqida</a>
                    <a href="#yordam" className="havola">Yordam</a>
                </div>
            </nav>
        </header>
    )
}