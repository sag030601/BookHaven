// // import React, { useState } from "react";
// // import { useNavigate,Link,useLocation } from "react-router-dom";

// // const Register = () => {
// //   const [formData, setFormData] = useState({ username: "", password: "" });
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate(); // Use useNavigate instead of useHistory
// //   const location = useLocation();
// //   const selectedBook = location.state?.selectedBook || [];

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Add your registration logic here, e.g., making an API request

// //     try {
// //       // Replace the following with your actual registration API endpoint
// //       const response = await fetch("http://localhost:5000/register", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         // Registration successful, navigate to the login page or desired route
// //         console.log("Navigating to Login with state:", { selectedBook });
// //         navigate("/login", { state: { selectedBook } }); // Use navigate instead of history.push
// //       } else {
// //         // Handle registration failure
// //         setError("Registration failed. Username may be taken or invalid.");
// //       }
// //     } catch (error) {
// //       console.error("Registration error:", error);
// //       setError("An error occurred during registration");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Username:
// //           <input
// //             type="text"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Password:
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <button type="submit">Register</button>
// //         <p>
// //           Already have an account? <Link to="/login" state={{selectedBook}} >Log in here</Link>.
// //         </p>
// //       </form>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // };

// // export default Register;













// // Register.js
// import React, { useState } from "react";
// import { AiFillCodeSandboxCircle } from "react-icons/ai";
// import { useNavigate, Link, useLocation } from "react-router-dom"; 
// const Register = () => {
//   const location = useLocation(); 
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); 
//   const selectedBook = location.state?.selectedBook || [];
//   console.log(selectedBook)
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         // Retrieve previously selected books from local storage
//         const storedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
//         navigate("/login", { state: { selectedBook: storedBooks } });
//       } else {
//         setError("Registration failed. Username may be taken or invalid.");
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       setError("An error occurred during registration");
//     }
//   };
  
//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//         <p>
//           Already have an account? <Link to="/login" state={{selectedBook}} >Log in here</Link>.
//         </p>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Register;












// Register.js
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Register = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const selectedBook = location.state?.selectedBook || []; // Access selectedBook from location state
  console.log(selectedBook)
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Redirect to login page with purchasedBooks data
        navigate("/login", { state: { purchasedBooks: selectedBook } });
      } else {
        setError("Registration failed. Username may be taken or invalid.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration");
    }
  };
  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login" state={{ selectedBook }}>Log in here</Link>.
        </p>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
