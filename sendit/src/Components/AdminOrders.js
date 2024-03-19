// import React, { useState, useEffect } from "react";
// import Menu from "./Menu";
// import { MdEdit } from "react-icons/md";
// import { useSnackbar } from "notistack";
// import Admin from "../assets/Admin1.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AdminOrders = ({ user, loading, setLoading, setUser, refresh, setRefresh }) => {
//   const [page, setPage] = useState(1);
//   const [parcelPerPage] = useState(10);
//   const [editing, setEditing] = useState({});
//   const { enqueueSnackbar } = useSnackbar();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [parcel, setParcel] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     let apiUrl = "https://sendit-backend-lje2.onrender.com/orders";
//     const queryParams = user.role === 'admin' ? "?view=all" : `?user_id=${user.id}`;
//     fetch(apiUrl + queryParams, { credentials: "include" })
//       .then((r) => r.json())
//       .then((data) => {
//         setParcel(data);
//         setRefresh(!refresh);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log("Error fetching session:", error);
//       });
//   }, [user.id, user.role, setLoading, setRefresh, refresh]);

//   function handleUpdateParcel(updatedParcel) {
//     const updatedParcels = parcel.map((p) => {
//       if (p.order_number === updatedParcel.order_number) {
//         return updatedParcel;
//       } else {
//         return p;
//       }
//     });
//     setParcel(updatedParcels);
//   }

//   const toggleEditing = (parcelId) => {
//     setEditing((prevEditing) => {
//       const newEditingState = { ...prevEditing, [parcelId]: !prevEditing[parcelId] };
//       return newEditingState;
//     });
//   };

//   const updateParcel = (parcel) => {
//     fetch(`https://sendit-backend-lje2.onrender.com/orders/${parcel.parcel_number}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         present_location: parcel.present_location,
//         status: parcel.status,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedParcel) => {
//         handleUpdateParcel(updatedParcel);
//         enqueueSnackbar("Order edited successfully", { variant: "info" });
//         setEditing((prevEditing) => ({ ...prevEditing, [parcel.parcel_number]: false }));
//       })
//       .catch((error) => {
//         console.log("Error updating parcel:", error);
//       });
//   };

//   const handleStatusChange = (e, parcel) => {
//     const updatedParcel = { ...parcel, status: e.target.value };
//     updateParcel(updatedParcel);
//   };

//   const handleLocationChange = (e, parcel) => {
//     const updatedParcel = { ...parcel, present_location: e.target.value };
//     updateParcel(updatedParcel);
//   };

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearchTerm(searchTerm);
//   };

//   const filteredParcel = parcel.filter((p) => {
//     const status = p.status.toLowerCase();
//     return status.includes(searchTerm);
//   });

//   return (
//     <div className="container mt-5">
//       <div className="header border mb-4 d-flex justify-content-between">
//         <div className="search-bar mt-2">
//           <input
//             type="text"
//             placeholder="Search parcel..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="form-control"
//           />
//         </div>
//         <div className="order-info mt-2 d-flex align-items-center">
//           <img className='w-10 h-10 rounded-circle mr-2' src={Admin} alt="User Avatar" />
//           <span className="font-weight-bold text-dark">{user.username.toUpperCase()}</span>
//         </div>
//       </div>
//       <h1 className="text-center mb-4">Orders</h1>
//       <table className="table table-bordered bg-secondary border border-dark shadow">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 text-left">Parcel Name</th>
//             <th className="py-2 px-4 text-left">Destination</th>
//             <th className="py-2 px-4 text-left">Current Location</th>
//             <th className="py-2 px-4 text-left">Status</th>
//             <th className="py-2 px-4 text-left">Weight</th>
//             <th className="py-2 px-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredParcel.slice(page * parcelPerPage - parcelPerPage, page * parcelPerPage).map((p) => (
//             <tr key={p.parcel_number}>
//               <td className="py-2 px-4">{p.name_of_parcel}</td>
//               <td className="py-2 px-4">{p.destination}</td>
//               <td className="py-2 px-4">
//                 <input
//                   type="text"
//                   value={p.present_location}
//                   onChange={(e) => handleLocationChange(e, p)}
//                   disabled={!editing[p.parcel_number]}
//                   className="form-control"
//                 />
//               </td>
//               <td className="py-2 px-4">
//                 <select
//                   value={p.status}
//                   onChange={(e) => handleStatusChange(e, p)}
//                   disabled={!editing[p.parcel_number]}
//                   className="form-select"
//                 >
//                   <option value="pending">Pending</option>
//                   <option value="dispatched">Dispatched</option>
//                   <option value="delivered">Delivered</option>
//                 </select>
//               </td>
//               <td className="py-2 px-4">{p.weight}</td>
//               <td className="py-2 px-4">
//                 <div className="d-flex">
//                   {editing[p.parcel_number] && (
//                     <button
//                       onClick={() => updateParcel(p)}
//                       className="btn btn-success mr-2"
//                     >
//                       Save
//                     </button>
//                   )}
//                   <MdEdit
//                     className="cursor-pointer text-purple"
//                     onClick={() => toggleEditing(p.parcel_number)}
//                   />
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Menu setUser={setUser} />
//       {parcel.length > 0 && (
//         <div className="mb-4 mt-4 d-flex justify-content-center">
//           <span
//             className={page > 1 ? "cursor-pointer" : "opacity-0"}
//             onClick={() => setPage(page - 1)}
//           >
//             ◀{" "}
//           </span>
//           {[...Array(Math.ceil(parcel.length / parcelPerPage))].map((_, i) => (
//             <span
//               className={page === i + 1 ? "p-2 mx-1 border cursor-pointer" : ""}
//               key={`page-${i + 1}`}
//               onClick={() => setPage(i + 1)}
//             >
//               {i + 1}
//             </span>
//           ))}
//           <span
//             className={page < parcel.length / parcelPerPage ? "cursor-pointer" : "opacity-0"}
//             onClick={() => setPage(page + 1)}
//           >
//             ▶{" "}
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminOrders;

import React, { useState, useEffect } from "react";
import Menu from "./Menu";
// import { MdEdit } from "react-icons/md";
// import { useSnackbar } from "notistack";
import Admin from "../assets/Admin1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AdminOrders = ({ user, setLoading, setUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [parcel, setParcel] = useState([]);
  
  // const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const accessToken = localStorage.getItem('access_token');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.get('/parcels', config);
        setParcel(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const filteredParcel = parcel.filter((p) => {
    const status = p.status.toLowerCase();
    return status.includes(searchTerm);
  });

  return (
    <div className="container mt-5">
      <div className="header border mb-4 d-flex justify-content-between">
        <div className="search-bar mt-2">
          <input
            type="text"
            placeholder="Search parcel..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
          />
        </div>
        <div className="order-info mt-2 d-flex align-items-center">
          <img className='w-10 h-10 rounded-circle mr-2' src={Admin} alt="User Avatar" />
          <span className="font-weight-bold text-dark">{user.username.toUpperCase()}</span>
        </div>
      </div>
      <h1 className="text-center mb-4">Parcel</h1>
      <table className="table table-bordered bg-secondary border border-dark shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Parcel Name</th>
            <th className="py-2 px-4 text-left">Destination</th>
            <th className="py-2 px-4 text-left">Current Location</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Weight</th>
          </tr>
        </thead>
        <tbody>
          {filteredParcel.map((p) => (
            <tr key={p.parcel_number}>
              <td className="py-2 px-4">{p.name_of_parcel}</td>
              <td className="py-2 px-4">{p.destination}</td>
              <td className="py-2 px-4">{p.present_location}</td>
              <td className="py-2 px-4">{p.status}</td>
              <td className="py-2 px-4">{p.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Menu setUser={setUser} />
    </div>
  );
};

export default AdminOrders;
