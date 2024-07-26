
import WeatherCard from "./weatherCard"

interface WeatherCardBannerProps{
  weatherCardData:(string | number)[][]
}
function WeatherCardBanner({weatherCardData}:WeatherCardBannerProps){
    let dailyPrecipitationMean: (string | number)[]= weatherCardData[0]
    let dailyTemperatureMin: (string | number)[] = weatherCardData[1]
    let dailyTemperaturesMax: (string | number)[] = weatherCardData[2]
    let dailyDates: (string | number)[] = weatherCardData[3]
    let dailyWindSpeed: (string | number)[] = weatherCardData[4]
    let dailyWeatherCode: (string | number)[] = weatherCardData[5]
    let finalDailyDateData: string[]= ['']
    
    // Build card content data   
    for (let i = 0; i < 7; i++) {
        let dateToString: string = dailyDates[i].toString()
        let dateArray: string[] = dateToString.split("-")       
        let date = dateArray[2] + "." + dateArray[1] + "." + dateArray[0];
        finalDailyDateData.push(date);

        let weatherCode = dailyWeatherCode[i];
        let weatherImage: string[] = ['']
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
            weatherImage.push('/Image/static/sun.jpg')
            break;

        

        
      }
  
    //   createCard(date, temp, perci, image, i);

  }
    return (

        <div className="d-flex flex-row justify-content-between mb-5 ms-1 me-1">
            <WeatherCard 
                date={finalDailyDateData[0]}
                tempMin={dailyTemperatureMin[0]}
                tempMax={dailyTemperaturesMax[0]}
                windSpeed={dailyWindSpeed[0]}
                weatherImage={weatherImage[0]}
            ></WeatherCard>
            <WeatherCard 
                date={finalDailyDateData[1]}
                tempMin={dailyTemperatureMin[1]}
                tempMax={dailyTemperaturesMax[1]}
                windSpeed={dailyWindSpeed[1]}
                weatherImage={weatherImage[1]}
            ></WeatherCard>
            <WeatherCard 
                date={finalDailyDateData[2]}
                tempMin={dailyTemperatureMin[2]}
                tempMax={dailyTemperaturesMax[2]}
                windSpeed={dailyWindSpeed[2]}
                weatherImage={weatherImage[2]}
            ></WeatherCard>
            <WeatherCard 
                date={finalDailyDateData[3]}
                tempMin={dailyTemperatureMin[3]}
                tempMax={dailyTemperaturesMax[3]}
                windSpeed={dailyWindSpeed[3]}
                weatherImage={weatherImage[3]}
            ></WeatherCard>
            <WeatherCard 
                date={finalDailyDateData[4]}
                tempMin={dailyTemperatureMin[4]}
                tempMax={dailyTemperaturesMax[4]}
                windSpeed={dailyWindSpeed[4]}
                weatherImage={weatherImage[4]}
            ></WeatherCard>
            <WeatherCard 
                date={finalDailyDateData[5]}
                tempMin={dailyTemperatureMin[5]}
                tempMax={dailyTemperaturesMax[5]}
                windSpeed={dailyWindSpeed[5]}
                weatherImage={weatherImage[5]}
            ></WeatherCard>
            <WeatherCard 
                date={finalDailyDateData[6]}
                tempMin={dailyTemperatureMin[6]}
                tempMax={dailyTemperaturesMax[6]}
                windSpeed={dailyWindSpeed[6]}
                weatherImage={weatherImage[6]}
            ></WeatherCard>
          
        </div>
    )
  
}

export default WeatherCardBanner

var str = "Apples are round, and apples are juicy."; 
var splitted = str.split(" ", 3); 
console.log(splitted)