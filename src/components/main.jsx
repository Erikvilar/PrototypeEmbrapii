import React from "react";

import { NotesTitles, Static_compose } from "./props/propsComponents";
import Static_links from "./props/linksComponents";
import { Outlet } from "react-router-dom";
import Routing from "../Routing";

function main() {
  return (
    //Classname
    <main>
      <section className="main-layout">
        <Static_compose links={<Static_links />} />
        <div className="outlet-layout">
     
          <Outlet />
        </div>
      </section>
    </main>
  );
}
export default main;
