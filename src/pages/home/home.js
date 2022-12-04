import React, { useState } from "react";
// import React from 'react'
import add from "../../assets/icons/people/add.png";
import {
  firstArray,
  firstCard,
  scroll,
  scrolls,
  secondCard,
  thirdCard,
} from "../../utils/data";
import arrow_circle_fill from "../../assets/icons/arrow_circle_fill.png";
import comment from "../../assets/icons/comment.png";
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

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

// End dnd functions

const HomePage = () => {
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
      <div className="flex gap-10 text-sm overflow-x-scroll font-bold text-[#1d4c417d]">
        {scrolls.map((scrollz) => (
          <p onClick={() => setActiveTab(scrollz.name)}>{scrollz.name}</p>
        ))}
      </div>

      {/* {activeTab === scrolls[0].name && ( */}
      <div className="w-full flex overflow-x-scroll gap-5 bg-blue-100 p-5">
        <DragDropContext onDragEnd={onDragEnd}>
          {allCards.map((items, i) => {
            return (
              <Droppable key={i + 1} droppableId={i?.toString()}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                  >
                    <h1 className="text-black text-xl">Title {i}</h1>
                    {items.map((item, index) => (
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
                            <div className="flex flex-col items-center bg-white rounded-lg p-2 gap-2">
                              <div
                                className={`flex justify-start w-full px-5 ${item.color} px-2`}
                              >
                                <p
                                  className={`text-[8px] flex ${item.bg_color} px-1 rounded-sm font-bold`}
                                >
                                  {item.priority} priority
                                </p>
                              </div>

                              <div className="relative">
                                <img
                                  className="flex justify-center"
                                  src={item.Image}
                                />
                                <img
                                  className="absolute top-24 right-5"
                                  src={arrow_circle_fill}
                                />
                              </div>

                              <div className="w-full justify-start font-bold flex px-5 text-sm">
                                <p>{item.heading}</p>
                              </div>

                              <div className="flex w-full justify-start px-5 gap-2">
                                <img className="h-5" src={item.Images} />
                                <p className="text-sm">{item.time}</p>
                              </div>

                              <div className="flex text-xs w-full justify-between px-5">
                                <p>{item.date}</p>
                                <img className="" src={comment} />
                                <p>View</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            );
          })}
        </DragDropContext>
      </div>
      {/* )} */}

      {activeTab === scrolls[1].name && (
        <div className="bg-red-200">another</div>
      )}
    </div>
  );
};

export default HomePage;
