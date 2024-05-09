import "../styles/home.css";
import Banner from "../components/Banner";
import NewProduct from "../components/NewProduct";
import BlogCard from "../components/BlogCard";
import { data } from "../data/rawData";
import Card from "../components/Card";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
const Home = () => {
  const product = data.map((item) => {
    return (
      <div key={item.id} className="mx-2">
        <Card
          status={item.status}
          discount={item.discount}
          url={item.url}
          brand={item.brand}
          name={item.name}
          price={item.price}
        />
      </div>
    );
  });
  return (
    <>
      <Meta title="home" />
      <Banner />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-3">
              <h4 className="section-heading">Latest Product</h4>
            </div>
          </div>
          <div className="">
            <ProductCarousel products={product} />
          </div>
        </div>
      </section>
      <NewProduct />

      <section className="section">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center my-3">
              <h4 className="section-heading">Latest Blog Post</h4>
            </div>
          </div>
          <div className="row">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
