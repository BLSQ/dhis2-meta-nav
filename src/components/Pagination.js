import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  let location = useLocation();

  function getButton(page, active) {
    let url = location.pathname + "?page=" + page;
    if (active) {
      return (
        <Link
          to={url}
          className="-mt-px border-t-2 border-indigo-500 pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700 transition ease-in-out duration-150"
        >
          {page}
        </Link>
      );
    } else {
      return (
        <Link
          to={url}
          className="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
        >
          {page}
        </Link>
      );
    }
  }

  let pager = props.pager;
  if (pager === null) {
    return null;
  }

  let currentPage = pager.page;
  let lastPage = pager.pageCount;

  let previousUrl = location.pathname + "?page=" + (currentPage - 1);
  let nextUrl = location.pathname + "?page=" + (currentPage + 1);

  let currentPageButton =
    currentPage > 2 && currentPage < lastPage - 1 ? (
      <>
        {getButton(currentPage, true)}
        <span className="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500">
          ...
        </span>
      </>
    ) : null;

  let previous =
    pager.prevPage !== undefined ? (
      <Link
        to={previousUrl}
        className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
      >
        <svg
          className="mr-3 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Previous
      </Link>
    ) : null;

  let next =
    pager.nextPage !== undefined ? (
      <Link
        to={nextUrl}
        className="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
      >
        Next
        <svg
          className="ml-3 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>
    ) : null;

  return (
    <div className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="w-0 flex-1 flex">{previous}</div>
      <div className="hidden md:flex">
        {getButton(1, currentPage === 1)}
        {getButton(2, currentPage === 2)}
        <span className="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500">
          ...
        </span>
        {currentPageButton}
        {getButton(lastPage - 1, lastPage - 1 === currentPage)}
        {getButton(lastPage, lastPage === currentPage)}
      </div>
      <div className="w-0 flex-1 flex justify-end">{next}</div>
    </div>
  );
}
