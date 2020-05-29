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

export{
    getCountryData
}