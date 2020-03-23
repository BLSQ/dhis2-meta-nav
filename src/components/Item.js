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


    return (<></>);
}