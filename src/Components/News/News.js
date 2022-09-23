import { Fragment } from "react";
import NewsBanner from "./NewsBanner";
import NewsCard from "./NewsCard";


const News = () => {

    return (
        <Fragment>
            <NewsBanner />
            <NewsCard />
        </Fragment>
    );

};

export default News;