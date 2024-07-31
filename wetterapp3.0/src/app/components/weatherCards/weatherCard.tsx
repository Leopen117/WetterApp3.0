import Image from 'next/image'
import  Link  from "next/link";
import { MouseEventHandler } from 'react';
interface WeatherCardProps{
    id: number,
    precipitation: string | number,
    date:string,
    tempMin:string | number,
    tempMax: string | number,
    windSpeed: string | number,
    weatherImage: string 
    HandleClick: any
}
function WeatherCard({id, precipitation, date, tempMin, tempMax, windSpeed, weatherImage, HandleClick}: WeatherCardProps) {

    
return (
    <>
        <div className="card p-0" style={{width: 270}} >
            <div className="card-img-top ">
            <Link className="nav-link me-5 h2" href="/detailView" onClick={()=>HandleClick(id)}>
                <Image 
                src={weatherImage} 
                className="rounded-top" 
                alt="Landscape picture" 
                width={269} 
                height={250}/>
            </Link>
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
