import React, { useEffect, useState } from "react";

const Desc = ({ tab }) => {
  const [animation, setAnimation] = useState("start");
  useEffect(() => {
    setTimeout(() => {
      setAnimation("end");
    }, 100);
    return () => {
      setAnimation("");
    };
  }, [tab]);
  return (
    <div className={"start" + animation}> {[<div>0</div>, <div>1</div>, <div>2</div>][tab]}</div>
  );
};

export default Desc;
