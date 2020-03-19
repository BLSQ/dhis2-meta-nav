import React from "react";

function Collection(props) {
    let modelName = props.match.params.modelname;
    let sectionName = props.match.params.sectionname;
    return (
        <div>
            <h3>{modelName}</h3>
            <p>{sectionName}</p>
        </div>
    );
}

export default Collection;