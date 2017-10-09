import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../components/css/Table.css';

class Table extends React.Component{
  constructor(){
    super();
    var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];
  this.state = {
    products:products
  }
  this.onClickProductSelected = this.onClickProductSelected.bind(this);
}


cellButton(cell, row, enumObject, rowIndex) {
    return (
       <button
          type="button"
          className="glyphicon glyphicon-play tablebutton"
          onClick={() =>
          this.onClickProductSelected(cell, row, rowIndex)}
       >
      {/* Click me { rowIndex }*/}
       </button>
    )
}

onClickProductSelected(cell, row, rowIndex){
    let rowindex=rowIndex+1;
    {this.state.products.filter((remove)=>{console.log("remove is-----"+remove.id+"rowIndex------------"+rowindex);let elems = document.getElementsByClassName('tablebutton');if(remove.id !== rowindex){return(elems[remove.id].style.display = 'none');}});}
}
  render() {
    return (
      <div>
        <BootstrapTable
          data={this.state.products } striped={true} hover={true}
          pagination>
          <TableHeaderColumn dataField='id' isKey style="padding:8px 8px;">ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' style="padding: 8px 1px 8px 15px;;">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn dataField='Button' dataFormat={this.cellButton.bind(this)} >icon</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;
