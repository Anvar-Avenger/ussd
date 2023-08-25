import { useState } from 'react';

import { post } from '../../../data/request';
import Companies from './components/companies';
import InternetPackage from "./components/internet-package";

export default function Xizmat() {
    const [natija, setNatija] = useState([]);
    const companies = [
        { 'nom': "Uzmobile", 'rasm': "uzmobile-gsm.png" },
        { 'nom': "Ucell", 'rasm': "ucell.png" },
        { 'nom': "Beeline", 'rasm': "beeline.png" }
    ];

    function selectCompany(komp) {
        post('/trafik-olish', { company: komp, term: 30 }, function (response, err) {
            if (err) {
                setNatija([]);
            } else {
                setNatija(response.data);
            }
        });
    }

    const Render = () => (<InternetPackage dataset={natija} />)

    return (
        <div className="mt-5 tymx">
            <div className="container ">
                <div className="row mb-3">
                    <div className="col-12 col-md-8 col-lg-6">
                        <h2 className="mb-2">Yordamchi kodlar</h2>
                        <p>Tuzilmalashtirilmagan yordamchi ma&#8217;lumotlar xizmati (USSD)</p>
                        <p>Tarkibsiz yordamchi xizmat ma&#8217;lumoti (USSD)</p>
                    </div>
                    <div className="col-12 col-sm-10 col-md-4 col-lg-auto mx-auto mr-lg-0">
                        <form className="">
                            <div className="form-group mb-0">
                                <div className="input-group">
                                    <input type="text" id="search" inputMode="search" name="search" className="form-control" placeholder="Qidirish" />
                                    <div className="input-group-append">
                                        <button type="reset" className="input-group-text">
                                            <span className="fs-24 text-grey icon-button-cancel">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="aloqa">
                <div className="pt-75 sarlavha d-flex container">
                    <h2>Internet to&#8216;plamlari</h2>
                    <img src={"/rasmlar/qoshuv.svg"} className="qoshuv ml-2" alt="Qo&#8216;shuv" />
                </div>
                <div className="container mt-3">
                    <div className="ustun">
                        <Companies companies={companies} onSelect={selectCompany} />
                    </div>

                    <div className="royxat mt-5">
                        <Render />
                    </div>
                </div>
            </div>
        </div>
    )
}