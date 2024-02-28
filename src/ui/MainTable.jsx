import { useEffect, useState } from "react";
import mainFiles from "../assets/mainFiles";
import Checkbox from "./Checkbox";

function MainTable() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(mainFiles);
  }, []);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

    return (
      <table className="w-3/4">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name:</th>
            <th>Size:</th>
          </tr>
        </thead>

        <tbody>
        
          {mainFiles.map(({id, name, size}) => {
          return (
            <tr key={id}>
              <td>
              <Checkbox 
                id={id}
                type="checkbox"
                name={name}
                size={size}
                handleClick={handleClick}
                isChecked={isCheck.includes(id)} />
              </td>
              <td>{name}</td>
              <td>{size}</td>
            </tr>
          )
          })}
          </tbody>

        <tfoot>
          <tr>
            <td>
            <Checkbox
              type="checkbox"
              name="selectAll"
              id="selectAll"
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
            />
            </td>
            <td>Select All
            </td>
            <td></td>
          </tr>
        </tfoot>   
      </table>
    )
  }
  
  export default MainTable;
  