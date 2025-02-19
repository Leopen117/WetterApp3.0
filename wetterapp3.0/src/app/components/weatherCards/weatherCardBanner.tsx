import { useEffect, useState } from "react";
import WeatherCard from "./weatherCard"



interface WeatherCardBannerProps{
  weatherCardData:(string | number)[][]
  detailDiagramData: string[][]
  setDetailDiagramData: (detailDiagramData:string[][]) => void
}
function WeatherCardBanner({weatherCardData, detailDiagramData, setDetailDiagramData}:WeatherCardBannerProps){
    const [dailyPrecipitationMean, setDailyPrecipitationMean] = useState(weatherCardData[0]);
    const [dailyTemperaturesMax, setDailyTemperaturesMax] = useState(weatherCardData[1]);
    const [dailyTemperatureMin, setDailyTemperatureMin] = useState(weatherCardData[2] || []);
    const [dailyDates, setDailyDates] = useState(weatherCardData?.[3] || []);
    const [dailyWindSpeed, setDailyWindSpeed] = useState(weatherCardData[4]);
    const [dailyWeatherCode, setDailyWeatherCode] = useState(weatherCardData[5]);
    const weatherImage: string[] = []
    const finalDailyDateData: string[]= []

    useEffect(()=> {
      setDailyPrecipitationMean(weatherCardData[0]);
      setDailyTemperaturesMax(weatherCardData[1]);
      setDailyTemperatureMin(weatherCardData[2] || []);
      setDailyDates(weatherCardData[3] || []);
      setDailyWindSpeed(weatherCardData[4]);
      setDailyWeatherCode(weatherCardData[5]);
    }, [weatherCardData])
    

    // Prepare Dataset for DetailView
    function prepareDetailData(start:number, end:number){
      const preparedData: string[][] = []
      for(let i = 0;i < 10 ;i++){
        let prepData:string[] = detailDiagramData[i].slice(start, end)
        preparedData.push(prepData)         
      }
      sessionStorage.setItem("detailDiagramData", JSON.stringify(preparedData))    
    }
    function HandleClick(id:number){
      switch (id) {
        case 0:
          prepareDetailData(0,24)
          break;
        case 1:
          prepareDetailData(24,48)
          break;
        case 2:
          prepareDetailData(48,72)
          break;
        case 3:
          prepareDetailData(72,96)
        case 4:
          prepareDetailData(96,120)
          break;
        case 5:
          prepareDetailData(120,144)
          break;
        case 6:
          prepareDetailData(144,167)
          break;      
        default:
          console.log('There is no Data!');
          break;
      }
      
    }

    // Build card content data   
    for (let i = 0; i < dailyDates.length; i++) {
        const dateToString: string = dailyDates[i].toString()
        const dateArray: string[] = dateToString.split("-")       
        const date = dateArray[2] + "." + dateArray[1] + "." + dateArray[0];
        finalDailyDateData.push(date);
        const weatherCode = dailyWeatherCode[i] as number;

        switch(weatherCode){
          case 3:
          case 21:
          case 22:
          case 23:
          case 24:
          case 50:
          case 51:
          case 52:
          case 53:
          case 56:
          case 60:
          case 61:
          case 70:
          case 71:
            weatherImage.push('/Images/static/cloudy.jpg')
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 14:
          case 15:
          case 20:
          case 28:
          case 30:
          case 31:
          case 32:
          case 33:
          case 34:
          case 35:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
            weatherImage.push('/Images/static/forg_640.jpg')
            break;
          case 16:
          case 24:
          case 25:
          case 26:
          case 27:
          case 36:
          case 37:
          case 38:
          case 39:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
            weatherImage.push('/Images/static/rain.jpg')
            break;
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
              weatherImage.push('/Images/static/snow_640.jpg')
              break;
          case 13:
          case 17:
          case 18:
          case 19:
          case 29:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 97:
          case 98:
          case 99:
            weatherImage.push('/Images/static/lightning.jpg')
            break;
          case 0:
          case 1:
          case 2:
            weatherImage.push('/Images/static/sun.jpg')
            break;        
        }
  }
    return (

        <div className="d-flex flex-row justify-content-evenly mb-5 ms-1 me-1">
          {dailyPrecipitationMean.map((_, i) => (

            
             <WeatherCard
             key={i}
             id={0+i}
             date={finalDailyDateData?.[i].toString()}
             precipitation={dailyPrecipitationMean?.[i]} 
             tempMin={dailyTemperatureMin?.[i]}
             tempMax={dailyTemperaturesMax?.[i]}
             windSpeed={dailyWindSpeed?.[i]}
             weatherImage={weatherImage?.[i]}
             HandleClick={HandleClick}
             ></WeatherCard>
            ))}          
            
        </div>
    ) 
  
}

export default WeatherCardBanner
