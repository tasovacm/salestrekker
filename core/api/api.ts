import {IncomeResource, StampDuty} from "../../model/classes/StampDuty";
import {queries} from "./queries";

const axios = require('axios');

const config = {
    method: 'post',
    url: 'https://dev-ll.salestrekker.com:9000/query',
    headers: {
        'Content-Type': 'application/json'
    },
    data: {}
};
export const api = {
    stampDuty: (resource: StampDuty) => {
        config.data = JSON.stringify({
            query: queries.stampDuty,
            variables: resource
        });
        return axios(config).then((response) => {
            return response.data;
        })
            .then(response => {
                return response
            })
            .catch(function (error) {
                console.log(error);
            });

    },

    getLenders: (resource: any) => {
        config.data = JSON.stringify({
            query: queries.getAllLenders,
            variables: resource
        });
        return axios(config).then((response) => {
            return response.data;
        })
            .then(response => {
                return response
            })
            .catch(function (error) {
                console.log(error);
            });

    },
    income: (resource: IncomeResource) => {
        config.data = JSON.stringify({
            query: queries.income,
            variables: resource
        });
        console.log(resource);
        return axios(config).then((response) => {
            return response.data;
        })
            .then(response => {
                return response
            })
            .catch(function (error) {
                console.log(error);
            });

    }
};

