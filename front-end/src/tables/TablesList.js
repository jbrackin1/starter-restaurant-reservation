// import React from "react";
// import { clearTable } from "../utils/api";

// function TablesList({tables = [] }) {

//   function finishHandler({
//       target: { dataset: { tableIdFinish, reservationIdFinish } } = {},
//     }) {
//       if (
//         tableIdFinish && reservationIdFinish &&
//         window.confirm(
//           "Is this table ready to seat new guests? This cannot be undone."
//         )
//       ) {
//           clearTable(tableIdFinish);
          
//       }
//   }


//   const tableRows = tables.map((table) => {
//       return (
//         <div key={table.table_id} className="col-sm-12 col-md-6 col-lg-4">
//           <div className="card mb-1">
//             <div className="card-body">
//               <h5 className="card-title">{table.table_name}</h5>
//               <p className="card-text">Capacity: {table.capacity}</p>
//               <p className="card-text" data-table-id-status={table.table_id}>{table.reservation_id ? "Occupied" : "Free"}</p>
//               {table.reservation_id ?
//                 <button 
//                   type="button" 
//                   className="btn btn-danger" 
//                   data-table-id-finish={table.table_id} 
//                   data-reservation-id-finish={table.reservation_id}
//                   onClick={finishHandler}
//                   >
//                   Finish</button> : ("")
//               }
//             </div>
//           </div>
//         </div>
//       );
//     });
    
//   return tables.length ? (
//     <div className="row mb-3">
//       {rows}
//     </div>
//   ) : (
//     <div>No Tables. Please add a new table.</div>
//   );
// }

// export default TablesList;

import React from 'react'
import {useHistory} from "react-router-dom"
import { clearTable } from '../utils/api';

function TablesList({tables}) {
    const history = useHistory()
    const handleClear = (table_id)=>{
        if (
            window.confirm(
              "Is this table ready to seat new guests? This cannot be undone."
            )
          ) {
            const AC = new AbortController();
            clearTable(table_id, AC.signal).then(()=>history.push("/")).catch((e)=>console.log(e.message));
            return () => AC.abort();
          }

    }
    const tablesRows = tables.map(({reservation_id, table_id,capacity, table_name})=>{
        return(
            <tr key={table_id}>
            <th scope="row">{table_name}</th>
            <td>{capacity}</td>
            <td data-table-id-status={table_id}>{reservation_id?"Occupied":"Free"}</td>
            <td>{reservation_id&&
            <button onClick={()=>handleClear(table_id)} 
            type="button"
            className="btn btn-alert"  
            // className="btn btn-dark" 
            data-table-id-finish={table_id}>Finish
            </button>}</td>
            </tr>
        )
    })
    return (
        <table className="table">
        <thead className="thead-light">
            <tr>
            <th scope="col">Table</th>
            <th scope="col">Capacity</th>
            <th scope="col">Vaccant ?</th>
            <th scope="col">Done</th>
            </tr>
        </thead>
        <tbody>
            {tablesRows}
        </tbody>
        </table>
    )
}

export default TablesList