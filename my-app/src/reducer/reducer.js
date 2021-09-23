import filterReducer from "./filter.slice";
import productsReducer from "./products.slice";
import productsSidebarReducer from "./productsSidebar.slice";
import sidebarReducer from "./sidebar.slice";
import totalPageReducer from "./totalPage.slice";

const rootReducer = {
    filter: filterReducer,
    products: productsReducer,
    totalPage: totalPageReducer,
    sidebar: sidebarReducer,
    productsSidebar: productsSidebarReducer
};

export default rootReducer;
