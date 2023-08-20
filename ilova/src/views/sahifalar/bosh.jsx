import { Fragment } from "react";

import './main.css';

export default function Boshi() {
    return (
        <Fragment>
            <div className="bolak-1 container">
                <div className="ichi">
                    <div className="animatsiya-1">
                        <h1 className="sar-xizmat">USSD kodlar</h1>
                        <div className="animatsiya-1-sirt"></div>
                    </div>
                    <div className="rasmli-1">
                        <img src="/rasmlar/telefon.svg" alt="Telefon" />
                    </div>
                </div>
            </div>
            <div className="bolak-2">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="pr-100">
                        <img src="/rasmlar/guruh55.svg" alt="Xizmat" />
                    </div>
                    <div className="pl-100">
                        <h2>Foydalanish</h2>
                        <div className="mt-3 malumot" >
                            USSD (Unstructured Supplementary Service Data) – abonentlar bilan interaktiv o&#8216;zaro aloqalarni tashkil etishga imkon beruvchi standart uyali aloqa xizmati. USSD muloqot doirasida tezkor xabar almashish orqali amalga oshiriladi, ishlash tezligi SMSga qaraganda yuqori.
                            <br /><br />
                            USSD xizmatlaridan foydalanish juda oddiy - siz kerakli bandni tanlab, uning ustiga bir marta bosishining yeratli (misol: *100# uchun). Tugma bosilgach, kod telefoningizga ilova tomonidan kiritiladi va sizdan faqat telefon qilish tugmasini bosish talab etiladi.
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}