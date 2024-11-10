import { useState } from "react";
import BGImage from "../assets/bg.jpg";

function RegistrationForm() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        batchYear: "",
        address: ""
    });

    // HANDLE ON CHANGE
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }))
    };

    // HANDLE REGISTER
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(userData);
        setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            batchYear: "",
            address: ""
        })
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BGImage})` }}
        >
            <div className="backdrop-blur-md border-2 border-slate-500 rounded-lg shadow-lg p-8 w-full max-w-md mx-1 sm:mx-0">
                <h2 className="text-center text-2xl font-bold text-white">100th Year Reunion Registration</h2>
                <p className="text-center text-sm text-gray-300 mb-8">Register with us to join the celebration!</p>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name Fields */}
                    <div>
                        <label className="block text-gray-200 text-sm mb-1">Name</label>
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={userData.firstName}
                                onChange={handleOnChange}
                                className="w-1/2 px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={userData.lastName}
                                onChange={handleOnChange}
                                className="w-1/2 px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-gray-200 text-sm mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={userData.phone}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Batch of Year */}
                    <div>
                        <label className="block text-gray-200 text-sm mb-1">Batch of Year</label>
                        <select
                            name="batchYear"
                            value={userData.batchYear}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option> - Select Batch Year - </option>
                            {[...Array(100).keys()].map((i) => {
                                const year = 1925 + i;
                                return <option key={year} value={year}>{year}</option>;
                            })}
                        </select>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-200 text-sm mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={userData.address}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Register Now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
