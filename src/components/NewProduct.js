import ProductCarousel from "../components/ProductCarousel";
import Card from "./Card";
import { data } from "../data/rawData";
const NewProduct = () => {
  const product = data.map((item) => {
    return (
      <div key={item.id} className="row mx-2">
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
    <section className="section px-4 mx-auto ">
      <div className="container text-center my-5 ">
        <div className="row ">
          <div className="d-flex justify-content-between">
            <ul className="nav nav-tabs text-center justify-content-start">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="#laptop"
                  data-bs-toggle="tab"
                  data-bs-target="#laps"
                  type="button "
                  role="tab"
                  aria-controls="laps"
                  aria-selected="true"
                >
                  Laptops
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="#Smartphones"
                  data-bs-toggle="tab"
                  data-bs-target="#phones"
                  type="button "
                  role="tab"
                  aria-controls="phones"
                  aria-selected="false"
                >
                  Smartphones
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="#cameras"
                  data-bs-toggle="tab"
                  data-bs-target="#cam"
                  type="button "
                  role="tab"
                  aria-controls="cam"
                  aria-selected="false"
                >
                  Cameras
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="#accessories"
                  data-bs-toggle="tab"
                  data-bs-target="#accessory"
                  type="button "
                  role="tab"
                  aria-controls="accessory"
                  aria-selected="false"
                >
                  Accessories
                </button>
              </li>
            </ul>
            <div className="buttons justify-content-end">{"<>"}</div>
          </div>
          <div className="tab-content mt-5" id="myTabContent">
            <div
              className="tab-pane fade show active "
              id="laps"
              role="tabpanel"
              aria-labelledby="laptop"
            >
              <div className="row">
                <ProductCarousel products={product} />
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="phones"
              role="tabpanel"
              aria-labelledby=" Smartphones"
            >
              <div className="row">
                <ProductCarousel products={product} />
              </div>
            </div>
            <div
              className="tab-pane fade "
              id="cam"
              role="tabpanel"
              aria-labelledby="cameras"
            >
              <div className="row">
                <ProductCarousel products={product} />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="accessory"
              role="tabpanel"
              aria-labelledby="accessories"
            >
              <div className="row">
                <ProductCarousel products={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
