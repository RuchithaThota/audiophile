import { HomeData } from "../models/Product";
import { getHomeData } from "../utils/product";
import About from "../components/organisms/About";
import CategoryList from "../components/organisms/CategoryList";
import FeaturedProduct from "../components/organisms/Home/FeaturedProduct";
import Section1 from "../components/organisms/Home/Section1";
import Section2 from "../components/organisms/Home/Section2";
import Section3 from "../components/organisms/Home/Section3";
import MobileMenu from "../components/molecules/MobileMenu";


const HomePage = () => {
  const data: HomeData[] = getHomeData();
  return (
    <div className="bg-secondary relative">
      <div className="lg:hidden">
        <MobileMenu />
      </div>
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

