import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form  = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const origin = form.origin.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const imageUrl = form.imageUrl.value;
        const allCoffee = {name, type, origin, chef, price, imageUrl};

        fetch('http://localhost:5000/coffee', {
            method: 'POST', 
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(allCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee has been added successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Coffee</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Fill out the form below to add a new coffee to the list.
                    </p>
                </div>
                <form onSubmit={handleAddCoffee} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">Coffee Name</label>
                            <input 
                                id="name" 
                                name="name" 
                                type="text" 
                                autoComplete="name" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Coffee Name"  
                            />
                        </div>
                        <div>
                            <label htmlFor="type" className="sr-only">Coffee Type</label>
                            <input 
                                id="type" 
                                name="type" 
                                type="text" 
                                autoComplete="type" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Coffee Type" 
                            />
                        </div>
                        <div>
                            <label htmlFor="origin" className="sr-only">Origin</label>
                            <input 
                                id="origin" 
                                name="origin" 
                                type="text" 
                                autoComplete="origin" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Origin" 
                            />
                        </div>
                        <div>
                            <label htmlFor="roast" className="sr-only">Cheaf</label>
                            <input 
                                id="roast" 
                                name="chef" 
                                type="text" 
                                autoComplete="roast" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Chef" 
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="sr-only">Price</label>
                            <input 
                                id="price" 
                                name="price" 
                                type="text" 
                                autoComplete="price" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Price" 
                            />
                        </div>
                        <div>
                            <label htmlFor="imageUrl" className="sr-only">Image URL</label>
                            <input 
                                id="imageUrl" 
                                name="imageUrl" 
                                type="text" 
                                autoComplete="imageUrl" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Image URL" 
                            />
                        </div>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
