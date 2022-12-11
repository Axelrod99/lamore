
import React from 'react'
import plus from '../../assets/icons/plus.png'
import addicon from '../../assets/icons/addicon.png'
import { thirdCard } from '../../utils/data'



export default function Done() {
    return (
        <div>
            <div className='w-full min-w-[330px] flex flex-col gap-3 '>
                <div className='flex items-center gap-2 w-full justify-between'>
                    <div className='flex gap-3'>
                        <p className='text-xs font-bold'>Done</p>
                        <div className='rounded-2xl h-4 w-4 bg-[#eab20879] text-xs flex justify-center'>2</div>
                    </div>
                    <img className='h-4' src={plus} />
                </div>

                {thirdCard.map(cardz =>

                    <div className='bg-white rounded-lg p-2 flex flex-col gap-3'>
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

                <div className='w-full min-w-[330px] h-14 bg-white mb-5 rounded-lg flex justify-center items-center'>
                    <img className='' src={addicon} />
                </div>
            </div>
        </div>
    )
}


