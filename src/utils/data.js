import aaa from "../assets/icons/people/aaa.png";
import bbb from "../assets/icons/people/bbb.png";
import ccc from "../assets/icons/people/ccc.png";
import ddd from "../assets/icons/people/ddd.png";
import gown from "../assets/images/gown.png";
import clock from "../assets/icons/clock.png";
import select from "../assets/icons/select.png";
import shoe from "../assets/images/shoe.png";
import addicon from "../assets/icons/addicon.png";
import add from '../assets/icons/add.png';

export const firstArray = [
  { Image: aaa, color: "bg-red-400", },
  { Image: bbb, color: "bg-blue-400", },
  { Image: ccc, color: "bg-yellow-400" },
  { Image: ddd, color: "bg-green-400 " }
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

export const head = [
  { name: "Todo", id: 1},
  { name: "In Progress", id: 2 },
  { name: "Done", id:3 }
]

export const firstCard = [
  // {
  //   colum_name: 'todo',
  //   task_cards: [
      {
        priority: "high",
        Image: gown,
        heading: "Gown selection",
        date: "Aug 18th",
        color: "text-purple-700",
        bg_color: "bg-purple-300",
        // image: addicon,
        id: 1,
      },
      {
        priority: "mid",
        Images: clock,
        time: "9:00am",
        date: "Aug 18th",
        heading: "Food tasting at ikeja city mall",
        color: "text-purple-400",
        bg_color: "bg-purple-200",
        id: 2,
      },
      {
        priority: "mid",
        color: "text-purple-700",
        bg_color: "bg-purple-300",
        heading: "Choose meals for reception",
        topic: "Appetizers",
        date : "Aug 18th",
        option1: "Chicken soup",
        option2: "Salad",
        option3: "Small chops",
        id: 3,
        select: select,
      },

      // {
      //   id:7,
      //   adding: "add"
      // }
  //   ]
  // }
];

export const secondCard = [
  // {
  //   colum_name: 'In progress',
  //   task_cards: [
      {
        priority: "low",
        heading: "DJ Selection",
        content: "Currently in price negotiation phase.",
        color: "text-green-600",
        bg_color: "bg-green-200",
        id: 4,
      },

      // {
      //   id:7,
      //   adding: "add"
      // }
  //   ]
  // }
];

export const thirdCard = [
  // {
  //   colum_name: 'Done',
  //   task_cards: [

      {
        priority: "mid",
        validation: "completed",
        heading: "Shoe Selection",
        subtitle: "A size 39 Christain loubtion heels were purchased.",
        color: "text-purple-400",
        bg_color: "bg-purple-200",
        id: 5,
      },
      {
        priority: "low",
        validation: "completed",
        heading: "Shoe Selection",
        Image: shoe,
        color: "text-green-600",
        bg_color: "bg-green-200",
        id: 6,

      },
      // {
      //   id:7,
      //   adding: "add"

      // }
  //   ]
  // }
];

