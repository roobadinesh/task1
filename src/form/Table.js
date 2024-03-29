import React, {Component} from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table } from "antd";


export default class Table1  extends Component{
    
    render(){
        
const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Age",
      dataIndex: "age"
    },
    {
      title: "Gender",
      dataIndex: "gender"
    },
    {
      title: "Mobile ",
      dataIndex: "mobile"
    },
    {
      title: "Address",
      dataIndex: "address"
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Edit</a>,
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
      },
  ];
  const data = [
    {
      key: "1",
      name: "Dinesh",
      age: 23,
      gender: "male",
      mobile: "7639991310",
      address: "New York No. 1 Lake Park"
    }
  ];
  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };
        return(
            <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: true, }} />,
            </div>
        )}

}

