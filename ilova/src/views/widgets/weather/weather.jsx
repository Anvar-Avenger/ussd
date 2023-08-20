import { Component } from 'react';

import WeatherCard from './weather-card';
import { key } from '../../../data/request';

import './weather.widget.scss';


class WeatherWidget extends Component {

    state = {
        dataset: []
    }

    places = []

    constructor(props) {
        super(props);

        let { places } = props;
        this.places = places;
    }

    async load(city) {
        // h.preventDefault();
        try {
            const manzil = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
            const response = await fetch(manzil);
            const malumot = await response.json();

            return {
                city: malumot.name,
                ...malumot.main
            }
        } catch (e) {
            this.setState({
                data: []
            });

            return {}
        }
    }

    componentDidMount() {
        this.places.forEach(async place => {
            let data = await this.load(place);
            this.setState({
                dataset: [
                    ...this.state.dataset,
                    data
                ]
            });

            console.log();
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Ob-havo malumoti</h1>
                <div className="weather-wrapper">
                    {this.state.dataset.map((data, i) => (
                        <WeatherCard place={data} key={i} />
                    ))}
                </div>
            </div>
        );
    }
}

export default WeatherWidget;