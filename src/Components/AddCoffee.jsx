import Swal from 'sweetalert2'
// step 13
const AddCoffee = () => {

    // step 24 
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);
        // step 27 sending data to server
        fetch(`http://localhost:5000/coffee`, {
            // gonna use post method to send the data
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // step 30
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee added Successful' ,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div className="max-w-md mx-auto p-24 bg-[#F4F3F0] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Add Coffee</h2>
            {/* step 23 Form */}
            <form onSubmit={handleAddCoffee}>
            {/* form row name*/}
            <div className="md:flex gap-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Coffee Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter coffee name" 
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
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
            </div>
            <div>
                <input type="submit" className="btn btn-wide bg-pink-300" value="Add Coffee" />
            </div>
            </form>
        </div>
    );
};

export default AddCoffee;
