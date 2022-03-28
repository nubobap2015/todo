import React from 'react'


const TodoItem = ({todo}) => {
   return (
       <tr>
           <td bgcolor={todo.color}>
               {todo.id}
           </td>
           <td>
               <a href={todo.url}>{todo.text}</a>
           </td>
           <td>
               {todo.is_active}
           </td>
       </tr>
   )
}

const TodoList = ({todos}) => {
   return (
       <table className='table table-bordered table-hover'>
           <thead>
               <tr>
                   <th>
                        ID
                   </th>
                   <th>
                        TODO
                   </th>
                   <th>
                        ACTIVE
                   </th>
               </tr>
           </thead>
           <tbody>
                {todos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}
           </tbody>
       </table>
   )
}


export default TodoList