import React from "react";
import './Tab.css';
import TabItem from "./TabItem";

export interface iTabsProps {
    onTabClick: Function;
    defaultIndex: String;
    children?: Array<any>;
}

function Tabs(props: iTabsProps) {
    const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
    const changeTab = (newIndex: String) => {
        if (typeof props.onTabClick === "function") props.onTabClick(newIndex);
        setBindIndex(newIndex);
    };
    // @ts-ignore
    const items = props.children.filter(item => item.type.name === "TabItem");

    return (
        <div className="wrapper">
            <div className="tab-menu">
                {items.map(({ props: { index, label } }) => (
                    <button
                        onClick={() => changeTab(index)}
                        className={bindIndex === index ? "focus" : ""}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="tab-view">
                {items.map(({ props }) => (
                    <div
                        {...props}
                        className="tab-view_item"
                        key={props.index}
                        style={{ display: bindIndex === props.index ? "block" : "none" }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tabs;
