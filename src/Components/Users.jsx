import { useState } from "react";
import {useLoaderData} from 'react-router-dom'
import Swal from 'sweetalert2'


// step 21 firebase 
const Users = () => {
    
    // step 23
    const loadedUsers = useLoaderData(); 
    const [users, setUsers] = useState(loadedUsers);

    // step 25
    const handleDelete = id =>{
        // step 26
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
            //   swalWithBootstrapButtons.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });

            // step 27 delete from data base
            fetch(`http://localhost:5000/users/${id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log('Delete is done', data)
                // step 28 
                if(data.deletedCount){
                    swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                    });

                    // step 29
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    }
    return (
        <div>
            <h2 className="text-3xl text-center">Users : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Created At</th>
                        <th>Last login At</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user._id}>
                            <th>{user._id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastSignInTime}</td>
                            <td className="flex gap-4">
                                {/* <button className="btn">view</button> */}
                                <button className="btn" onClick={() => handleDelete(user._id)}>X</button>
                                <button className="btn">Update</button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;