import React, { useEffect, useState } from 'react';
import "jquery/dist/jquery"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-dt/js/dataTables.dataTables"
import $ from "jquery"

const LargeData = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>response.json())
        .then((json)=>setComments(json))
    })
setTimeout(()=>{
    $(document).ready( function () {
        $('#myTable').DataTable();
    });
},1000); 
  return (
    <div className='container p-5'>
        <div className="table-responsive">
            <table className="table" id='myTable'>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment)=>{
                        return(
                            <tr>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default LargeData