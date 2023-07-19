import { AutoSurvey } from "@/type/type";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FilterCountry from "./FilterCountry";
import FilterLocation from "./FilterLocation";

type FilterProps = {
  surveys: AutoSurvey[];
  setFilteredSurvey: Dispatch<SetStateAction<AutoSurvey[]>>
}

export default function FilterSurvey( { surveys, setFilteredSurvey } : FilterProps) {
  const [filteredCountry, setFilteredCountry] = useState<string[]>([]);
  const [filteredLocation, setFilteredLocation] = useState<string[]>([]);

  console.log("FilterSurvey.filteredCountry: ", filteredCountry.length)
  
  useEffect (() => {
    console.log("in useEffetct: ")
    setFilteredSurvey(
    surveys.filter((survey: AutoSurvey) => {  
      if (filteredCountry.length > 0) {
        console.log("length > 0 ")
        return filteredCountry.some((country) => {
          if (country == "" || country == null) {
            return survey.country;
          } else {
            return survey.country.toLowerCase().includes(country.toLowerCase());
          }
        })
      } else {
        console.log("show every survey: ")
        return survey;
      }
    })
    )
  }, [surveys.length])

  return(
    
    <section >
      
      

      {
        <FilterCountry surveys={surveys}  setFilteredCountry={setFilteredCountry} />
      }
      {
        //<FilterLocation surveys={surveys} setFilteredLocation={setFilteredLocation}/>
      }  
    </section>
  )
}