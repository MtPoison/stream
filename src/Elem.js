import React from "react";

const Elem = ({ text, id, setList, list }) => {
  function handleRemove() {
    const tmpList = [...list];
    console.log("ma liste", tmpList);
    console.log("mon id", id);
    var index = tmpList.findIndex(function (o) {
      return o.id === id;
    });
    if (index !== -1) tmpList.splice(index, 1);
    console.log("ma liste après supression", tmpList);
    setList(tmpList);
    localStorage.setItem("list", JSON.stringify(tmpList))
  }

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid" }}>
      <p>{text}</p> <button onClick={handleRemove}>remove</button>
    </div>
  );
};

export default Elem;