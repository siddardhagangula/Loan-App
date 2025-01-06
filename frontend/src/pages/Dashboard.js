// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLoans = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           navigate('/login');
//           return;
//         }

//         const response = await fetch('http://localhost:5000/api/loans', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch loan applications');
//         }

//         const data = await response.json();
//         setLoans(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchLoans();
//   }, [navigate]);

//   return (
//     <div className="dashboard-container">
//       <h2>Your Loan Applications</h2>
//       {error && <p className="error-message">{error}</p>}
//       {loans.length > 0 ? (
//         <div className="loans-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Loan ID</th>
//                 <th>Name</th>
//                 <th>Requested Amount</th>
//                 <th>Status</th>
//                 <th>Submitted At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loans.map((loan) => (
//                 <tr key={loan._id}>
//                   <td>{loan._id}</td>
//                   <td>{loan.name}</td>
//                   <td>{loan.requestedLoanAmount}</td>
//                   <td>{loan.status}</td>
//                   <td>{new Date(loan.submittedAt).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p>No loans found.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) { 
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:5000/api/loans/applications', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch loan applications');
        }

        const data = await response.json();
        setLoans(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLoans();
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h2 className='text-primary py-4'>{user?.role === 'admin' ? 'All Loan Applications' : 'Your Loan Applications'}</h2>
      {error && <p className="error-message">{error}</p>}
      {loans.length > 0 ? (
        <div className="loans-table">
          <table>
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Name</th>
                <th>Requested Amount</th>
                <th>Status</th>
                <th>Submitted At</th>
                {user?.role === 'admin' && <th>User Email</th>}
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan._id}>
                  <td>{loan._id}</td>
                  <td>{loan.name}</td>
                  <td>{loan.requestedLoanAmount}</td>
                  <td>{loan.status}</td>
                  <td>{new Date(loan.submittedAt).toLocaleString()}</td>
                  {user?.role === 'admin' && <td>{loan.user?.email}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No loans found.</p>
      )}
    </div>
  );
};

export default Dashboard;
