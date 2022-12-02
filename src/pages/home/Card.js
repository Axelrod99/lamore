import React from 'react'
import plus from '../../assets/icons/plus.png'
import arrow_circle_fill from '../../assets/icons/arrow_circle_fill.png'
import comment from '../../assets/icons/comment.png'
import addicon from '../../assets/icons/addicon.png'
import { firstCard } from '../../utils/data'

const card = () => {
    return (
        <div className='w-full min-w-[330px] flex flex-col gap-3 '>
            <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex gap-3'>
                    <p className='text-xs font-bold'>To-do</p>
                    <div className='rounded-2xl h-4 w-4 bg-[#ec489a56] text-xs flex justify-center'><p>4</p></div>
                </div>

                <img className='h-4' src={plus} />
            </div>

            {firstCard.map(Cards =>

                <div className='flex flex-col items-center bg-white rounded-lg p-2'>
                    <div className='flex justify-start w-full px-5'>
                        <p className='text-xs flex'>{Cards.priority} priority</p>
                    </div>

                    <div className='relative'>
                        <img className='flex justify-center' src={Cards.Image} />
                        <img className='absolute top-24 right-5' src={arrow_circle_fill} />
                    </div>

                    <div className='w-full justify-start font-bold flex px-5 text-sm mt-3'>
                        <p>{Cards.heading}</p>
                    </div>

                    <div className='flex w-full justify-start px-5 gap-2'>
                        <img className='h-5' src={Cards.Images} />
                        <p className='text-sm'>{Cards.time}</p>
                    </div>

                    <div className='flex text-xs w-full justify-between my-3 px-5'>
                        <p>{Cards.date}</p>
                        <img className='' src={comment} />
                        <p>View</p>

                    </div>
                </div>

            )}

            <div className='w-full min-w-[330px] h-14 bg-white mb-5 rounded-lg flex justify-center items-center'>
                <img className='' src={addicon} />
            </div>
        </div>
    )
}

export default card
