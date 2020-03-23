import React, { useEffect, useState } from "react";
import { humanize } from "../lib/Utils"
import Api from "../lib/Api"
import Pagination from "./Pagination"

let renderEmpty = () => {
  return (null);
}
let renderRows = (rows) => {
  let elements = [];
  rows.forEach(row => {
    elements.push(
      <tr key={row.id}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">{row.displayName}</div>
            <div className="text-sm leading-5 text-gray-500">{row.description ? row.description.slice(0,100) : null}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">Director</div>
        <div className="text-sm leading-5 text-gray-500">Human Resources</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        Owner
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
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
  let sectionName = props.match.params.sectionname;

  useEffect(() => {
    Api.getAny(modelName).then(data => {
      let allRows = [];
      data.forEach(item => allRows.push(item));
      console.log(data)
      setPager(data.pager);
      setRows(allRows);
    });
  }, []);



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
                    Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                { (rows && rows.length > 0) ? renderRows(rows) : renderEmpty() }
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