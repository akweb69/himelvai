import './App.css'
import { useState } from 'react';

function App() {
  const [patients, setPatients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const name = e.target.name.value;
    const age = e.target.age.value;
    const disease = e.target.disease.value;
    const bloodGroup = e.target.bloodGroup.value;

    if (!name || !age || !disease || !bloodGroup) {
      alert("Please fill out all fields!");
      return;
    }

    const newPatient = { name, age, disease, bloodGroup };

    // Add the new patient to the list
    setPatients([...patients, newPatient]);

    // Clear the form fields
    e.target.reset();
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center py-10 flex-col items-center">
        <h1 className="text-4xl pb-10 text-green-400 font-semibold">
          Patient Management System
        </h1>
        <div className="">
          <form
            className="w-[500px] p-10 space-y-4 border border-accent rounded-lg"
            onSubmit={handleSubmit}
          >
            <h1 className="text-start text-2xl font-bold text-gray-800">Add Patient</h1>
            <input
              className="input input-accent w-full p-2"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <input
              className="input input-accent w-full p-2"
              type="text"
              name="age"
              placeholder="Enter Age"
            />
            <input
              className="input input-accent w-full p-2"
              type="text"
              name="disease"
              placeholder="Enter Disease"
            />
            <select
              className="select select-accent w-full"
              name="bloodGroup"
            >
              <option value="">Select Your Blood Group</option>
              <option value="A+">A (positive)</option>
              <option value="A-">A (Negative)</option>
              <option value="B+">B (positive)</option>
              <option value="B-">B (Negative)</option>
              <option value="AB+">AB (Positive)</option>
              <option value="AB-">AB (Negative)</option>
              <option value="O+">O (Positive)</option>
              <option value="O-">O (Negative)</option>
            </select>
            <button
              type="submit"
              className="w-full p-2 text-center btn btn-accent"
            >
              Add Patient
            </button>
          </form>
        </div>
        {/* data table */}
        <div className="w-11/12 mx-auto overflow-x-auto py-20">
          <table className="table border">
            <thead>
              <tr>
                <th className="border border-accent bg-green-600 text-white">SL</th>
                <th className="border border-accent bg-green-600 text-white">Name</th>
                <th className="border border-accent bg-green-600 text-white">Age</th>
                <th className="border border-accent bg-green-600 text-white">Disease</th>
                <th className="border border-accent bg-green-600 text-white">Blood Group</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td className="border border-accent">{index + 1}</td>
                  <td className="border border-accent">{patient.name}</td>
                  <td className="border border-accent">{patient.age}</td>
                  <td className="border border-accent">{patient.disease}</td>
                  <td className="border border-accent">{patient.bloodGroup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
