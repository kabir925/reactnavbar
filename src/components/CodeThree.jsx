import React, { useState } from "react";

const CodeThree = () => {
  const games = ["chess", "cricket", "badminton"];
  const [check, setchecked] = useState(false);
  const [currentindex, setindex] = useState();
  const [arr, setarr] = useState(games);
  console.log(arr);
  const handleDelete = (index) => {
    console.log(index);
    setarr(arr.filter((item, i) => i !== index)); //remove of the selected data
  };
  const handleCheckBox = (value, index) => {
    console.log(value, index);
    setchecked(!check);
    setindex(index);
  };
  //   setchecked(check)
  return (
    <div>
      <ul>
        {arr.map((item, index) => {
          //point to be noticed
          return (
            <li key={index}>
              <input
                type="checkbox"
                // onClick={handleCheckBox(!check)}
                onChange={(e) => {
                  handleCheckBox(e.target.value, index);
                }}
              ></input>
              {item}

              {check && currentindex === index && (
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  click me{" "}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CodeThree;
