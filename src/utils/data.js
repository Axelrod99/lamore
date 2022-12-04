import aaa from "../assets/icons/people/aaa.png";
import bbb from "../assets/icons/people/bbb.png";
import ccc from "../assets/icons/people/ccc.png";
import ddd from "../assets/icons/people/ddd.png";
import gown from "../assets/images/gown.png";
import clock from "../assets/icons/clock.png";
import shoe from "../assets/images/shoe.png";

export const firstArray = [
  { Image: aaa, color: "bg-red-400", id: 1 },
  { Image: bbb, color: "bg-blue-400", id: 2 },
  { Image: ccc, color: "bg-yellow-400", id: 3 },
  { Image: ddd, color: "bg-green-400", id: 4 },
];

export const scrolls = [
  { name: "Clothes" },
  { name: "Refreshments" },
  { name: "Entertainment " },
  { name: "Venue" },
  { name: "Guest list" },
  { name: "Accessories" },
  { name: "Accomodation" },
  { name: "Souvenirs" },
];

export const firstCard = [
  {
    priority: "high",
    Image: gown,
    heading: "Gown selection",
    date: "Aug 18th",
    color: "text-purple-700",
    bg_color: "bg-purple-300",
    id: 1,
  },
  {
    priority: "mid",
    Images: clock,
    time: "9:00am",
    date: "Aug 18th",
    heading: "Choose meals for reception",
    color: "text-purple-400",
    bg_color: "bg-purple-200",
    id: 2,
  },
];

export const secondCard = [
  {
    priority: "low",
    title: "DJ Selection",
    date: "Aug 18th",
    content: "Currently in price negotiation phase.",
    color: "text-green-600",
    bg_color: "bg-green-200",
    id: 3,
  },
];

export const thirdCard = [
  {
    priority: "mid",
    validation: "completed",
    heading: "Shoe Selection",
    subtitle: "A size 39 Christain loubtion heels were purchased.",
    color: "text-purple-400",
    bg_color: "bg-purple-200",
    id: 4,
  },
  {
    priority: "low",
    validation: "completed",
    heading: "Shoe Selection",
    Image: shoe,
    color: "text-green-600",
    bg_color: "bg-green-200",
    id: 5,
  },


  {
    priority: "mid",
    validation: "completed",
    heading: "Shoe Selection",
    subtitle: "A size 39 Christain loubtion heels were purchased.",
    color: "text-purple-400",
    bg_color: "bg-purple-200",
    id: 6,
  },
  {
    priority: "low",
    validation: "completed",
    heading: "Shoe Selection",
    Image: shoe,
    color: "text-green-600",
    bg_color: "bg-green-200",
    id: 7,
  },
];

export const choices = [
  {
    priority: "mid",
    title: "Choose meals for reception",
    subtitle: "Appetizers",
    option1: "Chicken soup",
    option2: "Salad",
    option3: "Small chops",
    date: "Aug 18th",
    color: "text-purple-400",
    bg_color: "bg-purple-200",
    id: 1,
  },
];
