import { Fragment } from "react";
import Banner from "./Banner";
import LatestNews from "./LatestNews";
import Subscribe from "./Subscribe";
import TopSection from "./TopSection";


const Home = () => {

    return (
        <Fragment>
            <Banner />
            <TopSection />
            <LatestNews />
            <Subscribe />
        </Fragment>
    );

};


export default Home;