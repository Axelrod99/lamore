import React, { useState } from "react";
import { Every } from "./every";
import gown from '../../assets/images/gown.png'
import clock from '../../assets/icons/clock.png'
import shoe from '../../assets/images/shoe.png'
// import add from '../../assets/icons/add.png'
import scrolls from '../../utils/data'

function House() {

    const [activeTab, setActiveTab] = useState(scrolls[0].name);

    const firstCard = [
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
            option1: "Chicken soup",
            option2: "Salad",
            option3: "Small chops",
            date: "Aug 18th",
            color: "text-purple-400",
            bg_color: "bg-purple-200",
            id: 3,
            // select: select,

        },

    ];


    const secondCard = [
        {
            priority: "low",
            title: "DJ Selection",
            date: "Aug 18th",
            content: "Currently in price negotiation phase.",
            color: "text-green-600",
            bg_color: "bg-green-200",
            id: 4,
        },
    ];


    const thirdCard = [
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


    ];

    return (
        <div className="h-[100%]">
            <div className="flex gap-20 my-5">
                <p className="font-bold text-2xl">Dollarz$2022</p>

                <div className="flex gap-5">
                    <div className="flex">
                        <p className="flex items-center text-[#1d4c417d] font-bold text-sm">
                            4 people
                        </p>
                    </div>

                    <div className="flex gap-1">
                        {firstArray.map((firsts) => (
                            <div
                                className={`rounded-2xl h-8 w-8 flex justify-center ${firsts.color}`}
                            >
                                <img className=" h-7 mt-1" src={firsts.Image} />
                            </div>
                        ))}

                        <div className="flex justify-center items-center">
                            <img className="" src={add} />
                        </div>
                    </div>

                </div>
            </div>

            {/* the scrolls */}
            <div className="flex gap-10 text-sm overflow-x-scroll font-bold text-[#1d4c417d]">
                {scrolls.map((scrollz) => (
                    <p onClick={() => setActiveTab(scrollz.name)}>{scrollz.name}</p>
                ))}
            </div>

            <div className="w-full flex overflow-x-scroll gap-5 bg-blue-100 p-5">
                <Every />
            </div>

            {/* {activeTab === scrolls[1].name && (
                <div className="bg-red-200">another</div>
            )} */}
        </div>

    )

}

export default House;