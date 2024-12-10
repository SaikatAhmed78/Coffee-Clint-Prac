import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const loadCoffee = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const origin = form.origin.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const imageUrl = form.imageUrl.value;
        const allCoffee = { name, type, origin, chef, price, imageUrl };
        console.log(allCoffee);

        fetch(`http://localhost:5000/coffee/${loadCoffee._id}`, {
            method: 'PUT', 
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee has been updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/'); // Navigate to home page after success
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
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Update Coffee</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Update the details of your coffee below.
                    </p>
                </div>
                <form onSubmit={handleUpdateCoffee} className="mt-8 space-y-6">
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
                                defaultValue={loadCoffee.name} 
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
                                defaultValue={loadCoffee.type} 
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
                                defaultValue={loadCoffee.origin} 
                            />
                        </div>
                        <div>
                            <label htmlFor="chef" className="sr-only">Chef</label>
                            <input 
                                id="chef" 
                                name="chef" 
                                type="text" 
                                autoComplete="chef" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Chef" 
                                defaultValue={loadCoffee.chef} 
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
                                defaultValue={loadCoffee.price} 
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
                                defaultValue={loadCoffee.imageUrl} 
                            />
                        </div>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
