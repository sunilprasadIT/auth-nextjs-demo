import { Inter } from 'next/font/google';
import Link from 'next/link';
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] });

function Home() {
  const { data: session, status } = useSession();

  const router = useRouter();

    const [isToggled, setIsToggled] = useState(false);

    // Function to handle toggle button click
    const handleToggle = () => {
        setIsToggled(!isToggled);

        if(!isToggled){
            signOut();
        }
    };

  // Check if the user is not authenticated
  if (!session) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-xl mb-4">You are not signed in buddy 🤯</p>
          <div onClick={()=>router.push('login')} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer">
            Say Your Cool
          </div>
        </div>
    );
  }


  return (
      <>
          <header className="flex justify-end items-center p-4 bg-white shadow-md">
              {/* Name on the left of the toggle button */}
              <span className="text-2xl font-medium mr-4">😎</span>

              {/* Toggle button */}
              <button
                  onClick={handleToggle}
                  className={`w-12 h-6 rounded-full relative transition duration-300 ${isToggled ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                  {/* Toggle handle */}
                  <span className={`w-6 h-6 bg-white rounded-full absolute top-0 left-0 transition duration-300 ${isToggled ? 'translate-x-6' : ''}`}></span>
              </button>

              {/* Label on the right of the toggle button */}
              <span className="text-2xl font-medium ml-4">🥱</span>
          </header>

          <div className={`h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 ${inter.className}`}>
              <div className="text-center">
                  {/* Developer's name */}
                  <h1 className="text-5xl font-bold text-white mb-4">{session.user.name}</h1>

                  {/* Developer's role */}
                  <p className="text-2xl text-white mb-8">Full-Stack Developer</p>


                  {/* Description about yourself */}
                  <p className="text-white mb-8">
                      Passionate developer with experience in building modern web applications using the latest technologies.
                  </p>

                  {/* Call-to-action buttons */}
                  <div className="space-x-4">
                      <Link href="/portfolio">
                          <p className="bg-white text-indigo-600 px-6 py-2 rounded hover:bg-gray-200">
                              View Portfolio
                          </p>
                      </Link>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Home;

