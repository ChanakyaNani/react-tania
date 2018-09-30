import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>

  );
}

const TableBody = (props) => { // simple component or function (ES6 arrow syntax)
  const rows = props.charData.map((row,index) => {
    return (
      <tr key = {index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick = {()=> props.remChar(index)}>Delete</button></td>
      </tr>
    );
  });
  return ( // this does not include render()
    <tbody>
     {rows}
    </tbody>
  );
}

class Table extends Component { 
  render() {// a class component must include render()
    const {characterData,removeCharacter} = this.props; // ES6 property shorthand
    return (// return can only return one parent element
      <table>
        <TableHeader />
        <TableBody 
          charData={characterData}
          remChar = {removeCharacter}
        />

      </table>
    );
  }
}

export default Table;