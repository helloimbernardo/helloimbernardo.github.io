"use client";

import Window from "./Window";
import { useState } from "react";

function Terminal(props) {
  const [age, setAge] = useState();
  const [milliseconds, setMilliseconds] = useState();
  setInterval(() => {
    let today = new Date();
    /** UNIX Timestamp of my birthday on the portuguese timezone (to fix issue on the 6th of december with age showing incorrectly) */
    let birthDate = new Date(1070668800000);
    let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    setAge(
      ((today - birthDate) / millisecondsPerYear).toString().substring(0, 2)
    );
    setMilliseconds(
      ((today - birthDate) / millisecondsPerYear).toString().substring(3, 12)
    );
  }, 50);

  return (
    <Window windowName="Terminal">
      <span className="p-4">
        <p className="ml-2 font-mono pb-2">
          <span className="text-green-400">bernardo@helloimbernardo</span>
          <span className="text-gray-400">:~$</span>{" "}
          <span className="text-white"> init</span>
        </p>
        <br />
        <Line> 
          Hello, I&apos;m <b>bernardo</b>
          <Link url="https://pronoun.gdn/they?or=she&or=he" color="teal">
            <sub>(any pronouns)</sub>
          </Link>
        </Line>
        <Line>
          A {age}.{milliseconds} year old dev student.
        </Line>
        <Line>
          You can find me on: <br />
          <Link url="https://tumblr.com/helloimbernardo" color="green" bold>
            ✍️tumblr
          </Link>{" "}
          <Link url="https://twitter.com/helloimbernardo" color="purple" bold>
            📱twitter
          </Link>{" "}
          <Link url="https://flickr.com/helloimbernardo" color="pink" bold>
            📸flickr
          </Link>{" "}
          <Link url="https://findpenguins.com/bernardo" color="blue" bold>
            ✈️find penguins
          </Link>
        </Line>
        <Line>
          This site and other Open-Source projects at{" "}
          <Link url="https://github.com/helloimbernardo" color="orange" bold>
            github.com/helloimbernardo
          </Link>
        </Line>
      </span>
    </Window>
  );
}

/**
 * @name Line
 * @description Creates a new line for the terminal in white
 * @param {*} props
 * @returns
 */
function Line(props) {
  return <p className="ml-2 font-mono text-white pb-2">{props.children}</p>;
}

/**
 * @name Link
 * @description Creates a link with a custom color
 * @param {string} url - URL to redirect to
 * @param {string} color - Color of the link
 * @param {string} className - Custom classes to add to the link
 * @param {boolean} bold - Whether to make the link bold or not
 * @param {*} props
 * @returns {JSXEelement}
 */
function Link(props) {
  let colors = {
    teal: "text-teal-200",
    blue: "text-blue-500",
    orange: "text-orange-500",
    pink: "text-pink-500",
    purple: "text-purple-500",
    green: "text-green-500",
  };
  return (
    <a href={props.url} className={`${colors[props.color]} ${props.className} draggable-cancel`}>
      {props.bold ? <b>{props.children}</b> : props.children}
    </a>
  );
}

export default Terminal;
