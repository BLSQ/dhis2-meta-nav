import React from "react";
import CardHeading from "./CardHeading";

function Home(props) {
    return(
        <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0" x-data x-init="$el.focus()">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Hello !</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <CardHeading title="Hello" action="go" />
          </div>
        </main>
    );
}

export default Home;