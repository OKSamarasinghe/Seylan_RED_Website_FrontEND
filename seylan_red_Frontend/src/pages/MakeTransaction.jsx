import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SeylanFooter from '../components/SeylanFooter';
import { useNavigate } from 'react-router-dom';
import { makeTransaction } from '../services/makeTransaction';

const MakeTransaction = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const [formData, setFormData] = useState({
        accountNumber: '',
        branchName: '',
        receiverUserName: '',
        amount: '',
        transactionType: '',
        createdDate: '',
    });

    const [error, setError] = useState(null); // State to handle errors

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(userId);
            const transactionData = {
                AccountNumber: formData.accountNumber, // Convert to string
                BranchName: formData.branchName,
                ReceiverUserName: formData.receiverUserName,
                Amount: parseFloat(formData.amount), // Ensure the amount is a valid number
                TransactionType: formData.transactionType,
                CreatedDate: formData.createdDate,
                userId: parseInt(userId),
            };
            console.log(transactionData);
            const response = await makeTransaction(transactionData); // Call the API function
            alert('Transaction Successful!');
            navigate('/services');
        } catch (err) {
            console.error('Error during transaction:', err);
            setError(err.message); // Display error message
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <section className="py-20">
                <h1 className="text-center text-4xl font-bold mb-8">Make Transaction</h1>
                <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="accountNumber">
                            Account Number
                        </label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter your account number"
                            required
                        />

                        <label className="block text-sm font-medium text-gray-700 mt-4" htmlFor="branchName">
                            Branch Name
                        </label>
                        <input
                            type="text"
                            id="branchName"
                            name="branchName"
                            value={formData.branchName}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter branch name"
                            required
                        />

                        <label className="block text-sm font-medium text-gray-700 mt-4" htmlFor="receiverUserName">
                            Receiver User Name
                        </label>
                        <input
                            type="text"
                            id="receiverUserName"
                            name="receiverUserName"
                            value={formData.receiverUserName}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter receiver's username"
                            required
                        />

                        <label className="block text-sm font-medium text-gray-700 mt-4" htmlFor="amount">
                            Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter the amount"
                            required
                        />

                        <label className="block text-sm font-medium text-gray-700 mt-4" htmlFor="transactionType">
                            Transaction Type
                        </label>
                        <select
                            id="transactionType"
                            name="transactionType"
                            value={formData.transactionType}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="">Select Transaction Type</option>
                            <option value="Deposit">Deposit</option>
                            <option value="Transfer">Transfer</option>
                            <option value="Withdraw">Withdraw</option>
                        </select>

                        <label className="block text-sm font-medium text-gray-700 mt-4" htmlFor="createdDate">
                            Created Date
                        </label>
                        <input
                            type="date"
                            id="createdDate"
                            name="createdDate"
                            value={formData.createdDate}
                            onChange={handleChange}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md"
                            required
                        />

                        {error && (
                            <p className="text-red-500 mt-4">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Submit Transaction
                        </button>
                    </form>
                </div>
            </section>
            <SeylanFooter />
        </div>
    );
};

export default MakeTransaction;
