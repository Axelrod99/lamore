import React from "react";
import arrow_circle_fill from '../../assets/icons/arrow_circle_fill.png'
import comment from '../../assets/icons/comment.png'
import eighty from '../../assets/icons/eighty.png'





export function Every({ firstCard, secondCard, thirdCard }) {
    return (
        <div>
            <div className='w-full min-w-[330px] flex flex-col gap-3 '>


                <div className='flex flex-col gap-3'>

                    {firstCard.map((Cards, index) =>


                        <div className='flex flex-col items-center bg-white rounded-lg p-2 gap-2' key={index}>
                            <div className={`flex justify-start w-full px-5 ${Cards.color} px-2`}>
                                <p className={`text-[8px] flex ${Cards.bg_color} px-1 rounded-sm font-bold`}>{Cards.priority} priority</p>
                            </div>

                            <div className='relative'>
                                <img className='flex justify-center' src={Cards.Image} />
                                <img className='absolute top-24 right-5' src={arrow_circle_fill} />
                            </div>

                            <div className='w-full justify-start font-bold flex px-5 text-sm'>
                                <p>{Cards.heading}</p>
                            </div>

                            <div className='flex w-full justify-start px-5 gap-2'>
                                <img className='h-5' src={Cards.Images} />
                                <p className='text-sm'>{Cards.time}</p>
                            </div>

                            <div className='flex text-xs w-full justify-between px-5'>
                                <p>{Cards.date}</p>
                                <img className='' src={comment} />
                                <p>View</p>

                            </div>
                        </div>

                    )}

                </div>

            </div>



            <div className='w-full min-w-[330px] flex flex-col gap-3 '>

                {secondCard.map((second, index) =>

                    <div className='bg-white rounded-lg p-2 flex flex-col gap-3' key={index}>
                        <div className={`flex justify-start px-2 w-full ${second.color}`}>
                            <p className={`text-[8px] flex ${second.bg_color} px-1 rounded-sm font-bold`}>{second.priority} priority</p>
                        </div>

                        <div className='flex gap-5'>
                            <div>
                                <img className='' src={eighty} />
                            </div>

                            <div className='flex flex-col '>
                                <div className='flex flex-col items-start'>
                                    <p className='font-bold'>{second.title}</p>
                                    <p className='text-sm'>{second.content}</p>
                                </div>


                                <div className='flex text-xs w-full justify-between my-3 px-5'>
                                    <p>{second.date}</p>
                                    <img className='' src={comment} />
                                    <p>View</p>

                                </div>
                            </div>
                        </div>
                    </div>

                )}

            </div>


            <div className='w-full min-w-[330px] flex flex-col gap-3 '>

                {thirdCard.map((cardz, index) =>

                    <div className='bg-white rounded-lg p-2 flex flex-col gap-3' key={index}>
                        <div className={`flex justify-start w-full ${cardz.color} px-2`}>
                            <p className={`text-[8px] flex ${cardz.bg_color} px-1 rounded-sm font-bold`}>{cardz.priority} priority</p>
                        </div>

                        <img className='flex justify-center' src={cardz.Image} />

                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col items-start gap-1'>
                                <p className='font-bold'>{cardz.heading}</p>
                                <p className='text-sm'>{cardz.subtitle}</p>
                            </div>


                            <div className='flex justify-between text-[9px] items-center'>

                                <p className='bg-green-400 p-1 rounded-lg'>{cardz.validation}</p>


                                <p>View</p>
                            </div>
                        </div>


                    </div>

                )}


            </div>

        </div>
    )
}