"use client";

import React from "react";
import Dropdown from "@/app/common/ui/dropdown/Dropdown";

const users = [
  { href: "/", title: "John Doe", type: "text" },
  { href: "/", title: "Mengoy Duran", type: "text" },
  { href: "/", title: "Ramses", type: "text" },
];

const ModuleDetail = () => {
  return (
    <div>
      <div>
        <div className="flex gap-x-10">
          <div>
            <h1>encryption Technique</h1>
            <span>RS</span>
          </div>
          <div>
            <h1>Users</h1>
            {users.map((user, index) => {
              return (
                <span key={index}>
                  <h1>{user.title}</h1>
                </span>
              );
            })}
            {/* <Dropdown subItems={users} title="Community Users" /> */}
          </div>
          <div>
            <h1>Secret Key</h1>
            <span>RS</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ModuleDetail;
