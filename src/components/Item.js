import React, { useEffect, useState } from "react";
import { humanize } from "../lib/Utils"
import Api from "../lib/Api"

export default function Item(props) {
  let modelName = props.match.params.modelname;
  let id = props.match.params.id;

  const [meta, setMeta] = useState(null);
  const [schema, setSchema] = useState(null);

  let sectionName = props.match.params.sectionname;

  useEffect(() => {
    Api.getSchema(modelName).then(schema => {
      setSchema(schema);
    });
    Api.getMeta(modelName, id).then(meta => setMeta(meta));
  });


  return (
    <div className="p-4 overflow-y-auto overflow-x-hidden">
      <h2 className="text-2xl font-bold leading-7 mb-4 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
        {humanize(modelName)} - {id}
      </h2>
    </div>);
}