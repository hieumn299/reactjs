import NavbarMain from "./components/Navbar/NavbarMain";
import "./App.scss";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./reducer/products.slice";
import { getTotalCount } from "./reducer/totalPage.slice";

const App = () => {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(filter));
        dispatch(getTotalCount(filter));
    }, [dispatch, filter]);
    return (
        <>
            <NavbarMain></NavbarMain>
            <ContentWrapper></ContentWrapper>
        </>
    );
};

export default App;
