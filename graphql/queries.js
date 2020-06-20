import {gql} from 'apollo-boost'

const getCountryData = gql`

query {
    countries {
        country
        countryInfo {
            _id
            flag
            iso3
            iso2
        }
    }
}

`
const getCountriesQuery = gql`
{
    countries{
        country
        countryInfo{
            _id
            lat
            long
            flag
            iso3
            iso2
        }
        continent
        result {
            tests
            cases
            todayCases
            deaths
            todayDeaths
            recovered
            active
            critical
            casesPerOneMillion
            deathsPerOneMillion
            testsPerOneMillion
            updated
        }
    }
}
`;

const globalData = gql`
   query{
    globalTotal {
        cases
        todayCases
        todayDeaths
        recovered
        deaths
        active
    }
   }
`


export{
    getCountryData,
    getCountriesQuery,
    globalData
}