import React, { useState } from 'react'
import add from '../../assets/icons/people/add.png'
import { firstArray, scroll, scrolls } from '../../utils/data'
import Card from './Card'
import Done from './Done'
import Progress from './Progress'
import { firstCard } from '../../utils/data'
import { secondCard } from '../../utils/data'
import { thirdCard } from '../../utils/data'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


// Start dnd functions
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;

};


/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  // doings is here
  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;


  return result;
};


const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  // userSelect: "none",

  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "",
});




const HomePage = () => {

  const [activeTab, setActiveTab] = useState(scrolls[0].name);


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
        <div>
          <Card />
        </div>

        <div>
          <Progress />
        </div>

        <div>
          <Done />
        </div>
      </div>},



      {activeTab === scrolls[1].name && <div className='bg-red-200'>
        another
      </div>}

    </div>

  )
}

export default HomePage