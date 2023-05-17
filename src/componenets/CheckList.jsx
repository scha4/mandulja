import React from "react";
import {
  AiFillCheckCircle,
  AiFillStar,
  AiFillSetting,
  AiOutlineFieldTime,
  AiOutlineNotification,
} from "react-icons/ai";

function CheckList(props) {
  return (
    <>
      <div className="flex">
        <AiFillCheckCircle size={25} className="fill-orange-400" />{" "}
        <p className="text-xl"> {props.description}</p>
      </div>
    </>
  );
}

export default CheckList;
