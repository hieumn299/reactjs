import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../../reducer/filter.slice";
import { changeCategorySidebar } from "../../../reducer/sidebar.slice";

function CategoryItem({ category, isClear }) {
    const dispatch = useDispatch();
    const [checkActive, setCheckActive] = useState();
    const [checkItem, setCheckItem] = useState(false);
    const [toggleFilter, setToggleFilter] = useState({
        lvl0: "",
        lvl1: ""
    });
    if (
        isClear === true &&
        toggleFilter.lvl0 !== "" &&
        toggleFilter.lvl1 !== ""
    ) {
        setCheckActive();
        setToggleFilter({
            lvl0: "",
            lvl1: ""
        });
        setCheckItem(false);
    }
    const handleClick = (item) => {
        if (item !== toggleFilter.lvl0) {
            setToggleFilter({
                ...toggleFilter,
                lvl0: item
            });
            dispatch(changeCategory(item));
            dispatch(changeCategorySidebar(item));
        } else {
            setToggleFilter({
                ...toggleFilter,
                lvl0: ""
            });
            dispatch(changeCategory(""));
            dispatch(changeCategorySidebar(""));
        }
        setCheckItem(!checkItem);
    };
    const handleFilterCategories = (item) => {
        if (item === checkActive) {
            setCheckActive(null);
        } else {
            setCheckActive(item);
        }
        if (item !== toggleFilter.lvl1) {
            setToggleFilter({
                ...toggleFilter,
                lvl1: item
            });
            dispatch(changeCategory(item));
            dispatch(changeCategorySidebar(item));
        } else {
            setToggleFilter({
                ...toggleFilter,
                lvl1: ""
            });
            dispatch(changeCategory(toggleFilter.lvl0));
            dispatch(changeCategorySidebar(toggleFilter.lvl0));
        }
    };
    const { lvl0, lvl1 } = category;
    const renderCategoriesSmall = (data) => {
        let result = "";
        if (data.length > 0) {
            result = data.map((item) => {
                if (item !== "") {
                    return (
                        <div
                            className={`category-item--lvl1 py-2 mt-3 ${
                                item === checkActive ? "active" : "inactive"
                            }`}
                            key={item.replace(/\s+/g, "")}
                            onClick={() => handleFilterCategories(item)}
                        >
                            <i className="fas fa-chevron-right"></i>
                            <span>{item}</span>
                        </div>
                    );
                }
                return "";
            });
        }
        return result;
    };
    return (
        <div className="category-item py-2">
            <div
                className={`d-flex align-items-center ${
                    checkItem ? "active" : ""
                }`}
                onClick={() => handleClick(lvl0)}
            >
                <i className="fas fa-chevron-right"></i>
                <span>{lvl0}</span>
            </div>
            <div
                className={`category-item__list--lvl1 ${
                    checkItem ? "active" : ""
                }`}
            >
                {renderCategoriesSmall(lvl1)}
            </div>
        </div>
    );
}

export default CategoryItem;
