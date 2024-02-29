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
      <table className="table-fixed w-3/4 border border-stone-800 overflow-auto mx-6 px-6 text-stone-300">
        <thead className="">
          <tr className="border border-stone-800 h-[40px]">
            <th className="cell-width"><input type="checkbox" /></th>
            <th className="flex items-center h-[50px]">Name:</th>
            <th>Size:</th>
          </tr>
        </thead>

        <tbody className="table-body">
        
          {mainFiles.map(({id, name, size}) => {
          return (
            <tr className="h-[40px] hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300" key={id}>
              <td className="pl-5">
              <Checkbox 
                id={id}
                type="checkbox"
                name={name}
                size={size}
                handleClick={handleClick}
                isChecked={isCheck.includes(id)} />
              </td>
              <td className="pl-4 flex items-center h-[50px] gap-4">{name}</td>
              <td className="text-center">{size}</td>
            </tr>
          )
          })}
          </tbody>

        <tfoot>
          <tr className="border-t border-stone-700 h-[40px]">
            <td className="flex justify-evenly items-center pt-4">
            <Checkbox
              type="checkbox"
              name="selectAll"
              id="selectAll"
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
            />
            </td>
            <td className="pl-4">Select All
            </td>
            <td></td>
          </tr>
        </tfoot>   
      </table>
    )
  }
  
  export default MainTable;
  