import React, { useState, useEffect } from "react";
import axios from "axios";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InputForm() {
  const [items, setItems] = useState([]);
  const [formData, setFormdata] = useState({
    // id: "",
    user_id: "",
    account_id_source: "",
    account_id_destination: "",
    db_source: "",
    db_destination: "",
    project_id_source: "",
    project_id_destination: "",
  });

  const fetchDetails = async () => {
    const response = await axios.get("http://localhost:8000/");
    return setItems(response.data);
  };

  const create_item = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.user_id ||
        !formData.account_id_source ||
        !formData.account_id_destination ||
        !formData.db_source ||
        !formData.db_destination ||
        !formData.project_id_source ||
        !formData.project_id_destination
      ) {
        throw new Error("All fields are required!");
      } else {
        await axios.post("http://localhost:8000/", formData);
        await fetchDetails();
        setFormdata({
          // id: "",
          user_id: "",
          account_id_source: "",
          account_id_destination: "",
          db_source: "",
          db_destination: "",
          project_id_source: "",
          project_id_destination: "",
        });
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleInput = (e) => {
    console.log("handle input", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormdata({
      ...formData,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  console.log("itemss", items);
  return (
    <div className="bg-white mt-0 sm:py-32 lg:px-8 flex-none">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact sales
        </h2>
      </div>
      <form onSubmit={create_item} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="user_id"
              className="text-lg font-semibold leading-6 text-gray-900 flex items-start"
            >
              User ID
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_id"
                value={formData.user_id}
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="account_id_source"
              className="text-lg font-semibold leading-6 text-gray-900 flex items-start"
            >
              Account ID Source
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="account_id_source"
                value={formData.account_id_source}
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="account_id_destination"
              className="text-lg font-semibold leading-6 text-gray-900 flex items-start"
            >
              Account ID Destination
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="account_id_destination"
                value={formData.account_id_destination}
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="db_source"
              className="text-lg font-semibold leading-6 text-gray-900 flex items-start"
            >
              DB Source
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="db_source"
                value={formData.db_source}
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="db_destination"
              className="text-lg font-semibold leading-6 text-gray-900 flex items-start"
            >
              DB Destination
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="db_destination"
                value={formData.db_destination}
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="project_id_source"
              className="text-lg font-semibold leading-6 text-gray-900 flex items-start"
            >
              Project ID Source
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="project_id_source"
                value={formData.project_id_source}
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="project_id_destination"
              className="text-lg font-semibold leading-6 text-gray-900 flex items-start"
            >
              Project ID Destination
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="project_id_destination"
                value={formData.project_id_destination}
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send data
          </button>
        </div>
      </form>

      <div className="mt-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Sl.No.</th>
              <th className="py-2 px-4 border">User ID</th>
              <th className="py-2 px-4 border">Account ID Source</th>
              <th className="py-2 px-4 border">Account ID Destination</th>
              <th className="py-2 px-4 border">DB Source</th>
              <th className="py-2 px-4 border">DB Destination</th>
              <th className="py-2 px-4 border">Project ID Source</th>
              <th className="py-2 px-4 border">Project ID Destination</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row) => (
              <tr key={row.id}>
                <td className="py-2 px-4 border"> {row.id} </td>
                <td className="py-2 px-4 border"> {row.user_id} </td>
                <td className="py-2 px-4 border"> {row.account_id_source} </td>
                <td className="py-2 px-4 border">
                  {row.account_id_destination}
                </td>
                <td className="py-2 px-4 border"> {row.db_source} </td>
                <td className="py-2 px-4 border"> {row.db_destination} </td>
                <td className="py-2 px-4 border"> {row.project_id_source} </td>
                <td className="py-2 px-4 border">
                  {" "}
                  {row.project_id_destination}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
