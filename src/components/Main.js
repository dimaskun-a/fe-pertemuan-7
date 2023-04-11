import React from "react";
import Hello from "./Hello";



/**
 * Membuat Component Main
 */
function Main() {
  return (
    <div>
      <main>
        <Hello name="sinka" />
        <Hello name="shani" />
        <Hello name="indah" />
        <Hello name="freya" />
        <Hello name="grachia" />
      </main>
    </div>
  );
}

// export Component Main
export default Main;