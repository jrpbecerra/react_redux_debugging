import { useHistory } from "react-router-dom";

export const SomeOtherComponent = ({setActiveView}) => {
  const history = useHistory();
  const handleClick = () => {
    const newPath = "/bug/troublesome";
    setActiveView("troublesome");
    history.replace(newPath);
  }


  return(
    <div onClick={handleClick}>
      Click to change history
    </div>
  )
}
