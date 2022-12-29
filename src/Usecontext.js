import { createContext } from "react";
import Contextchild from "./Contextchild";
const Fname = createContext();
const Lname = createContext();

function Usecontext() {
  return (
    <div>
      <Fname.Provider value="akash">
        <Lname.Provider value="kumar">
          <Contextchild />
        </Lname.Provider>
      </Fname.Provider>
    </div>
  );
}

export default Usecontext;
export { Fname };
export { Lname };
