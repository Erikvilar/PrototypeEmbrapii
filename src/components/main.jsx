import React from "react";

import { StaticCompose } from "./tools/tools";
import MenuLinks from "./menuLinks/menuLinks";
import { Outlet } from "react-router-dom";


function main() {
  return (
 
    <main>
      <section className="main-layout">
        <StaticCompose links={<MenuLinks />} />
        <div className="outlet-layout">
     
          <Outlet />
        </div>
      </section>
    </main>
  );
}
export default main;
