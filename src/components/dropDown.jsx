import React, {useState} from "react";

const SelectRadius = () => {
  const [selectRadius, setSelectRadius] = useState(5);

  const handleEventChange = (e) => {
        setSelectRadius(e.target.value);

  };

  Return(

    <details className="dropdown">
  <summary className="btn m-1">Select Search Radius</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>5 miles</a></li>
    <li><a>10 miles</a></li>
    <li><a>20 miles</a></li>
    <li><a>50 miles</a></li>
  </ul>
</details>



  )

}


export default dropDown