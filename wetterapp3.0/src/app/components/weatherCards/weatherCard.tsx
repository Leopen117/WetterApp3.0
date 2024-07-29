import Image from 'next/image'
interface WeatherCardProps{
    precipitation: string | number,
    date:string,
    tempMin:string | number,
    tempMax: string | number,
    windSpeed: string | number,
    weatherImage: string 
}
function WeatherCard({precipitation, date, tempMin, tempMax, windSpeed, weatherImage}: WeatherCardProps) {
    
    
return (
    <>
        <div className="card p-0" style={{width: 270}} >
            <div className="card-img-top ">
                <Image 
                src={weatherImage} 
                className="rounded-top" 
                alt="Landscape picture" 
                width={269} 
                height={250}/>
            </div>
            <div className="card-body">
                <h5 className="card-title fw-bolder">{date}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Min. temperatures: <b>{tempMin}C°</b></li>
                <li className="list-group-item">Max. temperatures: <b>{tempMax}C°</b> </li>
                <li className="list-group-item">Probability of rain: <b>{precipitation}%</b> </li>
                <li className="list-group-item">Top of windspeed: <b>{windSpeed}km/h</b> </li>
            </ul>
        </div>
    </>
)
    }

export default WeatherCard 
