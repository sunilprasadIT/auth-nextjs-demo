import { useEffect, useState } from "react";
import {useSession} from "next-auth/react";
import Link from "next/link";

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const { data: session, status } = useSession();
    const [error, setError] = useState('');

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch('/api/projectsdb', {
                    method: "GET",
                });

                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                } else {
                    setError(response.statusText);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        getProjects();
    }, []);

    if(!session){
        return (
            <div>
                <div className={'text-center p-2 bg-red-300 border-red-600 w-1/2 m-auto mt-2 rounded'}>
                    😤 {error} : <Link href={'/login'}>You don't login yet buddy. Click here to Login!</Link>
                </div>
            </div>
        )
    }else{
        console.log("session:", session)
        return (
            <div className="container mx-auto p-8">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

                {/* Projects grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div key={projects.name} className="bg-white shadow-lg rounded-lg p-4 m-2">
                        <h3 className="text-xl font-semibold mb-2">{projects.name}</h3>
                        <p className="text-gray-600 mb-1">Domain: {projects.domain}</p>
                        <p className="text-gray-600">Duration: {projects.duration}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
