import React, { useState } from 'react'
// import React from 'react'
import add from '../../assets/icons/people/add.png'
import { firstArray, firstCard, scroll, scrolls, secondCard, thirdCard } from '../../utils/data'
import Card from './Card'
import Done from './Done'
import Progress from './Progress'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";




const HomePage = () => {

  const [activeTab, setActiveTab] = useState(scrolls[0].name);
  const [allCards, setAllCards] = useState([firstCard, secondCard, thirdCard]);

  function onDragEnd(result) {
    const { source, destination } = result;
  }



  return (
    <div className='h-[100%]'>
      <div className='flex gap-20 my-5'>

        <p className='font-bold text-2xl'>Dollarz$2022</p>

        <div className='flex gap-5'>
          <div className='flex'>
            <p className='flex items-center text-[#1d4c417d] font-bold text-sm'>4 people</p>
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


      {/* the scrolls */}
      <div className='flex gap-10 text-sm overflow-x-scroll font-bold text-[#1d4c417d]'>

        {scrolls.map(scrollz =>
          <p onClick={() => setActiveTab(scrollz.name)}>{scrollz.name}</p>
        )}

      </div>


      {activeTab === scrolls[0].name && <div className='w-full flex overflow-x-scroll gap-5 bg-blue-100 p-5'>
        <DragDropContext onDragEnd={onDragEnd}>
          {(provide, snapshot)}
          {allCards.map((item, i) => {
           return <Droppable key={i} droppableId={`${i}`}>
              return (<div
                ref={item.innerRef}
              >

                <Draggable
                  key={item.i}
                  draggableId={item.i}
                  index={i}
                >
                  <Card firstCard={item} />

                </Draggable>
              </div>)
            </Droppable>
          })}
        </DragDropContext>




      </div>}



      {activeTab === scrolls[1].name && <div className='bg-red-200'>
        another
      </div>}

    </div>

  )
}

export default HomePage
