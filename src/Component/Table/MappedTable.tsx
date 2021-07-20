import React, {Component} from "react";

interface ITableProps {
    propertyNames: Array<any>,
    data: Array<Object>
}

class MappedTable extends Component<any, any> {
    private filteredData: Array<any> = [];

    public constructor(props: ITableProps) {
        super(props);

        const data: Array<any> = props.data;
        const propertyNames = props.propertyNames;

        this.filteredData = data.map(v =>
            Object.keys(v)
                .filter(k => propertyNames.includes(k))
                .reduce((acc: any, key) => ((acc[key] = v[key]), acc), {})
        );
    }

    render() {
        return <table>
            <thead>
            <tr>{(this.props as ITableProps).propertyNames.map(val => <th key={`h_${val}`}>{val}</th>)}</tr>
            </thead>
            <tbody>
            {this.filteredData.map((val, i) => (
                <tr key={`i_${i}`}>
                    {(this.props as ITableProps).propertyNames.map(p => <td key={`i_${i}_${p}`}>{val[p]}</td>)}
                </tr>
            ))}
            </tbody>
        </table>;
    }
}

export default MappedTable;