import React from "react";


function Result({name, description, address, types, photoReference}) {
       
  return(

<>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="{photoReference}"
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{address}</div>
      <div className="badge badge-outline">{types}</div>
    </div>
  </div>
</div>

</>
    )
};


export default Result