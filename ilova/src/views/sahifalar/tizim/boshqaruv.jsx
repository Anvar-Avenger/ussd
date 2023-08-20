import { useState } from 'react';

import { post } from "../../../data/request";

export default function Boshqaruv() {
    const [nom, yangiNom] = useState('')
    const [yashirin, yangiYashirin] = useState('')

    const [xabar, setXabar] = useState('')

    function bajar(h) {
        h.preventDefault()
        post('/tizimga-kirish', { login: nom, password: yashirin }, function (data) {
            setXabar(data.xabar)
        });
    }

    return (
        <div className="container tizim-shakl">
            <div className="alert alert-info my-5">
                <p className="pt-2">Tizimga kirish, faqat boshqaruvchilarga ruxsat etilgan.</p>
            </div>

            <h3>Tizimga kirish</h3>
            <form onSubmit={bajar} className="mw-500">
                <input type="text" name="name" onChange={(h) => yangiNom(h.target.value)} className="form-control" placeholder="Nom" /><br />
                <input type="text" name="parol" onChange={(h) => yangiYashirin(h.target.value)} className="form-control" placeholder="Yashirin so&#8216;z" /><br />
                <button type="submit" className="btn btn-danger">Kirish</button>
            </form>
            <br />
            {
                xabar &&
                <div className="alert alert-warning mt-5">
                    <span>{xabar}</span>
                </div>
            }
        </div>
    )
}