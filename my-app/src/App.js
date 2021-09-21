// import NavbarMain from "./components/Navbar/NavbarMain";
// import "./App.scss";
// import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
// import productsAPI from "./api/productsAPI";
// import { useEffect, useState } from "react";

// const App = () => {
//     const [productsAll, setProductsAll] = useState([]);
//     const [productsWithParams, setProductsWithParams] = useState([]);
//     const [totalCount, setTotalCount] = useState();
//     const [sidebar, setSidebar] = useState({
//         type: [],
//         brand: [],
//         categories_like: null,
//         name_like: "",
//         _sort: "price",
//         _order: ""
//     });

//     const [filter, setFilter] = useState({
//         _page: 1,
//         _limit: 12,
//         type: [],
//         brand: [],
//         rating: [],
//         categories_like: null,
//         price_gte: [],
//         price_lte: [],
//         searchBrand: "",
//         name_like: "",
//         _sort: "price",
//         _order: ""
//     });

//     const handleClearFilter = (stt) => {
//         if (stt === true) {
//             setSidebar({
//                 type: [],
//                 brand: [],
//                 categories_like: null,
//                 name_like: "",
//                 _sort: "price",
//                 _order: ""
//             });

//             setFilter({
//                 _page: 1,
//                 _limit: 12,
//                 type: [],
//                 brand: [],
//                 rating: [],
//                 categories_like: null,
//                 price_gte: [],
//                 price_lte: [],
//                 searchBrand: "",
//                 name_like: "",
//                 _sort: "price",
//                 _order: ""
//             });
//         }
//     };

//     const handleChangeCategories = (query) => {
//         setFilter({
//             ...filter,
//             categories_like: query
//         });
//         setSidebar({
//             ...sidebar,
//             categories_like: query
//         });
//     };

//     const handlePageChange = (page) => {
//         setFilter({
//             ...filter,
//             _page: page
//         });
//     };
//     const handleChangeType = (type) => {
//         const index = filter.type.indexOf(type);
//         if (index < 0) {
//             let newFilter = filter.type.push(type);
//             let newFilter2 = sidebar.type.push(type);
//             setFilter({
//                 ...filter,
//                 filter: newFilter
//             });
//             setSidebar({
//                 ...sidebar,
//                 filter: newFilter2
//             });
//         } else {
//             let newFilter = filter.type.splice(index, 1);
//             let newFilter2 = sidebar.type.splice(index, 1);
//             setFilter({
//                 ...filter,
//                 filter: newFilter
//             });
//             setSidebar({
//                 ...sidebar,
//                 filter: newFilter2
//             });
//         }
//     };
//     const handleChangeBrand = (brand) => {
//         const index = filter.brand.indexOf(brand);
//         if (index < 0) {
//             let newFilter = filter.brand.push(brand);
//             let newFilter2 = sidebar.brand.push(brand);
//             setFilter({
//                 ...filter,
//                 filter: newFilter
//             });
//             setSidebar({
//                 ...sidebar,
//                 filter: newFilter2
//             });
//         } else {
//             let newFilter = filter.brand.splice(index, 1);
//             let newFilter2 = sidebar.brand.splice(index, 1);
//             setFilter({
//                 ...filter,
//                 filter: newFilter
//             });
//             setSidebar({
//                 ...sidebar,
//                 filter: newFilter2
//             });
//         }
//     };

//     const handleChangeRating = (rating) => {
//         const index = filter.rating.indexOf(rating);
//         if (index < 0) {
//             let newFilter = filter.rating.push(rating);
//             setFilter({
//                 ...filter,
//                 filter: newFilter
//             });
//         } else {
//             let newFilter = filter.rating.splice(index, 1);
//             setFilter({
//                 ...filter,
//                 filter: newFilter
//             });
//         }
//     };

//     const handlePrice = (start, end) => {
//         const index = filter.price_gte.indexOf(start);
//         const index2 = filter.price_lte.indexOf(end);
//         if (index < 0 && index2 < 0) {
//             filter.price_gte.splice(0, 1, start);
//             filter.price_lte.splice(0, 1, end);
//             setFilter({
//                 ...filter
//             });
//         } else {
//             filter.price_gte.splice(index, 1);
//             filter.price_lte.splice(index, 1);
//             setFilter({
//                 ...filter
//             });
//         }
//     };

//     const handleSearchBrand = (term) => {
//         setFilter({
//             ...filter,
//             searchBrand: term
//         });
//     };

//     const handleSearchProduct = (term) => {
//         setFilter({
//             ...filter,
//             name_like: term
//         });
//         setSidebar({
//             ...sidebar,
//             name_like: term
//         });
//     };

//     const handleChangeSort = (value) => {
//         setFilter({
//             ...filter,
//             _order: value
//         });
//     };

//     const handleSearchPrice = (data) => {
//         filter.price_gte.splice(0, 1, data.start);
//         filter.price_lte.splice(0, 1, data.end);
//         setFilter({
//             ...filter
//         });
//     };
//     useEffect(() => {
//         const getProduct = async () => {
//             try {
//                 const productsAll = await productsAPI.getAllProducts(sidebar);
//                 const productsWithParams = await productsAPI.getProducts(
//                     filter
//                 );
//                 const totalCount = await productsAPI.getTotalCount(filter);
//                 setTotalCount(Number(totalCount));
//                 setProductsWithParams(productsWithParams);
//                 setProductsAll(productsAll);
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         getProduct();
//     }, [filter, sidebar]);
//     return (
//         <>
//             <NavbarMain handleSearchProduct={handleSearchProduct}></NavbarMain>
//             <ContentWrapper
//                 productsWithParams={productsWithParams}
//                 productsAll={productsAll}
//                 totalCount={totalCount}
//                 filter={filter}
//                 handlePageChange={handlePageChange}
//                 handleChangeCategories={handleChangeCategories}
//                 handleChangeType={handleChangeType}
//                 handleChangeBrand={handleChangeBrand}
//                 handleChangeRating={handleChangeRating}
//                 handlePrice={handlePrice}
//                 handleSearchBrand={handleSearchBrand}
//                 handleChangeSort={handleChangeSort}
//                 handleSearchPrice={handleSearchPrice}
//                 handleClearFilter={handleClearFilter}
//             ></ContentWrapper>
//         </>
//     );
// };

// export default App;
