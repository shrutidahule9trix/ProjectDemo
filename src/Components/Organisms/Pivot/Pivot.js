import React from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";


export default function PivotTableExample() {
  const [pivotState, setPivotState] = React.useState({
    rows: ["Department"],
  cols: ["Name"],
    aggregatorName: "Sum",
   vals: ["Sales"],
    rendererName: "Table"
  });

 const data = [
  ["Name", "Department", "Sales"],
  ["Shruti", "Electronics", 100],
   ["Shruti", "Clothing", 80],   
  ["Shruti", "Clothing", 90],   
  ["Rashi", "Electronics", 150],
   ["Neha", "Clothing", 200],
  ["Sana", "Clothing", 50],
    ["Ankit", "Electronics", 300],
    ["Priya", "Clothing", 120],
  ["Amit", "Furniture", 400],
["Karan", "Furniture", 250],
  ["Ritu", "Electronics", 180],
["Vikram", "Clothing", 75],
  ["Meena", "Furniture", 500],
["Nisha", "Electronics", 90],
  ["Deepak", "Clothing", 180],
  ["Ayesha", "Electronics", 210],
 ["Rohit", "Furniture", 350],
  ["Sahil", "Clothing", 60],
 ["Isha", "Electronics", 275],
  ["Raj", "Furniture", 320],
];
return (
    <div>
    <h2> </h2>
      <PivotTableUI
    data={data}
        onChange={s => setPivotState(s)}
     {...pivotState}
     />
    </div>
  );
}













