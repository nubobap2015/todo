import React from 'react'


const ProjectItem = ({project}) => {
   return (
       <tr>
           <td bgcolor={project.color}>
               {project.id}
           </td>
           <td>
               <a href={project.url}>{project.text}</a>
           </td>
           <td>
               {project.is_active}
           </td>
       </tr>
   )
}

const ProjectList = ({projects}) => {
   return (
       <table className='table table-bordered table-hover'>
           <thead>
               <tr>
                   <th>
                        ID
                   </th>
                   <th>
                        PROJECT
                   </th>
                   <th>
                        ACTIVE
                   </th>
               </tr>
           </thead>
           <tbody>
                {projects.map((project) => <ProjectItem project={project} key={project.id}/>)}
           </tbody>
       </table>
   )
}


export default ProjectList