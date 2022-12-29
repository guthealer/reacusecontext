import { useContext } from "react";
import { Fname } from "./Usecontext";
import { Lname } from "./Usecontext";
export default function Contextchild() {
  const fname = useContext(Fname);
  const lname = useContext(Lname);
  return (
    <div>
      {fname}
      {lname}
    </div>
  );
}
