export const Component = props => (
    <>
        {props.shahar && <div className="malumotlar"></div> }
        <p>{props.xato}</p>
    </>
)

export default function WeatherCard({ place }) {
    return (
        <div className="weather-card madrid">
            <div className="weather-icon sun"></div>
            <h1>{place.temp}&#176;C</h1>
            <p>{place.city}, {place.pressure} Pa</p>
        </div>
    );
}