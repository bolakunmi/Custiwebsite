import React from "react";
import defaultimage from "../pictures/profile.png";

export const Faculty = () => {
  // check hoe to do next page with bootstrap (form control)
  const facultymembers = [
    {
      name: "Segun Oluwayemi",
      Department: "Placeholder",
      Faculty: "Engineering",
      description: "blah blah blah",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },

    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },

    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },

    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
    {
      name: "Placeholder",
      Department: "Placeholder",
      description: "blah blah blah",
      Faculty: "Engineering",
    },
  ];
  return (
    <React.Fragment>
      <div className="sizing gradient">
        <h1>Meet the Faculty members</h1>
        <div className="faculty_members_container sizing">
          {facultymembers.map((each) => {
            const { name, Department, Faculty, ImageSource } = each;
            return (
              <div key={name.id} className="faculty_member">
                <img
                  src={ImageSource || defaultimage}
                  alt={name || "default image"}
                />
                <h3 style={{'color':'black'}}>{name || "placeholder"}</h3>
                <h4>{Department || "placeholder"}</h4>
                <p>{Faculty || "Placeholder"}</p>
                <p>{each.description || "blah blah blah"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
