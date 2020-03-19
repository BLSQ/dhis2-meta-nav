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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
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
          <nav className="flex-1 px-2 bg-indigo-800">
            {sections}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;