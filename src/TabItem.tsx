import React from "react";

export interface iTabItemProps {
    children?: String;
    label: String;
    index: String;
}

function TabItem(props: iTabItemProps) {
    return <div {...props} />;
}

export default TabItem;