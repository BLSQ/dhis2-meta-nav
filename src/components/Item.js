import React, { useEffect, useState } from "react";
import { humanize } from "../lib/Utils";
import Api from "../lib/Api";

export default function Item(props) {
  function renderField(field, first) {
    if (typeof field.value === "object") {
      return null;
    }

    let bg = first
      ? "bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
      : "bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 sm:border-t sm:border-gray-200";

    return (
      <div key={field.key} className={bg}>
        <dt className="text-sm text-right leading-5 font-medium text-gray-500">
          {field.key}
        </dt>
        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-3">
          {field.value}
        </dd>
      </div>
    );
  }

  function renderFields(fields) {
    let first = true;
    return fields.map(field => {
      let row = renderField(field, first);
      first = false;
      return row;
    });
  }

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

  if (meta !== null && schema !== null) {
    let fields = [];
    Object.entries(meta).forEach(([key, value]) => fields.push({ key, value }));
    return (
      <div className="mx-5 mt-5 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {humanize(modelName)} - {id} - {meta.displayName}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            {meta.description}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>{renderFields(fields)}</dl>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-5 mt-5 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {humanize(modelName)} - {id}
          </h3>
        </div>
      </div>
    );
  }
}
