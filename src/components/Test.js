import "../styles/priceRange.css";
import { useState } from "react";

const PriceRange = ({
  min = 0,
  max = 0,
  value = 100,
  buffered = 0,
  onChange,
  onDragStart,
  onDragEnd,
}) => {
  const [isDragged, setIsDragged] = useState(false);

  const handleChange = (e) => {
    if (!onChange) return;
    const { value } = e.target;
    onChange(+value);
    setIsDragged(true);
  };
  const handleDragStart = () => {
    if (onDragStart) onDragStart();
  };
  const handleDragEnd = (e) => {
    if (onDragEnd) onDragEnd(+e.currentTarget.value);
    setIsDragged(false);
  };
  const mapToRange = (value, min, max) => {
    // ensure the value is within the specified range
    value = Math.min(Math.max(value, min), max);
    // calculate the percentage of the value within the range
    const percentage = (value - min) / (max - min);
    // map the percentage to the range 0 to 100
    const mappedValue = percentage * 100;
    return mappedValue;
  };
  return (
    <div className="position-relative bg-warning d-flex align-items-center rounded-3">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        buffered={buffered}
        onChange={handleChange}
        className="range-slider"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        style={{ zIndex: isDragged ? 1 : 2 }}
      />
      <div
        style={{ width: mapToRange(buffered, min, max) + "%", height: "100%" }}
        className="position-absolute  bg-secondary rounded-3"
      ></div>
      <div
        style={{ width: mapToRange(value, min, max) + "%", height: "100%" }}
        className="position-absolute  bg-success "
      ></div>
    </div>
  );
};

export default PriceRange;
<div className="col-lg 6 col-sx-12">
  <div class="row">
    <div class="item">
     <h1>Hp elite note book</h1>
      <div class="content">
        <div class="rating">
                            <div class="stars">
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star-half"></i>
                            </div>
                            <div class="mini-text"/>30 reviews</div>
                            <a href="#" class="add-review mini-text"/>Review now</a>
                          </div>
                          <div class="stock-count">
                            <span class="available">In stock</span>
                          </div>
                          <div class="price">
                            <span class="current">£80,000</span>
                            <span class="normal">£120,000</span>
                          </div>
                          <div class="colors">
                            <p>Select Color</p>
                            <div class="variant">
                              <form action="">
                                <p>
                                  <input type="radio" name="color" id="color-black"/>
                                  <label for="color-black" class="circle"></label>
                                </p>
                                <p>
                                  <input type="radio" name="color" id="color-red"/>
                                  <label for="color-red" class="circle"></label>
                                </p>
                                <p>
                                  <input type="radio" name="color" id="color-white"/>
                                  <label for="color-white" class="circle"></label>
                                </p>
                              </form>
                            </div>
                          </div>
                          <div class="actions">
                            <div class="qty-control flex-item">
                              <button class="minus circle">-</button>
                              <input type="text" value="1"/>
                              <button class="plus circle">+</button>
                            </div>
                            <div class="add-to-cart">
                              <button type="button" class="primary-button">
                                Add to cart
                              </button>
                            </div>
                            <div class="wishlist">
                              <ul class="flex-item second-links">
                                <li>
                                  <a href="#">
                                    <span class="icon-large"><i class="fa-solid fa-heart"></i></span>
                                    <span>Wishlist</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span class="icon-large"><i class="fa-solid fa-share"></i></span>
                                    <span>Share</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="description collapse">
                            <ul>
                              <li class="has-drop-down expand">
                                <a href="#0" class="icon-small">Information</a>
                                <ul class="content">
                                  <li><span>Brand : </span><span>Hp</span></li>
                                  <li>
                                    <span>Speed :</span><span>3.4hz</span>
                                  </li>
                                  <li>
                                    <span>Graphic:</span><span>intel HD graphic</span>
                                  </li>
                                  <li><span>Processor:</span>intel</li>
                                </ul>
                              </li>
                              <li class="has-drop-down">
                                <a href="#0" class="icon-small">Description</a>
                                <div class="content">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Reprehenderit eveniet
                                    fugit porro, sed a dicta excepturi
                                    voluptatibus magni optio voluptatem earum,
                                    voluptate ea recusandae esse! Velit, illum?
                                    Necessitatibus, nisi quam?
                                  </p>
                                </div>
                              </li>
                              <li class="has-drop-down expand">
                                <Link class="icon-small">Reviews
                                              <span class="mini-text" >20,000</span>
                                      </Link>
                                <div class="content">
                                  <div class="reviews">
                                    <h4>Customer's reviews</h4>
                                    <div class="review-block">
                                      <div class="review-block-head">
                                        <div class="flex-item">
                                          <span class="rate-count">3.9</span>
                                          <span>3,456 reviews</span>
                                        </div>
                                        <a href="#review-form" class="secondary-button">Write Reviews</a>
                                      </div>
                                      <div class="review-block-body">
                                        <ul>
                                          <li class="item">
                                            <div class="review-form">
                                              <p class="person">
                                                Review by John
                                              </p>
                                              <p class="mini-tex">
                                                On 06/09/2023
                                              </p>
                                            </div>
                                            <div class="review-rating rating">
                                              <div class="stars">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half"></i>
                                              </div>
                                            </div>
                                            <div class="review-title">
                                              <p>
                                                Very good battery and high
                                                quality graphic
                                              </p>
                                            </div>
                                            <div class="review-texts">
                                              <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Pariatur recusandae consectetur
                                                suscipit! Dicta culpa,
                                                necessitatibus ratione rem
                                                corporis non exercitationem.
                                                Accusamus quibusdam iste earum
                                                dicta commodi provident fugiat
                                                voluptas magni?
                                              </p>
                                            </div>
                                          </li>
                                          <li class="item">
                                            <div class="review-form">
                                              <p class="person">
                                                Review by John
                                              </p>
                                              <p class="mini-tex">
                                                On 06/09/2023
                                              </p>
                                            </div>
                                            <div class="review-rating rating">
                                              <div class="stars">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half"></i>
                                              </div>
                                            </div>
                                            <div class="review-title">
                                              <p>
                                                Very good battery and high
                                                quality graphic
                                              </p>
                                            </div>
                                            <div class="review-texts">
                                              <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Pariatur recusandae consectetur
                                                suscipit! Dicta culpa,
                                                necessitatibus ratione rem
                                                corporis non exercitationem.
                                                Accusamus quibusdam iste earum
                                                dicta commodi provident fugiat
                                                voluptas magni?
                                              </p>
                                            </div>
                                          </li>
                                          <li class="item">
                                            <div class="review-form">
                                              <p class="person">
                                                Review by John
                                              </p>
                                              <p class="mini-tex">
                                                On 06/09/2023
                                              </p>
                                            </div>
                                            <div class="review-rating rating">
                                              <div class="stars">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half"></i>
                                              </div>
                                            </div>
                                            <div class="review-title">
                                              <p>
                                                Very good battery and high
                                                quality graphic
                                              </p>
                                            </div>
                                            <div class="review-texts">
                                              <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Pariatur recusandae consectetur
                                                suscipit! Dicta culpa,
                                                necessitatibus ratione rem
                                                corporis non exercitationem.
                                                Accusamus quibusdam iste earum
                                                dicta commodi provident fugiat
                                                voluptas magni?
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                        <div class="second-links">
                                          <a href="#" class="view-all">View all reviews
                                            <i class="fa-solid fa-caret-right"></i></a>
                                        </div>
                                      </div>
                                      <div id="review-form" class="review-form">
                                        <h4>write a Review</h4>
                                        <div class="rating">
                                          <p>Are you satisfied enough?</p>
                                          <div class="rate-this">
                                            <input type="radio" name="rating"/><label for="star5" id="star5"><i class="fa-solid fa-star"></i></label>
                                            <input type="radio" name="rating"/><label for="star4" id="star4"><i class="fa-solid fa-star"></i></label>
                                            <input type="radio" name="rating"/><label for="star3" id="star3"><i class="fa-solid fa-star"></i></label>
                                            <input type="radio" name="rating"/><label for="star2" id="star2"><i class="fa-solid fa-star"></i></label>
                                            <input type="radio" name="rating"/><label for="star1" id="star1"><i class="fa-solid fa-star"></i></label>
                                          </div>
                                        </div>
                                        <form action="#">
                                          <p>
                                            <label>Name</label>
                                            <input type="text"/>
                                          </p>
                                          <p>
                                            <label>Summery</label>
                                            <input type="text"/>
                                          </p>
                                          <p>
                                            <label>Summery</label>
                                            <textarea cols="30" rows="10"></textarea>
                                          </p>
                                          <p>
                                            <a href="#" class="primary-button">Submit review</a>
                                          </p>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
  </div>                
</div> 