import React from "react";

export default function ProjectsLayout(props: {
  children: React.ReactNode
}) {
  return (
      <div className={"flex flex-col items-center w-full mx-auto space-y-10"}>
          {props.children}
      </div>
  );
}