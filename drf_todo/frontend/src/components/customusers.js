import React from 'react'


const CUItem = ({customUser}) => {
   return (
       <tr>
           <td>
               {customUser.id}
           </td>
           <td>
               <a href={customUser.url}>{customUser.username}</a>
           </td>
           <td>
               {customUser.first_name}
           </td>
           <td>
               {customUser.last_name}
           </td>
           <td>
               {customUser.email}
           </td>
       </tr>
   )
}

const CUList = ({customUsers}) => {
   return (
       <table class='table table-bordered table-hover'>
           <thead>
               <tr>
                   <th>
                        ID
                   </th>
                   <th>
                        USERNAME
                   </th>
                   <th>
                        FIRST_NAME
                   </th>
                   <th>
                        LAST_NAME
                   </th>
                   <th>
                        EMAIL
                   </th>
               </tr>
           </thead>
           <tbody>
                {customUsers.map((customUser) => <CUItem customUser={customUser} />)}
           </tbody>
       </table>
   )
}


export default CUList