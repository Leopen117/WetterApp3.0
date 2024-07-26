
import Image from "next/image"
import sun from "../Images/static/sun.jpg"

function WeatherCard() {
    
    
    return (
        <>
            <div className="card p-0" style={{width: 250}} >
                <div className="card-img-top">
                    <Image src={sun} alt="Landscape picture" width={250}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Tag</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tagestempetratur</li>
                    <li className="list-group-item">Niederschlag</li>
                    <li className="list-group-item">Wind</li>
                </ul>
            </div>
        </>
)
    }

export default WeatherCard