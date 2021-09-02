import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../chatbox.css";
import { formatDate } from "../formatDate";

const getRandomColorLight = (val) => {
  const color = "hsl(" + (val % 10) * 36 + ", 100%, 75%)";
  return color;
};
const getRandomColorDark = (val) => {
  const color = "hsl(" + (val % 10) * 36 + ", 100%, 15%)";
  return color;
};

const FriendList = ({ data, index, setRoom }) => {
  return (
    <>
      {data && (
        <div className="room" onClick={() => setRoom(data)}>
          <Avatar
            className="sidebar-avatar"
            style={{
              backgroundColor: `${getRandomColorLight(index)}`,
              color: `${getRandomColorDark(index)}`,
            }}
          >
            {data.name.substring(0, 1)}
          </Avatar>
          <div className="room-details">
            <div className="grid-line">
              <p className="room-name">{data.name}</p>
              <p className="room-timestamp">{formatDate(data.lastUpdated)}</p>
            </div>
            <div className="grid-line">
              <p className="room-description">
                {data.last ? data.last : "Hello world"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FriendList;
