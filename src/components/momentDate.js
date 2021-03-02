import moment from 'moment';
import React from 'react';
const MomentDate = () =>{
  const value = moment().format("DD/MM/YYYY")
  console.log(value);
  // const startDate = value.clone().startOf("month").startOf("week");
  return (
    <div className="moment-date-area">
      <h3 style={{textAlign:"center"}}>Moment Date</h3>
      <h5>{value}</h5>
    </div>
  )
}

export default MomentDate
