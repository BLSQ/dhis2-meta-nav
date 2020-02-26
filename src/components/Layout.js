import React from "react";
import CardHeading from "./CardHeading"
import Search from "./Search"
import Sidebar from "./Sidebar"

function Layout() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Search />
        <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0" x-data x-init="$el.focus()">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <CardHeading title="Hello" action="go" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;