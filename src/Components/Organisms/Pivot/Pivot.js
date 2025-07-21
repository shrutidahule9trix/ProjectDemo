
import React, { useEffect, useState } from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import { aggregators } from "react-pivottable/Utilities";
import { fetchPivotTable } from "../../../Services/pivot.services";

export default function PivotTableExample() {
  const customAggregators = {
    Sum: aggregators["Sum"],
        Count: aggregators["Count"],

    Average: aggregators["Average"],
    Median: aggregators["Median"],
    Minimum: aggregators["Minimum"],
    Maximum: aggregators["Maximum"],


  };

  const [pivotState, setPivotState] = useState({
    rows: [],
    cols: [],
    aggregatorName: "Sum",
    vals: ["Sales"],
    rendererName: "Table",
   

  });

  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const loadData = async () => {
      const table = await fetchPivotTable();
      setPivotState((prev)=>({...prev, vals: ["Sales"]}))
      setData(table);
    };
    loadData();
  }, []);

  return (
    <div style={{ marginTop: "5%", padding: "20px" }}>
      <h2></h2>
      <PivotTableUI
        data={data}
        aggregators={customAggregators}
        onChange={(s) => {
          s.rows = [...new Set(s.rows)];
          s.cols = [...new Set(s.cols)];
          setPivotState(s);
        }}
        {...pivotState}
      />
    </div>
  );
}

