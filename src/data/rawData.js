import LapTop from "../images/images.jpeg";
import Battery from "../images/battery1.jpeg";
import Speaker from "../images/newspeaker.jpeg";
import Blog from "../images/post-1.jpg";
import Iphone from "../images/phone2.jpeg";

export const data = [
  {
    id: 1,
    url: LapTop,
    name: "Colorful sneakers",
    price: "30",
    discountedPrice: "$19.99",
    color: "gold",
    description: "NEW COLLECTION UP TO 50% OFF",
    brand: "Sonny",
    category: "accessory",
    discount: 5,
    status: "new",
  },
  {
    id: 2,
    url: Blog,
    name: "long lasting battery",
    price: "30",
    discountedPrice: "$19.99",
    color: "black",
    description: "HOT DEAL THIS WEEK..",
    brand: "Android",
    category: "accessory",
    discount: 15,
    status: "new",
  },
  {
    id: 3,
    url: Iphone,
    name: "Brand New Smart Phone",
    price: "30",
    discountedPrice: "$19.99",
    color: "white",
    description: "Limited in number hurry now to place your order..",
    brand: "Apple",
    category: "Phone",
    discount: 20,
    status: "new",
  },
  {
    id: 4,
    url: Speaker,
    name: "speaker",
    price: "30",
    discountedPrice: "$19.99",
    color: "",
    description: "Good sound provider",
    brand: "Samsung",
    category: "accessory",
    discount: 10,
    status: "new",
  },
  {
    id: 5,
    url: Battery,
    name: "original",
    price: "30",
    discountedPrice: "$19.99",
    color: "pink",
    description: " original Good long lasting battery",
    brand: "Samsung",
    category: "accessory",
    discount: 50,
    status: "new",
  },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
