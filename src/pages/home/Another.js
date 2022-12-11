// 03097388
import React, { useState } from "react";
import add from "../../assets/icons/people/add.png";
import {
    firstArray,
    firstCard,
    scrolls,
    secondCard,
    thirdCard,
    choices,
    head,
    task_cards
} from "../../utils/data";
import arrow_circle_fill from "../../assets/icons/arrow_circle_fill.png";
import comment from "../../assets/icons/comment.png";
import eighty from "../../assets/icons/eighty.png";
import plus from "../../assets/icons/plus.png";
import addicon from "../../assets/icons/addicon.png";
import wallpaper from "../../assets/images/wallpaper.png"
import Card from './Card'
import Done from './Done'
import Progress from './Progress'
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




const Another = () => {
    const [activeTab, setActiveTab] = useState(scrolls[0].name);
    const [allCards, setAllCards] = useState([firstCard, secondCard, thirdCard]);

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }



        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;


        if (sInd === dInd) {
            const items = reorder(allCards[sInd], source.index, destination.index);
            const newState = [...allCards];
            newState[sInd] = items;
            setAllCards(newState);
        } else {
            const result = move(allCards[sInd], allCards[dInd], source, destination);
            const newState = [...allCards];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setAllCards(newState.filter((group) => group.length));
        }


    }




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
            <div className="flex gap-20 text-sm overflow-x-scroll font-bold text-[#1d4c417d]">
                {scrolls.map((scrollz) => (
                    <p onClick={() => setActiveTab(scrollz.name)}>{scrollz.name}</p>
                ))}
            </div>


            {activeTab === scrolls[0].name && (
                <div className="w-full flex overflow-x-scroll gap-5 p-5" style={{ background: `url(${wallpaper})` }}>

                    <DragDropContext onDragEnd={onDragEnd}>

                        {allCards.map((items, i) => {
                            return (
                                <div>


                                    {/* the heading */}
                                    {/* {head.map((item, index) => (
                                    <div>
                                        <div className="flex items-center gap-2 w-full justify-between py-2">
                                            <div className='flex gap-3'>

                                                <p className='text-xs font-bold'>{item.name}</p>


                                                <div className='rounded-2xl h-4 w-4 bg-[#eab20879] text-xs flex justify-center'>2</div>
                                            </div>


                                            <div>
                                                <img className='h-4' src={plus} />
                                            </div>
                                        </div>
                                    </div>
                                    ))}  */}


                                    <Droppable key={i + 1} droppableId={i?.toString()}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                            // {...provided.placeholder}

                                            >
                                                {/* <div>
                                                    {head.map((headd) => (
                                                        <p>{headd.name}</p>
                                                    ))}
                                                </div> */}


                                                {items.map((item, index) => (

                                                    <div>

                                                        <div className='w-[330px] flex flex-col'>
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id?.toString()}
                                                                index={index}
                                                            >

                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}

                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}

                                                                    >

                                                                        <div className="flex flex-col">

                                                                            <div className=" w-full flex flex-col bg-white rounded-lg p-2 gap-1">
                                                                                {item.priority ? <div
                                                                                    className={`flex justify-start w-full px-5 ${item.color} px-2`}
                                                                                >
                                                                                    <p
                                                                                        className={`text-[8px] flex ${item.bg_color} px-1 rounded-sm font-bold`}
                                                                                    >
                                                                                        {item.priority} priority

                                                                                    </p>
                                                                                </div> : <div />}

                                                                                {item.Image ? <div className="relative w-full">
                                                                                    <img
                                                                                        className="flex justify-center w-full"
                                                                                        src={item.Image}
                                                                                    />
                                                                                    <img
                                                                                        className="absolute top-24 right-5"
                                                                                        src={arrow_circle_fill}
                                                                                    />
                                                                                </div> : <div />}

                                                                                {item.heading ? <div className="w-full justify-start font-bold flex px-5 text-sm">
                                                                                    <p>{item.heading}</p>
                                                                                </div> : <div />}

                                                                                {item.topic ? <div className="w-full justify-start flex px-5 font-semibold text-md">
                                                                                    <p>{item.topic}</p>
                                                                                </div> : <div />}

                                                                                {item.content ? <div className="w-full flex px-5 gap-3">
                                                                                    <div className='w-[30%]'>
                                                                                        <img src={eighty} />
                                                                                    </div>

                                                                                    <div className="w-[70%] text-sm flex flex-col items-center gap-3">
                                                                                        <div>
                                                                                            <p>{item.content}</p>
                                                                                        </div>

                                                                                        <div className="flex text-xs w-full justify-between px-5">
                                                                                            <p>Aug 18th</p>

                                                                                            <div><img className="" src={comment} /></div>

                                                                                            <p>View</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> : <div />}


                                                                                {item.time ? <div className="flex w-full justify-start px-5 gap-2">
                                                                                    <img className="h-5" src={item.Images} />
                                                                                    <p className="text-sm">{item.time}</p>
                                                                                </div> : <div />}

                                                                                {/* <div className={item.priority?`flex w-full justify-start px-5 gap-2`:``}>  */}

                                                                                {item.subtitle ? <div className="px-5 text-sm w-full">
                                                                                    <p>{item.subtitle}</p>
                                                                                </div> : <div />}

                                                                                {item.option1 ? <div className='text-sm flex flex-col gap-1 items-start px-5 p-2'>
                                                                                    <div className='flex gap-2'>
                                                                                        <div><img className='h-5' src={item.select} /></div>
                                                                                        <p>{item.option1}</p>
                                                                                    </div>

                                                                                    <div className='flex gap-2'>
                                                                                        <div><img className='h-5' src={item.select} /></div>
                                                                                        <p>{item.option2}</p>
                                                                                    </div>

                                                                                    <div className='flex gap-2'>
                                                                                        <div><img className='h-5' src={item.select} /></div>
                                                                                        <p>{item.option3}</p>
                                                                                    </div>
                                                                                </div> : <div />}


                                                                                {item.date ? <div className="flex text-xs w-full justify-between px-5">
                                                                                    <p>{item.date}</p>

                                                                                    <div><img className="" src={comment} /></div>

                                                                                    <p>View</p>
                                                                                </div> : <div />}


                                                                                {item.validation ? <div className="flex text-xs w-full justify-between px-5">
                                                                                    <p className='bg-green-400 p-1 rounded-lg'>{item.validation}</p>

                                                                                    <div><img className="" src={comment} /></div>

                                                                                    <p>View</p>
                                                                                </div> : <div />}

                                                                                {item.image ? <div className="h-3 w-4">
                                                                                    <img className="h-2 w-4" src={Image} />
                                                                                </div> : <div />}


                                                                                {item.adding ? <div className="flex justify-center items-center">
                                                                                    <div><img className="relative bottom-5" src={add} /></div>
                                                                                    <p className="hidden">{item.adding}</p>
                                                                                </div> : <div />}

                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                )}
                                                            </Draggable>


                                                        </div>

                                                    </div>

                                                ))}


                                            </div>

                                        )}

                                    </Droppable>

                                    {/* <div className='w-[330px] h-14 bg-white mb-5 rounded-lg flex justify-center items-center'>
                                        <img className='' src={addicon} />
                                        
                                    </div> */}
                                </div>


                            )
                        })}

                    </DragDropContext>




                </div>
            )}


            {activeTab === scrolls[1].name && (
                <div className="bg-red-200">Refreshments</div>
            )}

            {activeTab === scrolls[2].name && (
                <div className="bg-red-200">Entertainment</div>
            )}

            {activeTab === scrolls[3].name && (
                <div className="bg-red-200">Venue</div>
            )}

            {activeTab === scrolls[4].name && (
                <div className="bg-red-200">Guest list</div>
            )}

            {activeTab === scrolls[5].name && (
                <div className="bg-red-200">Accessories</div>
            )}

            {activeTab === scrolls[6].name && (
                <div className="bg-red-200">Accomodation</div>
            )}

            {activeTab === scrolls[7].name && (
                <div className="bg-red-200">Souvenirs</div>
            )}
        </div>
    )
}

export default Another