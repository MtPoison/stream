import React from "react";
import Elem from "./Elem"

function List({list, setList}) {

  return (
    <div>
      {list.map((item) => {
        return (<Elem key={item.id} text={item.text} id={item.id} setList={setList} list={list}/>
        );
      })}
    </div>
  );
}

export default List;