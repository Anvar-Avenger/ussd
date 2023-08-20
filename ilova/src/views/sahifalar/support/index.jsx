import WeatherWidget from "../../widgets/weather/weather";


export default function Support() {
    let places = [
        "Gurlan",
        "Urganch",
        "Toshkent"
    ]

    return (
        <>
            <WeatherWidget places={places} />
        </>
    );
}