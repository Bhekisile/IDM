import mainFiles from "../assets/mainFiles";

function MainTable() {
    return (
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name:</th>
            <th>Size:</th>
          </tr>
        </thead>

        <tbody>
        {mainFiles.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.size}</td>
            </tr>
          )
        })}
        </tbody>
        

        <tfoot>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Select All</td>
            <td></td>
          </tr>
        </tfoot>   
      </table>
    )
  }
  
  export default MainTable;
  