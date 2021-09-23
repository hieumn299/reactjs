import React, { useEffect, useState } from "react";
import CategoryItem from "./Category/CategoryItem";
import RefineItem from "./RefineBox/RefineItem";
import RatingList from "./RefineBox/Rating/RatingList";
import PriceList from "./RefineBox/Price/PriceList";
import FormSearchPrice from "../FormSearchPrice/FormSearchPrice";
import _ from "lodash";
import FormSearchBrand from "../FormSearchBrand/FormSearchBrand";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../reducer/filter.slice";
import { clearFilterSidebar } from "../../reducer/sidebar.slice";
import { getProductsSidebar } from "../../reducer/productsSidebar.slice";

function SideBar() {
    const dispatch = useDispatch();
    const productsSidebar = useSelector(
        (state) => state.productsSidebar.products
    );
    const filter = useSelector((state) => state.filter);
    const sidebar = useSelector((state) => state.sidebar);
    const [clear, setClear] = useState(false);

    const handleClearFilter = () => {
        dispatch(clearFilter(true));
        dispatch(clearFilterSidebar(true));
        setClear(true);
        setTimeout(() => {
            setClear(false);
        }, 1000);
    };
    const getCategoriesAll = () => {
        const data = productsSidebar;
        if (data.length > 0) {
            let result = [];
            let list = [];
            data.map((item) => {
                if (item.hierarchicalCategories.lvl1) {
                    result.push(item.hierarchicalCategories.lvl1.split(" > "));
                } else {
                    result.push(item.categories);
                }
                return result;
            });
            result.map((item) => {
                return list.push({
                    lvl0: item[0],
                    lvl1: item[1] ? item[1] : ""
                });
            });
            let term;
            term = _.uniqBy(list, "lvl1");
            const categoriesList = [];
            for (const item of term) {
                const index = categoriesList.findIndex(
                    (itemCategory) => itemCategory.lvl0 === item.lvl0
                );
                if (index === -1) {
                    const newItem = {
                        ...item,
                        lvl1: [item.lvl1]
                    };
                    categoriesList.push(newItem);
                } else {
                    categoriesList[index].lvl1.push(item.lvl1);
                }
            }
            return categoriesList;
        }
    };
    let categoriesList = getCategoriesAll();
    const renderCategoriesList = (data) => {
        if (data) {
            let result = _.sortBy(data, ["lvl0"])
                .slice(0, 10)
                .map((item) => {
                    return (
                        <CategoryItem
                            category={item}
                            key={item.lvl0}
                            isClear={clear ? true : false}
                        ></CategoryItem>
                    );
                });
            return result;
        }
    };
    const getRefine = (type = "types") => {
        let data = productsSidebar;
        let result = [];
        if (data.length > 0) {
            if (type === "types") {
                data.map((item) => {
                    return result.push({
                        id: item.objectID,
                        item: item.type
                    });
                });
            } else {
                data.map((item) => {
                    return result.push({
                        id: item.objectID + "a",
                        item: item.brand
                    });
                });
            }
        }
        result = _.uniqBy(result, "item");
        if (type === "types") {
            let list = _.sortBy(result)
                .slice(0, 5)
                .map((item) => {
                    return (
                        <RefineItem
                            type="type"
                            refineItem={item}
                            key={item.item}
                            active={
                                filter.type.includes(item.item) ? true : false
                            }
                        ></RefineItem>
                    );
                });
            return list;
        } else {
            let arr = _.sortBy(result)
                .filter((item) => {
                    const name = item.item.toLowerCase();
                    return name.includes(filter.searchBrand);
                })
                .slice(0, 5);
            let list = arr.map((item) => {
                return (
                    <RefineItem
                        type="brand"
                        refineItem={item}
                        key={item.item}
                        active={filter.brand.includes(item.item) ? true : false}
                    ></RefineItem>
                );
            });
            return list;
        }
    };
    useEffect(() => {
        dispatch(getProductsSidebar(sidebar));
    }, [dispatch, sidebar]);
    return (
        <div className="sidebar">
            <div className="clear-all d-flex justify-content-center">
                <button
                    className="btn rounded-pill btn-clear btn-primary px-4"
                    onClick={handleClearFilter}
                >
                    Clear filter
                </button>
            </div>
            <section className="filter-wrapper border-bottom py-4">
                <div className="filter-wrapper__title pb-2">Categories</div>
                <div className="category-list">
                    {renderCategoriesList(categoriesList)}
                </div>
            </section>
            <section className="filter-wrapper border-bottom py-4">
                <div className="filter-wrapper__title pb-2">Refine by</div>
                <div className="refine-box mt-3">
                    <div className="refine-box__title">Type</div>
                    <div className="refine-box__list">{getRefine("types")}</div>
                </div>
                <div className="refine-box mt-3">
                    <div className="refine-box__title">Brand</div>
                    <FormSearchBrand></FormSearchBrand>
                    <div className="refine-box__list">
                        {getRefine("brands")}
                    </div>
                </div>
                <div className="refine-box mt-3">
                    <div className="refine-box__title">Ratings</div>
                    <RatingList ratings="4"></RatingList>
                    <RatingList ratings="3"></RatingList>
                    <RatingList ratings="2"></RatingList>
                    <RatingList ratings="1"></RatingList>
                </div>
                <div className="refine-box mt-3">
                    <div className="refine-box__title">Prices</div>
                    <PriceList isClear={clear ? true : false}></PriceList>
                    <div className="form-search-price">
                        <FormSearchPrice
                            isClear={clear ? true : false}
                        ></FormSearchPrice>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SideBar;
