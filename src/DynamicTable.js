import React, { Component } from 'react';
import Select from 'react-select';
import TableComponent from "./TableComponent"

import "./table.css"
const options = [
    { value: 'Wasif', label: 'Wasif' },
    { value: 'kumar', label: 'kumar' },
    { value: 'All', label: 'All' },
];
class DynamicTable extends Component {
    childtablearr = [[{
        id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',
        "detail":
            [{
                school: "w1", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk",
                innerdetails: [{
                    school: "w01", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk", "subinnerdetails": [{ school: "w001", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }]

                }, { school: "wwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }]
            },
            {
                school: "w2", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk", innerdetails:
                    [{ school: "w02", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" },
                    { school: "wwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }]
            },]
    },
    {
        id: 2, name: 'kumar', age: 21, email: 'kumar@email.com',
        "detail":
            [{ school: "k1", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk", innerdetails: [{ school: "wwwwwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }, { school: "wwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }] },
            { school: "k2", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }]
    }]]
    students = [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
    ]
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            childtablearr: [[
                {
                    id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',
                    "detail":
                    [{
                        school: "w1", sub1: "sub1", sub2: "sub2",
                        "detail": [{
                            school: "w01", sub1: "sub1", sub2: "sub2", "detail": [{ school: "w001", sub1: "sub1", sub2: "sub2"}]

                        },]
                    },
                    {
                        school: "w2", sub1: "sub1", sub2: "sub2",
                        "detail": [{
                            school: "w02", sub1: "sub1", sub2: "sub2", "detail": [{ school: "w002", sub1: "sub1", sub2: "sub2"}]

                        },]
                    },
                ]
                },
                {
                    id: 2, name: 'kumar', age: 21, email: 'kumar@email.com',
                    "detail":
                        [{
                            school: "k1", sub1: "sub1", sub2: "sub2",
                            "detail": [{
                                school: "k01", sub1: "sub1", sub2: "sub2", "detail": [{ school: "k001", sub1: "sub1", sub2: "sub2"}]

                            },]
                        },
                        {
                            school: "k2", sub1: "sub1", sub2: "sub2",
                            "detail": [{
                                school: "k01", sub1: "sub1", sub2: "sub2", "detail": [{ school: "k001", sub1: "sub1", sub2: "sub2"}]

                            },]
                        },
                    ]
                },]],
            students: [
                {
                    id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',
                    "detail":
                        [{ school: "www", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk", innerdetails: [{ school: "wwwwwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }, { school: "wwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }] },
                        { school: "eee", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk", innerdetails: [{ school: "wwwwwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }, { school: "wwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }] },]
                },
                {
                    id: 2, name: 'kumar', age: 21, email: 'kumar@email.com',
                    "detail":
                        [{ school: "kumarschool1", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk", innerdetails: [{ school: "wwwwwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }, { school: "wwwwwwwww", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }] },
                        { school: "kumarschool2", sub1: "90", sub2: "90", sub3: "90", sub4: "kkkk" }]
                },

            ]
            ,
            selectedOption: null,
            studentDetails: [],
            // studetDetailHeader:[]
        }
    }

    componentDidMount() {

        // console.log("student details",this.state.students[0].details[0]);
    }

    handleChange = selectedOption => {
       let childtablearr= [[
            {
                id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',
                "detail":
                [{
                    school: "w1", sub1: "sub1", sub2: "sub2",
                    "detail": [{
                        school: "w01", sub1: "sub1", sub2: "sub2", "detail": [{ school: "w001", sub1: "sub1", sub2: "sub2"}]

                    },]
                },
                {
                    school: "w2", sub1: "sub1", sub2: "sub2",
                    "detail": [{
                        school: "w02", sub1: "sub1", sub2: "sub2", "detail": [{ school: "w002", sub1: "sub1", sub2: "sub2"}]

                    },]
                },
            ]
            },
            {
                id: 2, name: 'kumar', age: 21, email: 'kumar@email.com',
                "detail":
                    [{
                        school: "k1", sub1: "sub1", sub2: "sub2",
                        "detail": [{
                            school: "k01", sub1: "sub1", sub2: "sub2", "detail": [{ school: "k001", sub1: "sub1", sub2: "sub2"}]

                        },]
                    },
                    {
                        school: "k2", sub1: "sub1", sub2: "sub2",
                        "detail": [{
                            school: "k01", sub1: "sub1", sub2: "sub2", "detail": [{ school: "k001", sub1: "sub1", sub2: "sub2"}]

                        },]
                    },
                ]
            },]]
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        if(selectedOption.value==="All"){
            this.setState({childtablearr: childtablearr })
        }
        else{
            let filteredrow = childtablearr[0].filter((item) => item.name == selectedOption.value);
            this.setState({childtablearr: [filteredrow] })
        }
        
    };

    renderTableHeader = (keys) => {
        var keys = keys;
        console.log("keys", keys);
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    onClickRow = (index, data, keys) => {
        this.setState({ index: index })
        console.log("onClickRow", data);
        var keys = Object.keys(data)
        // if()
        keys.map((key, index) => {
            if (typeof (data[key]) === "object") {
                this.setState({ studentDetails: data[key] })

            }

        })
    }
    renderTableData = (tabledata, keys) => {
        return tabledata.map((row, index) => {

            return <tr ><RenderRowData key={index} data={row} keys={keys} /></tr>
        })
    }
    lineTableData = () => {
        return this.state.studentDetails.map((row, index) => {

            return <tr ><LineRowData key={index} data={row} keys={Object.keys(this.state.studentDetails[0])} /></tr>
        })
    }
    lineTableHeader = () => {
        // this.state.students[0].details[0]
    }
    onClickMore = (row, table, index) => {
        let keys = Object.keys(row);
        keys.map((kobjct, i) => {
            console.log("current index", index, this.state.childtablearr, this.state.childtablearr.slice(0, index + 1));
            let pushchild = this.state.childtablearr.slice(0, index + 1);
            this.setState({ childtablearr: pushchild, counter: this.state.counter + 1 })
            if (typeof (row[kobjct]) === "object") {
                pushchild.push(row[kobjct])
                console.log("after cancel", pushchild, row[kobjct])
                this.setState({ childtablearr: pushchild, counter: this.state.counter + 1 })
            }
        })




    }

    render() {
        console.log("table....", this.props.index)
        return (
            <div>
                <h1 className='title'>STUDENT DATABASE</h1>
                <div  style={{width: '300px',float:"right",marginBottom:"20px"}}>
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    placeholder="Select Name..."
                    />
</div>
               
                {/* <TableComponent keys={Object.keys(this.state.students[0])} data={this.state.students} table="parent" onClickMore={this.onClickMore} /> */}
                {
                    this.state.childtablearr.map((data, index) => {
                        console.log("childtablearr----", Object.keys(data[0]), data);
                      
                        return (<TableComponent index={index} keys={Object.keys(data[0])} data={data} onClickMore={this.onClickMore} />)
                    })
                }
            </div>
        )
    }
}

const LineRowData = (props) => {
    console.log("lineRowData", props.data);
    // return <td key={props.data[key]}>{props.data[key]}</td>
    return props.keys.map((key, index) => {

        return <td key={props.data[key]}>{props.data[key]}</td>

    })

}

const RenderRowData = (props) => {

    return props.keys.map((key, index) => {
        console.log("only object", props.data[key]);

        if (typeof (props.data[key]) === "object") {
            return <td key={props.data[key]}><button onClick={<><RenderRowData /><RenderRowData /></>}>click</button></td>

        }
        else {
            return <td key={props.data[key]}>{props.data[key]}</td>
        }
    })
}

const LineTable = (props) => {
    console.log("LineTable");

}
export default DynamicTable