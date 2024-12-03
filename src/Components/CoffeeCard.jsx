import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


// step 34 make card and 49 receive data coffees, setCoffees
const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    // step 35 Delete
    const handleDelete = _id =>{
        console.log(_id);
        // Step 36 add are u sure want to delete swal
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            // console.log('delete confirm');

            // step 38 
            fetch(`http://localhost:5000/coffee/${_id}`, {
                // step 40
                method  : "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // step 39
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                    }); 
                    // step 50
                    const remaining = coffees.filter(cof =>cof._id !== _id);
                    setCoffees(remaining);
                }
            })
            }
          });
    };

    return (
        <div className="card card-side bg-base-100 shadow-xl p-4">
        <figure>
            <img
            src={photo}
            alt="Movie" />
        </figure>
        <div className="flex justify-between w-full items-center">
            <div>
                <h2 className="card-title">{name}</h2>
                <p>Quantity : {quantity}</p>
                <p>supplier : {supplier}</p>
                <p>taste of coffee : {taste}</p>
                <p>category : {category}</p>
                <p>Details : {details}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="join join-vertical space-y-6">
                    <button className="btn join-item">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                    <button className="btn join-item">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500">X</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeCard;