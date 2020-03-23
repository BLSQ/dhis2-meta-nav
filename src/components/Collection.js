import React, { useEffect, useState } from "react";
import { humanize } from "../lib/Utils"
import Api from "../lib/Api"
import Pagination from "./Pagination"
import { Link } from 'react-router-dom';
import qs from "qs";
import DateHelper from "../lib/DateHelper";

let renderEmpty = () => {
  return (null);
}
let renderRows = (rows, modelName) => {
  let elements = [];
  rows.forEach(row => {
    let url = `${modelName}/${row.id}`;
    elements.push(
      <tr key={row.id}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {row.id}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div>
            <div className="text-sm leading-5 font-medium text-gray-900">{row.displayName}</div>
            <div className="text-sm leading-5 text-gray-500">{row.description ? row.description.slice(0,100) : null}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          {DateHelper.time_ago_in_words_with_parsing(row.created)} ago
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          {DateHelper.time_ago_in_words_with_parsing(row.lastUpdated)} ago
      </td>

      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
        <Link to={url} className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Details</Link>
      </td>
    </tr>
    );
  });
  return elements
};

function Collection(props) {
  const [rows, setRows] = useState([]);
  const [pager, setPager] = useState(null);

  let modelName = props.match.params.modelname;
  let currentPage = qs.parse(props.location.search, { ignoreQueryPrefix: true }).page
  currentPage = currentPage === undefined ? 1 : Number(currentPage)

  useEffect(() => {
    setRows([]);
    setPager(null);
    Api.getAny(modelName, { page: currentPage, paging: true, filter: null }).then(data => {
      let allRows = [];
      data.forEach(item => allRows.push(item));
      console.log(data)
      setPager(data.pager);
      setRows(allRows);
    });
  }, [props.location]);



  return (
    <div className="p-4 overflow-y-auto overflow-x-hidden">
      <h2 className="text-2xl font-bold leading-7 mb-4 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
      {humanize(modelName)}s
      </h2>
      <div className="flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Last updated
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                { (rows && rows.length > 0) ? renderRows(rows, modelName) : renderEmpty() }
              </tbody>
            </table>
          </div>
          <Pagination pager={pager} />
        </div>
      </div>
    </div>
  );
}

export default Collection;