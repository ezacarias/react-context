import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Contenido = () => {
    const user = useContext(UserContext);

    return (
    <div>{`Hello ${user} again!`} </div>
  )
}

export default Contenido