import React from "react";
import SidebarLink from "./SidebarLink";
import { humanize } from '../lib/Utils';
import _ from "lodash";

// handleClick(section, modelname, props) {
//   props.history.push(`/collection/${section}/${modelname}`);
// }

function renderSection(section, models) {
  let elements = [];
  models.forEach(model => {
    elements.push(
      <SidebarLink key={model} title={humanize(model)} link={`/collection/${section}/${model}`} >
        <svg className="mr-3 h-6 w-6 text-indigo-400 group-focus:text-indigo-300 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        </svg>
      </SidebarLink>
    );
  });
  return (
    <>
      <SidebarLink
        key={section}
        title={humanize(section)}
        header={true}
      >
        <svg className="mr-3 h-6 w-6 text-indigo-400 group-focus:text-indigo-300 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </SidebarLink>
      {elements}
    </>
  );
}

function Sidebar(props) {
  let sections = [];
    _.forOwn(props.items, (models, section) =>
      sections.push(renderSection(section, models))
    );
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-indigo-800 pt-5 pb-4">
        <div className="flex items-center flex-shrink-0 px-4">
          <img className="h-8 w-auto" src="/img/hesabu-h.png" alt="Hesabu" />
        </div>
        <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 bg-indigo-800">
            {sections}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;