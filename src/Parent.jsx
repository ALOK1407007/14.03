import React from 'react'

const Parent = (props) => {
  let x=props.data
  return (
    <div>
      <table border="2px">
          <tr><th>STUDENTNAME</th>
          <th>SUBJECT</th>
          <th>ARTICLES</th>
          <th>YOP</th>
          <th>NAMEOFCOMPANY</th>
          <th>HOME</th>
          <th>IMAGE</th>
          </tr>
          
            {x.map((p)=>{
              return(
                <tr>
                <td>{p.studentName}</td>
                <td>{p.subject}</td>
                <td>{p.articles}</td>
                <td>{p.yop}</td>
                <td>{p.nameofCompany}</td>
                <td>{p.home}</td>
                <td><img src={p.studentPhoto} alt='' height="20px" width="20px"/></td>
                </tr>
              )
            })}
          

      </table>
    </div>
  )
}

export default Parent