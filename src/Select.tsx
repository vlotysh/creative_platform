import React from "react";

function Select({
    values = [['', '']],
    callback = (value: any) => {},
    disabled = false,
    selected = '' }
) {
    return (
        <select
            disabled={disabled}
            onChange={({ target : { value } }) => callback(value)}
            defaultValue={selected}
        >
            {values.map(([value, text]) => <option key={value} value={value}>{text}</option>)}
        </select>
    );
}

export default Select;
