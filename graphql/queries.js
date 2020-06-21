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
const userMutation = gql`
    mutation($phone: String!){ 
        loginUser(input: {
        phone: $phone
        }){
        success
        message
        }
    }
  
`

const validation = gql`
    mutation($phone: String!, $otp: String!){ 
        validateLoginUser(input: {
        phone: $phone
        otp: $otp
        }){
        mobileToken
        }
    }

`


export{
    getCountryData,
    userMutation,
    validation
}   