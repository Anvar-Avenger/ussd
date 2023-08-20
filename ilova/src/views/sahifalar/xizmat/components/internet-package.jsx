import {shakllash} from '../../../../utils/yordamchi';
import "./component.css";


function InternetPackage({ dataset: toplamlar }) {
    if (!toplamlar.length) {
        return null;
    }

    return (
        <div className="container mt-5 cols">
            <h3>{toplamlar[0].company} internet to&#8216;plamlari</h3>
            <div>
                <div className="ich">
                    {toplamlar.map((model, i) => (
                        <a href={`tel:${model.code}`} className="yosh" key={i} style={{ animationDelay: `${(i * 0.1).toFixed(1)}s` }}>
                            <div className="yosh-play-icon">
                                <i className="fas fa-tags"></i>
                            </div>
                            <div className="yosh-desc fx-1">
                                <div className="yosh-artist nowrap">{shakllash(model.traffic)} MB</div>
                                <div className="yosh-title nowrap">{shakllash(model.price)} so&#8216;m</div>
                            </div>
                            <div className="yosh-load-icon">
                                <span className="mr-2">{model.term} - kunlik</span>
                                <i className="far fa-dot-circle"></i>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InternetPackage;