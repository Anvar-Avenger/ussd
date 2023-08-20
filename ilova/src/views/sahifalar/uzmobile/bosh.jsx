import { oylik, kunlik, tungi, onnet, aksiya } from "../../../data";
import './oddiy.css';


const malumot = [oylik, kunlik, tungi, onnet, aksiya];

function createScript(src) {
    let script = document.createElement("script");
    script.src = src;
    script.id = src;

    let element = document.getElementById(src);
    if (element == null) {
        document.body.appendChild(script);
    }
}

export default function Boshi() {

    function setData(data) {
        console.log(data);
    }

    createScript("/js/owl.carousel.min.js");
    createScript("/js/carousel.js");
    return (
        <div>
            <h1 className="text-center mt-2">To&#8216;plamlarni tanlang</h1>
            <div className="container">
                <div className="wrapper">
                    <div id="carousel" className="carousel owl-carousel">
                        <div onClick={() => setData(malumot[0])} className="card card-5">Oylik</div>
                        <div onClick={() => setData(malumot[1])} className="card card-2">Kunlik</div>
                        <div onClick={() => setData(malumot[2])} className="card card-1">Tungi</div>
                        <div onClick={() => setData(malumot[3])} className="card card-3">Onnet</div>
                        <div onClick={() => setData(malumot[4])} className="card card-4">Aksiya</div>
                    </div>
                </div>
            </div>
        </div>
    )
}