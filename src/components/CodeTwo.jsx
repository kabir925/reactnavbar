import React, { useState } from "react";

const CodeTwo = () => {
  const games = ["chess", "cricket", "badminton"];
  const [arr,setarr]=useState(games);
  console.log(arr);
  const handleDelete = (index) => {
    console.log(index);
    setarr(arr.filter((item, i)=> i!==index)) //remove of the selected data
    // let newarr=arr;
    // let filteredarr=newarr.filter((item,i)=>{
    //     return i!==index;
    // });
    // setarr(filteredarr);
  };
  return (
    <div>
      <ul>
        {arr.map((item, index) => {  //point to be noticed
          return (
            <li>
              {item}
              <button onClick={()=>{handleDelete(index)}}>
                click me{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CodeTwo;
