import React from "react";

type Props = {
  firstname: string;
  lastname: string;
  age: number;
  isStudent: boolean;
};

const Info = (props: Props) => {
  return (
    <div>
      Name: {props.firstname} {props.lastname}, Age: {props.age}, Is student:{" "}
      {props.isStudent ? "Yes" : "No"}
    </div>
  );
};

export default Info;
