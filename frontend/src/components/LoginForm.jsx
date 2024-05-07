"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter} from "next/navigation";

function LoginForm() {
  const [userDetails, setuserDetails] = useState({
    userName: "",
    userPassword: "",
  });
  const [error, seterror] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setuserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, userPassword } = userDetails;

    if (!userName || !userPassword) {
      seterror("All fields are necessary");

      return null;
    }

    //need to handle login using api routes
    
    // try {
    //   const res = await signIn("credentials", {
    //     userName,
    //     userPassword,
    //     redirect: false,
    //   });

    //   if (res.error) {
    //     seterror("Invalid credentials");
    //     return null;
    //   }
    //   router.refresh();
    // } catch (error) {
    //   console.log("An error occured registering user");
    // }
  };

  return (
    <div className="h-96 flex items-center justify-center bg-gradient-to-r from-blue-400 via-pink-500 to-blue-800">
      <div className="relative">
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 shadow-lg animate-pulse"></div>
        <div
          id="form-container"
          className="bg-white p-8 md:p-10 rounded-lg shadow-2xl w-80 relative transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Login
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="User name"
              name="userName"
              type="text"
              onChange={handleChange}
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              name="userPassword"
              onChange={handleChange}
              type="password"
            />
            {error && <p className="text-red-500 text-left">{error}</p>}
            <button
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
            <Link
              className="text-blue-500 hover:text-blue-800 text-sm"
              href="#"
            >
              Forgot Password?
            </Link>

            {/* Create account if not yet registered */}
            <div>
              <p>
                No account:{" "}
                <Link
                  className="text-blue-500 hover:text-blue-800 text-sm"
                  href="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
