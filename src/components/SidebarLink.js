import React from "react";
import { Link } from 'react-router-dom';

function SidebarLink(props) {
  if (props.active) {
    return (
      <Link to={props.link} class="group flex items-center mx-2 px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150">
        {props.children}
        {props.title}
      </Link>)
  } else if (props.header) {
    return (
      <span class="mt-1 group flex items-center px-2 py-2 text-white bg-indigo-700 leading-6 font-medium text-white">
        {props.children}
        {props.title}
      </span>)
  }
  else {
    return (
      <Link to={props.link} class="mt-1 group flex items-center mx-2 px-2 py-2 text-base leading-6 font-medium rounded-md text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
        {props.children}
        {props.title}
      </Link>
    );
  }
}

export default SidebarLink;