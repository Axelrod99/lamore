import React from 'react'
import plus from '../../assets/icons/plus.png'
import gown from '../../assets/images/gown.png'
import arrow_circle_fill from '../../assets/icons/arrow_circle_fill.png'
import comment from '../../assets/icons/comment.png'

const card = () => {
    return (
        <div className='w-full min-w-[330px] flex flex-col gap-3 '>
            <div className='flex items-center gap-2 w-full justify-between'>
                <div className='flex'>
                    <p className='text-xs font-bold'>To-do</p>
                    <div className='rounded-2xl h-4 w-4 bg-[#ec489a56] text-xs'>4</div>
                </div>

                <img className='h-4' src={plus} />
            </div>

            <div className='flex flex-col items-center bg-white rounded-lg'>
                <p className='text-xs'>High priority</p>

                <div className='relative'>
                    <img className='flex justify-center' src={gown} />
                    <img className='absolute top-24 right-5' src={arrow_circle_fill} />
                </div>

                <div className='w-full justify-start flex px-5 text-sm my-3'>
                    <p>Gown selection</p>
                </div>

                <div className='flex text-xs w-full justify-between mb-3 px-5'>
                    <p>Aug 18th</p>
                    <img className='' src={comment} />
                    <p>View</p>

                </div>
            </div>
        </div>
    )
}

export default card
