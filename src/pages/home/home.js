import React from 'react'
import add from '../../assets/icons/people/add.png'
import { firstArray, scroll, scrolls } from '../../utils/data'
import Card from './Card'


const HomePage = () => {

  return (
    <div className='h-[100%]'>
      <div className='flex gap-20 my-5'>

        <p className='font-bold text-2xl'>Dollarz$2022</p>

        <div className='flex gap-5'>
            <div className='flex'>
                <p className='flex items-center'>4 people</p>
            </div>

            <div className='flex gap-1'>


                {firstArray.map(firsts => 
                  <div className={`rounded-2xl h-8 w-8 flex justify-center ${firsts.color}`}>
                      <img className=' h-7 mt-1' src={firsts.Image} />
                  </div>
                )}


                <div className='flex justify-center items-center'>
                    <img className='' src={add} />
                </div>
            </div>
        </div>

      </div>


      <div className='flex gap-10'>
        
        {scrolls.map(scrollz => 
          <p>{scrollz.name}</p>  
        )}

      </div>


      <div className='w-full flex overflow-x-scroll gap-5 bg-blue-100'>
        <div>
          <Card/>
        </div>
         
        <div className='w-full min-w-[330px]'>
          bbb
        </div>

        <div className='w-full min-w-[330px]'>
          ccc
        </div>
      </div>
    </div>
  )
}

export default HomePage
