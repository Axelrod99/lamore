import React from 'react'
import plus from '../../assets/icons/plus.png'
import eighty from '../../assets/icons/eighty.png'
import comment from '../../assets/icons/comment.png'
import addicon from '../../assets/icons/addicon.png'
// import { secondCard } from '../../utils/data'

// const Progress = () => {
export default function Progress ({secondCard}) {
    return (
        <div className='w-full min-w-[330px] flex flex-col gap-3 '>
            <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex gap-3'>
                    <p className='text-xs font-bold'>In Progress</p>
                    <div className='rounded-2xl h-4 w-4 bg-[#eab20879] text-xs flex justify-center'>2</div>
                </div>

                <img className='h-4' src={plus} />
            </div>

            {secondCard.map(second =>

                <div className='bg-white rounded-lg p-2 flex flex-col gap-3'>
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


            <div className='w-full min-w-[330px] h-14 bg-white mb-5 rounded-lg flex justify-center items-center'>
                <img className='' src={addicon} />
            </div>
        </div>
    )
}

