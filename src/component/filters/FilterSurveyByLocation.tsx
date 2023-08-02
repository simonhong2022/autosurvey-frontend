import { Survey } from "@/type/type";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FilterLocation from "./FilterLocation";

type FilterProps = {
  propSurveys: Survey[];
  propSetFilteredSurveys: Dispatch<SetStateAction<Survey[]>>
  propSetFilteredLocations: Dispatch<SetStateAction<string[]>>
}

export default function FilterSurveyByLocation( { propSurveys, propSetFilteredSurveys, propSetFilteredLocations } : FilterProps) {
  const [filterLocation, setFilterLocation] = useState<string[]>([]);
  
  console.log("propSurveys byLocaitons: ", propSurveys)

  useEffect (() => {
    propSetFilteredLocations(filterLocation);
    propSetFilteredSurveys(
      propSurveys.filter((survey: Survey) => {  
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
  }, [propSurveys.length, filterLocation.length])

  return(
    
    
    <FilterLocation propSurveys={propSurveys} propSetFilteredLocations={setFilterLocation} />
      
  )
}