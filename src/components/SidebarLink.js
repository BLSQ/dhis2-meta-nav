import React from "react";

function SidebarLink(props) {
  if (props.active) {
    return (
      <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150">
        {props.children}
        {props.title}
      </a>)
  } else {
    return (
      <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150">
        {props.children}
        {props.title}
      </a>
    );
  }
}

export default SidebarLink;