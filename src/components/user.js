import React, { useContext } from "react";
import { UserdetailContext } from "../App";

const User = () => {
  const { userdetail } = useContext(UserdetailContext);

  return (
    <div>
      <svg viewBox="-100 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgb(50, 85, 182)"
          d="M38.1,-66.3C50,-59,60.8,-50.2,68.7,-38.9C76.6,-27.6,81.7,-13.8,81.7,0C81.6,13.7,76.5,27.5,69.3,40C62.1,52.6,52.8,64,40.9,71.1C29,78.2,14.5,81,-0.4,81.7C-15.2,82.3,-30.4,80.7,-42.6,73.7C-54.7,66.8,-63.8,54.4,-72.8,41.2C-81.9,28.1,-90.8,14,-90.9,-0.1C-91,-14.1,-82.2,-28.3,-72.6,-40.4C-63,-52.6,-52.6,-62.8,-40.3,-69.9C-28.1,-77,-14,-81.1,-0.5,-80.2C13.1,-79.4,26.1,-73.6,38.1,-66.3Z"
          transform="translate(100 100)"
        />
        <text x="20" y="100" fill="black">
          Welcome,
          {userdetail.name === ""
            ? userdetail.email.split("@")[0]
            : userdetail.name}
        </text>
      </svg>
    </div>
  );
};

export default User;
