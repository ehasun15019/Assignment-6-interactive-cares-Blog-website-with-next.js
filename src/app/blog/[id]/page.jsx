import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <p>This</p>
      {params.id}
    </div>
  );
};

export default page;
