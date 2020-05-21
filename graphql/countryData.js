import React from 'react';
import gql from 'graphql-tag';

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

