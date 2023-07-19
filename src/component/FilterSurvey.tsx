import { AutoSurvey } from "@/type/type";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FilterCountry from "./FilterCountry";
import FilterLocation from "./FilterLocation";
import FilterSurveyByCountry from "./FilterSurveyByCountry";

type FilterProps = {
  surveys: AutoSurvey[];
  setFilteredSurvey: Dispatch<SetStateAction<AutoSurvey[]>>
}

export default function FilterSurvey( { surveys, setFilteredSurvey } : FilterProps) {
  const [filterLocation, setFilterLocation] = useState<string[]>([]);
  const [filterCountry, setFilterCountry] = useState<string[]>([]);
  const [filterSurvey, setFilterSurvey] = useState<AutoSurvey[]>([]);


  useEffect (() => {
    setFilteredSurvey(
      //surveys
      filterSurvey
      // .filter((survey: AutoSurvey) => {  
      //   if (filterCountry.length > 0) {
      //     return filterCountry.some((country) => {
      //       if (country == "" || country == null) {
      //         return survey.country;
      //       } else {
      //         return survey.country.toLowerCase().includes(country.toLowerCase());
      //       }
      //     })
      //   } else {
      //     return survey;
      //   }
      // })

      .filter((survey: AutoSurvey) => {  

        if (filterLocation.length > 0) {
          return filterLocation.some((location) => {
            if (location == "" || location == null) {
              return survey.locationClustered;
            } else {
              return survey.locationClustered.toLowerCase().includes(location.toLowerCase());
            }
          })
        } else {
          return survey;
        }
      })



    )
  }, [filterSurvey.length, filterLocation.length, filterCountry.length])

  return(
    
    <section >
      
      {
        <FilterSurveyByCountry surveys={surveys}  setFilteredSurvey={setFilterSurvey} />
      }

      {
        //<FilterCountry surveys={surveys}  setFilteredCountry={setFilterCountry} />
      }
      {
        <FilterLocation surveys={filterSurvey} setFilteredLocation={setFilterLocation}/>
      }  
    </section>
  )
}