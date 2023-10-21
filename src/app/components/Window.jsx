"use client";

import Draggable, { DraggableCore } from "react-draggable";

/**
 * @name Window
 * @description Window component for the terminal and other windows
 * @param {*} draggable - Parameters for the Draggable component
 * @param {*} windowName - Name of the window to display on the top bar
 * @param {*} props
 * @returns {JSX.Element} Draggable Window component with a top bar and children as the content
 */
function Window(props) {
  return (
    <Draggable bounds="parent" {...props.draggable}>
      <div className="w-4/5 xl:w-2/5">
        <div className="w-full shadow-2xl subpixel-antialiased rounded bg-black border-black">
          <div className="flex items-center rounded-t text-center bg-white cursor-move">
            <div className="flex rounded-full bg-green-500 w-3 h-3 ml-1" />
            <div className="flex rounded-full bg-yellow-400 w-3 h-3 ml-1" />
            <div className="flex rounded-full bg-red-500 w-3 h-3 ml-1" />
            <div className="mx-auto text-lg">{props.windowName}</div>
          </div>
          {props.children}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
