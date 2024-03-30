// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Login = ({ setIsLoggedIn }) => {
// //   const [formData, setFormData] = useState({ username: "", password: "" });
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate(); // Use useNavigate instead of useHistory
// //   const location = useLocation();
// //   const selectedBook = location.state?.selectedBook || [];
// //   console.log("Loginpage",selectedBook)

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:5000/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //         credentials: "include", // Include credentials for cross-origin requests
// //       });

// //       const data = await response.json();
// //       console.log("Login response:", data);

// //       if (response.ok) {
// //         // Login successful, navigate to the home page or desired route
// //         console.log("Login successful");
// //         localStorage.setItem("token", data.token);
// //         setIsLoggedIn(true);
// //         navigate("/payment", { state: { selectedBook } });
// //       } else {
// //         // Handle login failure
// //         setError("Invalid username or password");
// //       }
// //     } catch (error) {
// //       console.error("Login error:", error);
// //       setError("An error occurred during login");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
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
// //         <button type="submit">Login</button>
// //       </form>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";

// const Login = ({ setIsLoggedIn }) => {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
  

//   const selectedBook = location.state?.selectedBook || [];

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//         credentials: "include",
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         setIsLoggedIn(true);
  
//         // Retrieve previously selected books from local storage
//         const storedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
        
//         // If there are previously selected books, combine them with the current book
//         const updatedSelectedBooks = selectedBook.concat(storedBooks);
  
//         if (updatedSelectedBooks.length > 0) {
//           navigate("/payment", { state: { selectedBook: updatedSelectedBooks } });
//         } else {
//           navigate("/home");
//         }
//       } else {
//         setError("Invalid username or password");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("An error occurred during login");
//     }
//   };
  
//   return (
//     <div>
//       <h2>Login</h2>
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
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;












import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const selectedBook = location.state?.selectedBook || [];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);

        const storedBooks = JSON.parse(localStorage.getItem("selectedBooks")) || [];

        const updatedSelectedBooks = selectedBook.concat(storedBooks);

        if (updatedSelectedBooks.length > 0) {
          navigate("/payment", { state: { selectedBook: updatedSelectedBooks } });
        } else {
          navigate("/home");
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;