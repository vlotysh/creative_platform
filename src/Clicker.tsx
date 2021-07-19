import React from 'react';
import ReactDOM from 'react-dom';

export interface iListItem {
    title: String;
}

function ListItem(props: iListItem) {


    return (
        <div>List item: {props.title} </div>
    )
}

function Clicker() {
    const [counter, setCounter] = React.useState(0);
    let clickRef = React.createRef();

    const handleClick = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        setCounter(counter + 1);
        let title = 'list title' + counter;
        ReactDOM.render(<ListItem title={title} />, document.getElementById('container'));
    };

    React.useEffect(() => {
        let div: any = clickRef.current;
        div.addEventListener("click", handleClick);
    })

    return (
        <div>
        <div
            // @ts-ignore
            ref={clickRef}
        >
           Clicked: times {counter}
        </div>
        <div id="container">

        </div>
        </div>
    );
}

export default Clicker;