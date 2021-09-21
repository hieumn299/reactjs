import React, { useState } from "react";
import CategoryItem from "./Category/CategoryItem";
import RefineItem from "./RefineBox/RefineItem";
import RatingList from "./RefineBox/Rating/RatingList";
import PriceList from "./RefineBox/Price/PriceList";
import FormSearchPrice from "../FormSearchPrice/FormSearchPrice";
import _ from "lodash";
import FormSearchBrand from "../FormSearchBrand/FormSearchBrand";

function SideBar(props) {
    const [clear, setClear] = useState(false);

    const handleChangeCategories = (query) => {
        props.handleChangeCategories(query);
    };

    const handleClearFilter = () => {
        props.handleClearFilter(true);
        setClear(true);
        setTimeout(() => {
            setClear(false);
        }, 1000);
    };
    const handleChangeType = (type) => {
        props.handleChangeType(type);
    };
    const handleChangeBrand = (brand) => {
        props.handleChangeBrand(brand);
    };
    const handleChangeRating = (ratings) => {
        props.handleChangeRating(ratings);
    };
    const handlePrice = (start, end) => {
        props.handlePrice(start, end);
    };
    const handleSearchBrand = (term) => {
        props.handleSearchBrand(term);
    };
    const getCategoriesAll = (props) => {
        if (props) {
            const data = props.productsAll;
            if (data.length > 0) {
                let result = [];
                let list = [];
                data.map((item) => {
                    if (item.hierarchicalCategories.lvl1) {
                        result.push(
                            item.hierarchicalCategories.lvl1.split(" > ")
                        );
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
        }
    };
    let categoriesList = getCategoriesAll(props);
    const renderCategoriesList = (data) => {
        if (data) {
            let result = _.sortBy(data, ["lvl0"])
                .slice(0, 10)
                .map((item) => {
                    return (
                        <CategoryItem
                            handleChangeCategories={handleChangeCategories}
                            category={item}
                            key={item.lvl0}
                        ></CategoryItem>
                    );
                });
            return result;
        }
    };
    const handleSearchPrice = (data) => {
        props.handleSearchPrice(data);
    };
    const getRefine = (props, type = "types") => {
        if (props) {
            let data = props.productsAll;
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
                                handleChangeRefine={handleChangeType}
                                refineItem={item}
                                key={item.item}
                                active={
                                    props.filter.type.includes(item.item)
                                        ? true
                                        : false
                                }
                            ></RefineItem>
                        );
                    });
                return list;
            } else {
                let arr = _.sortBy(result)
                    .filter((item) => {
                        const name = item.item.toLowerCase();
                        return name.includes(props.filter.searchBrand);
                    })
                    .slice(0, 5);
                let list = arr.map((item) => {
                    return (
                        <RefineItem
                            handleChangeRefine={handleChangeBrand}
                            refineItem={item}
                            key={item.item}
                            active={
                                props.filter.brand.includes(item.item)
                                    ? true
                                    : false
                            }
                        ></RefineItem>
                    );
                });
                return list;
            }
        }
    };
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
                    <div className="refine-box__list">
                        {getRefine(props, "types")}
                    </div>
                </div>
                <div className="refine-box mt-3">
                    <div className="refine-box__title">Brand</div>
                    <FormSearchBrand
                        handleSearchBrand={handleSearchBrand}
                    ></FormSearchBrand>
                    <div className="refine-box__list">
                        {getRefine(props, "brands")}
                    </div>
                </div>
                <div className="refine-box mt-3">
                    <div className="refine-box__title">Ratings</div>
                    <RatingList
                        filterRating={handleChangeRating}
                        ratings="4"
                    ></RatingList>
                    <RatingList
                        filterRating={handleChangeRating}
                        ratings="3"
                    ></RatingList>
                    <RatingList
                        filterRating={handleChangeRating}
                        ratings="2"
                    ></RatingList>
                    <RatingList
                        filterRating={handleChangeRating}
                        ratings="1"
                    ></RatingList>
                </div>
                <div className="refine-box mt-3">
                    <div className="refine-box__title">Prices</div>
                    <PriceList
                        handlePrice={handlePrice}
                        isClear={clear ? true : false}
                    ></PriceList>
                    <div className="form-search-price">
                        <FormSearchPrice
                            handleSearchPrice={handleSearchPrice}
                            isClear={clear ? true : false}
                        ></FormSearchPrice>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SideBar;
