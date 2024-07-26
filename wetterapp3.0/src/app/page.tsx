"use client"

import Diagram from "./components/diagram"
import BodyHeader from "./components/bodyHeader"
import LocationInput from "./components/locationInput"
import HeadNavbar  from "./components/headNavbar"
import WeatherCardBanner from "./components/weatherCards/weatherCardBanner"
import FootNavbar from "./components/footNavbar"
import * as React from "react";
import { useCallback, useEffect } from "react"


export default function Home() {


  const [location, setLocation] = React.useState<string>("Kassel");
  const [weatherCardData, setWeatherCardData] = React.useState<(string | number)[][]>([[]])
  const [diagramData, setDiagramData] = React.useState<(string | number)[][]>([['2024-07-24T00:00', '2024-07-24T01:00', '2024-07-24T02:00', '2024-07-24T03:00', '2024-07-24T04:00', '2024-07-24T05:00', '2024-07-24T06:00', '2024-07-24T07:00', '2024-07-24T08:00', '2024-07-24T09:00', '2024-07-24T10:00', '2024-07-24T11:00', '2024-07-24T12:00', '2024-07-24T13:00', '2024-07-24T14:00', '2024-07-24T15:00', '2024-07-24T16:00', '2024-07-24T17:00', '2024-07-24T18:00', '2024-07-24T19:00', '2024-07-24T20:00', '2024-07-24T21:00', '2024-07-24T22:00', '2024-07-24T23:00', '2024-07-25T00:00'],[17, 16.3, 17.3, 16.4, 16.2, 15.7, 16.7, 17.2, 17.8, 19.5, 18.9, 18.3, 19.3, 20.6, 21.5, 21.6, 21.2, 21.3, 20.7, 20.1, 18.9, 19, 18, 16.8, 16.5]])

  const getTempAndWeatherCodeForLatLong = useCallback(async (lat: number, lon: number) => {
    const urlTempWeatherCode: string = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,weather_code,wind_speed_10m_max`;
    const dataPromiseTempWeahterCode: Response = await fetch(urlTempWeatherCode);
     const dataJsonWeather = await dataPromiseTempWeahterCode.json();      
    setWeatherCardData(
      [dataJsonWeather.daily.precipitation_probability_mean, 
      dataJsonWeather.daily.temperature_2m_max,
      dataJsonWeather.daily.temperature_2m_min,
      dataJsonWeather.daily.time,
      dataJsonWeather.daily.wind_speed_10m_max,
      dataJsonWeather.daily.weather_code
      ]
    )
    setDiagramData(
      [dataJsonWeather.hourly.time,
       dataJsonWeather.hourly.temperature_2m
      ]
    );
  }, [])

      // Get Data
      const getLatLonOfLocation = useCallback(async () => {
        const urlLocation = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;
        const dataPromiseLocation = await fetch(urlLocation);
        let dataJsonLocation = await dataPromiseLocation.json();
        let lat = dataJsonLocation[0].lat;
        let lon = dataJsonLocation[0].lon;
        getTempAndWeatherCodeForLatLong(lat, lon);
      }, [getTempAndWeatherCodeForLatLong, location]);

      useEffect(() => {
        getLatLonOfLocation()
      }, [getLatLonOfLocation])

  return(
    <>
    <HeadNavbar></HeadNavbar>  
    <BodyHeader></BodyHeader>
    <LocationInput setLocation={setLocation} getLatLonOfLocation={getLatLonOfLocation}></LocationInput>
    <Diagram diagramData={diagramData}></Diagram>
    <WeatherCardBanner weatherCardData={weatherCardData}></WeatherCardBanner>
    <FootNavbar></FootNavbar>
    </>
  )
}