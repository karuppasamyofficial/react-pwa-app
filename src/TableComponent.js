import React, { Component } from 'react'

class TableComponent extends Component {
    renderTableHeader = (keys) => {
        var keys = keys;
        console.log("keys", keys);
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    renderTableData = (tabledata, keys) => {
        return tabledata.map((row, index) => {
            return <tr >{this.RenderRowData(index, row, keys)}</tr>
        })
    }
    RenderRowData = (index, row, keys) => {

        return keys.map((key, index) => {
            console.log("only object", row[key]);

            if (typeof (row[key]) === "object") {
                return <td key={row[key]}><button  onClick={() => this.props.onClickMore(row, this.props.table,this.props.index)}>click</button></td>

            }
            else {
                return <td key={row[key]}>{row[key]}</td>
            }
        })
    }
    render() {

        console.log("table component");
        return (
            <div>
                <table className='students'>
                    <tbody >
                        <tr>{this.renderTableHeader(this.props.keys)}</tr>
                        {this.renderTableData(this.props.data, this.props.keys)}
                    </tbody>
                </table>
            </div>
        )
    }
}
// const RenderRowData = (props) => {

//     return props.keys.map((key, index) => {
//         console.log("only object",props.data[key]);

// if(typeof(props.data[key])==="object"){
//     return <td key={props.data[key]}><button onClick={<><RenderRowData/><RenderRowData/></>}>click</button></td>

// }
// else{
//     return <td key={props.data[key]}>{props.data[key]}</td>
// }
// })
// }

export default TableComponent;