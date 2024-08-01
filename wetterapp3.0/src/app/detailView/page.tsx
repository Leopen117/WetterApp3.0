'use client'
import Header from "../components/header";
import * as React from "react";
import { useCallback, useEffect } from "react"
import Diagram from "../components/diagram";
import DetailAccordion from "./accordion";

function DetailView() {
// generate Dayname 
  const dayNameArray: string[] = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const diagramDetailData = JSON.parse(sessionStorage.getItem('detailDiagramData')!);
  const date = new Date(diagramDetailData[0][0])
  const day = date.getDay()
  
  console.log('day :',day );
  const headline: string = dayNameArray[day]
// generate Date 
  const dateToString: string = (diagramDetailData[0][0].toString()).slice(0,10)
  const dateArray: string[] = dateToString.split("-")       
  const subline = dateArray[2] + "." + dateArray[1] + "." + dateArray[0];           

    return(
        <>
            <Header headline={headline} subline={subline}></Header>
            <Diagram diagramData={diagramDetailData}></Diagram>
            <DetailAccordion diagramData={diagramDetailData}></DetailAccordion>
        </>
    )
}
export default DetailView