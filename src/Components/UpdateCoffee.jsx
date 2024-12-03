import Swal from 'sweetalert2'
import {useLoaderData} from 'react-router-dom'
// step 14
const UpdateCoffee = () => {
    // step 43 
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updatedCoffee);
        // step 27 sending data to server and step 45 add dynamic id
        fetch(`http://localhost:5000/coffee/${_id}`, {
            // gonna use post method to send the data
            // step 45 add put
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // step 30 and 47 modified count
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee updated Successful' ,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    // }step 44 shob niye ashba form and function
    return (
        <div className="max-w-md mx-auto p-24 bg-[#F4F3F0] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Update Coffee : {name}</h2>
            {/* step 23 Form */}
            <form onSubmit={handleUpdateCoffee}>
            {/* form row name*/}
            <div className="md:flex gap-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Coffee Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter coffee name" 
                        defaultValue={name}
                        required
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Available Quantity</label>
                    <input 
                        type="text"  
                        name="quantity" 
                        placeholder="available quantity" 
                        required
                        defaultValue={quantity}
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                {/* <div className="flex justify-center">
                    <button 
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div> */}
            </div>
            {/* form row category  */}
            <div className="md:flex gap-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Supplier Name</label>
                    <input 
                        type="text" 
                        name="supplier" 
                        placeholder="supplier name" 
                        defaultValue={supplier}
                        required
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Taste</label>
                    <input 
                        type="text"  
                        name="taste" 
                        placeholder="taste" 
                        defaultValue={taste}
                        required
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                {/* <div className="flex justify-center">
                    <button 
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div> */}
            </div>
            {/* form  category and details row */}
            <div className="md:flex gap-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Category</label>
                    <input 
                        type="text" 
                        name="category" 
                        placeholder="category" 
                        required
                        defaultValue={category}
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Details</label>
                    <input 
                        type="text"  
                        name="details" 
                        placeholder="Details" 
                        required
                        defaultValue={details}
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                {/* <div className="flex justify-center">
                    <button 
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div> */}
            </div>
            {/* form  row */}
            <div className="md:flex gap-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Photo url</label>
                    <input 
                        type="text" 
                        name="photo" 
                        placeholder="photo-url" 
                        required
                        defaultValue={photo}
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
            </div>
            <div>
                <input type="submit" className="btn btn-wide bg-pink-300" value="Update Coffee" />
            </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;