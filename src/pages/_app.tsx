import '@/styles/home.css'
import '@/styles/orgcard.css'
import '@/styles/surveycard.css'
import '@/styles/specificsurvey.css'
import 'semantic-ui-css/semantic.min.css'
import '@/styles/about.css'
import '@/styles/login.css'
import '@/styles/userInfo.css'
import '@/styles/offline.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Survey, Organization, Pagination, UserDto, ClickedCountry } from '../type/type'
import { OrgContext } from '@/helper/context'
import { initClickedCountry, initOrg, initPagination, initSurvey, initUserDto } from '@/helper/initializer'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [organization, setOrganization] = useState<Organization>(initOrg);
  const [survey, setSurvey] = useState<Survey>(initSurvey);
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [signUpStatus, setSignUpStatus] =useState<boolean>(false);
  const [userNameAuth, setUserNameAuth] = useState<string>("");
  const [filterYears, setFilterYears] = useState<string[]>([]);
  const [filterCountries, setFilterCountries] = useState<string[]>([]);
  const [filterLocations, setFilterLocations] = useState<string[]>([]);
  const [filteredSurveys, setFilteredSurveys] = useState<Survey[]>([]);
  const [isFilterSet, setIsFilterSet] =useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>(initPagination);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [userDto, setUserDto] = useState<UserDto>(initUserDto);
  const [clickedCountry, setClickedCountry] = useState<ClickedCountry>(initClickedCountry);
  const [clickedCountries, setClickedCountries] = useState<ClickedCountry[]>([]);

  return (

      <OrgContext.Provider value={{ 
        organization, setOrganization, 
        organizations, setOrganizations,
        survey, setSurvey, 
        surveys, setSurveys, 
        signUpStatus, setSignUpStatus, 
        userNameAuth, setUserNameAuth, 
        filterYears, setFilterYears,
        filterCountries, setFilterCountries,
        filterLocations, setFilterLocations,
        filteredSurveys, setFilteredSurveys,
        isFilterSet, setIsFilterSet,
        pagination, setPagination,
        userDto, setUserDto,
        clickedCountry, setClickedCountry,
        clickedCountries, setClickedCountries
        }}>
      <Component {...pageProps} />
      </OrgContext.Provider>

  )
}
