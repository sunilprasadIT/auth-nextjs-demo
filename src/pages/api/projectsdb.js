import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    // Get the session
    const session = await getSession({ req });

    console.log(session)

    // Check if the session is set
    if (!session) {
        // Return a 401 unauthorized response if session is not set
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    // If session is set, proceed with handling the request
    const projectData = {
        name: 'Project Alpha',
        domain: 'example.com',
        duration: '6 months',
    };

    // Respond with the project data
    res.status(200).json(projectData);
}