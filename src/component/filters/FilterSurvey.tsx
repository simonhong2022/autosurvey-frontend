import { Survey } from "@/type/type";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import FilterSurveyByCountry from "./FilterSurveyByCountry";
import { OrgContext } from "@/helper/context";
import FilterSurveyByYear from "./FilterSurveyByYear";
import FilterSurveyByLocation from "./FilterSurveyByLocation";

type FilterProps = {
  propSurveys: Survey[];
  propSetFilteredSurveys: Dispatch<SetStateAction<Survey[]>>
}

export default function FilterSurvey( { propSurveys, propSetFilteredSurveys } : FilterProps) {
  const {filterYears, filterCountries, filterLocations} = useContext(OrgContext);
  
  const [fromYear, setFromYear] = useState<Survey[]>([]);
  const [fromCountry, setFromCountry] = useState<Survey[]>([]);
  const [filterSurveys, setFilterSurveys] = useState<Survey[]>([]);

  useEffect (() => {
    if (filterYears.length == 0 && filterCountries.length == 0 && filterLocations.length == 0) {
      setFilterSurveys(propSurveys)
    } 
    if (filterYears.length != 0 && filterCountries.length == 0 && filterLocations.length == 0) {
      setFilterSurveys(fromYear)
    } 
    if (filterYears.length != 0 && filterCountries.length != 0 && filterLocations.length == 0) {
      setFilterSurveys(fromCountry)
    } 
    propSetFilteredSurveys(
      filterSurveys
    )  
  }, [propSurveys.length, filterSurveys.length, fromYear.length, fromCountry.length, filterLocations.length, filterCountries.length]) 

  return(
    <section >      
        <FilterSurveyByYear propSurveys={propSurveys} propSetFilteredSurvey={setFromYear} />    
      {
        filterYears.length > 0 ?
        <>
          {
            <>
            <FilterSurveyByCountry propSurveys={fromYear} propSetFilteredSurveys={setFromCountry} />
            {
              filterCountries.length > 0 ?
              <>
              <FilterSurveyByLocation propSurveys={fromCountry} propSetFilteredSurveys={setFilterSurveys} />
              </>
              : null
            }  
            </>
          }           
        </>
        : null
      }  
    </section>
  )
}