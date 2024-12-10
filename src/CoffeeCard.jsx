import React from 'react';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            );
                            const remaining = coffees.filter(coff => coff._id !== coffee._id);
                            setCoffees(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img src={coffee.imageUrl} alt={coffee.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{coffee.name}</h2>
                <p className="text-gray-600">Type: {coffee.type}</p>
                <p className="text-gray-600">Origin: {coffee.origin}</p>
                <p className="text-gray-600">Chef: {coffee.chef}</p>
                <p className="text-gray-600">Price: ${coffee.price}</p>
                <div className="mt-4 flex justify-between items-center">
                    <button className="text-blue-500 hover:text-blue-700">
                        <FaEye size={20} />
                    </button>
                    <Link to={`updateCoffee/${coffee._id}`}>
                        <button className="text-green-500 hover:text-green-700">
                            <FaEdit size={20} />
                        </button>
                    </Link>

                    <button onClick={() => handleDelete(coffee._id)} className="text-red-500 hover:text-red-700">
                        <FaTrashAlt size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
