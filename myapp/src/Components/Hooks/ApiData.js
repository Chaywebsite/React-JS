import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useCustomHook from './CustomHook';


const ApiData = () => {
    const posts = useCustomHook("https://jsonplaceholder.typicode.com/posts")
    const users = useCustomHook("https://jsonplaceholder.typicode.com/users")
  return (
    <div className='container p-5'>
        <h1>Users</h1>
        <div className="table-responsive">
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })};     
                </tbody>
            </table>
        </div>
        <h1>Posts</h1>
        <div className="table-responsive">
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post)=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    })}      
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default ApiData