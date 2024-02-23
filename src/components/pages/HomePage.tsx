import { HomeData } from "../../models/Product";
import { getHomeData } from "../../utils/product";
import About from "../organisms/About";
import CategoryList from "../organisms/CategoryList";
import FeaturedProduct from "../organisms/Home/FeaturedProduct";
import Section1 from "../organisms/Home/Section1";
import Section2 from "../organisms/Home/Section2";
import Section3 from "../organisms/Home/Section3";


const HomePage = () => {
  const data: HomeData[] = getHomeData();
  return (
    <div className="bg-secondary">
      <FeaturedProduct product={data[0]} />
      <div className="page-container">
        <CategoryList />
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <Section1 product={data[1]} />
          <Section2 product={data[2]} />
          <Section3 product={data[3]} />
        </div>
        <About />
      </div>
    </div>);
};

export default HomePage;

