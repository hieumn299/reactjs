import configAPI from "./configAPI";

const productsAPI = {
    getAllProducts: (params) => {
        const url = "/products/";
        return configAPI.get(url, { params }).then(function (response) {
            return response.data;
        });
    },
    getProducts: (params) => {
        const url = "/products/";
        return configAPI.get(url, { params }).then(function (response) {
            return response.data;
        });
    },
    getTotalCount: (params) => {
        const url = "/products/";
        return configAPI.get(url, { params }).then(function (response) {
            return response.headers["x-total-count"];
        });
    }
};

export default productsAPI;
