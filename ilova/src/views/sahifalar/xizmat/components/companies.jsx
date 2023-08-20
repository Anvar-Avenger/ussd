import React from "react";

export default class Komponiyalar extends React.Component {
    constructor(props) {
        super(props);
        this.komponiyalar = props.companies;
        this.choose = props.onSelect;
    }

    render() {
        if (!this.komponiyalar.length)
            return null;

        return (
            <>
                {this.komponiyalar.map((bir, i) => (
                        <div onClick={() => this.choose(bir.nom)} key={i}
                             className="ustun-ichi link-secondary text-decoration-none text-dark
                                link-secondary text-decoration-none text-dark">
                            <h3>{bir.nom}</h3>
                            <div className="my-2">
                                <img src={"/rasmlar/aloqa/" + bir.rasm} alt="uzmobile" />
                                <p>Tanlash uchun ustiga bosing</p>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}