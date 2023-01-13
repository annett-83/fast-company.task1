import React, { useState } from "react";
import api from "../api";
import { tableLabel } from "./message";

//import PhraseCounter from "./phrase_counter";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handeleDelete = (id) => {
    const newArray = users.filter((user) => user._id !== id);
    setUsers(newArray);
  };
  const renderPhrase = (number) => {
    if ((number>=2)&&(number<=4)){
      return "чeловека тусанут";
    } else {
      return "человек тусанет"; 
    }
  };
   const renderUsers = () => {
     return users.map((user) => (
       <tr key={user._id}>
         <td>{user.name}</td>
         <td> {user.profession.name}</td>
         <td className="character">
           {user.qualities.map((quality) => (
             <span key={quality._id} className={"badge bg-" + quality.color}>
               {quality.name}
             </span>
           ))}
         </td>
         <td>{user.completedMeetings}</td>
         <td> {user.rate}</td>
         <td>
           <button className="badge bg-danger" onClick={()=> handeleDelete(user._id)}>delete</button>
         </td>
       </tr>
     ));
   };

  return (
    <div>
      {tableLabel(users,renderPhrase)}
      {users.length > 0 && (
        <table className="greenTable">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Профессия</th>
              <th scope="col">Качества</th>
              <th scope="col">Кол-во свиданий</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      )}
    </div>
  );

}
export default Users;

