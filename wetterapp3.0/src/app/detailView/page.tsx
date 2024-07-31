'use client'
import Header from "../components/header";
import * as React from "react";
import { useCallback, useEffect } from "react"
import Diagram from "../components/diagram";
import DetailAccordion from "./accordion";

function DetailView() {
// generate Dayname and Date
  let headline: string = ""
  const diagramDetailData = JSON.parse(sessionStorage.getItem('detailDiagramData')!);
  const date = new Date(diagramDetailData[0][0])
  const day = date.getDay()

  const dateToString: string = (diagramDetailData[0][0].toString()).slice(0,10)
  const dateArray: string[] = dateToString.split("-")       
  const subline = dateArray[2] + "." + dateArray[1] + "." + dateArray[0];

  switch (day) {
    case 0:
        headline = "Monday"        
        break;
    case 1:
        headline = "Tuesday"        
        break;
    case 2:
        headline = "Wednesday"        
        break;
    case 3:
        headline = "Thursday"        
        break;
    case 4:
        headline = "Friday"        
        break;
    case 5:
        headline = "Saturday"        
        break;
    case 6:
        headline = "Sunday"        
        break;
    default:
        console.log('There is no Day');
        break;
  }
           

    return(
        <>
            <Header headline={headline} subline={subline}></Header>
            <Diagram diagramData={diagramDetailData}></Diagram>
            {/* <DetailAccordion></DetailAccordion> */}
        </>
    )
}
export default DetailView