import Image from 'next/image'
import { Inter } from 'next/font/google'
import { signIn } from "next-auth/react";
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(email && password){
            // Handle login using NextAuth.js
            await signIn('credentials', {
                username: email,
                password: password,
                callbackUrl: '/'
            });
        }else{
            console.log("hello")
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Hello Buddy 👋</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        id="email"
                        placeholder="type sunil"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Login;
