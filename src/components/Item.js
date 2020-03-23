import React, { useEffect, useState } from "react";
import { humanize } from "../lib/Utils"
import Api from "../lib/Api"

export default function Item(props) {
  function renderField(field) {
    if (typeof(field.value) === 'object') {
      return null;
    }
    return (
      <div key={field.key} className=" sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm leading-5 font-medium text-gray-500">
          {field.key}
        </dt>
        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          {field.value}
        </dd>
      </div>
    );
  }

  function renderFields(fields) {
    return fields.map(field => renderField(field));
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
    let fields = []
    Object.entries(meta).forEach(([key, value]) => fields.push({ key, value }));
    return (
      <div className="p-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {humanize(modelName)} - {meta.displayName}
          </h3>
          <p className="max-w-2xl text-sm leading-5 text-gray-500">
            {meta.description}
          </p>
        </div>
        <div className="mt-5 border-t border-gray-200 pt-5">
          <dl>
            <div className=" sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Margot Foster
               </dd>
            </div>
            {renderFields(fields)}
          </dl>
        </div>
      </div>
    );
  } else {
    return (<div className="p-5">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {humanize(modelName)} - {id}
        </h3>
      </div>
    </div>);
  }
}