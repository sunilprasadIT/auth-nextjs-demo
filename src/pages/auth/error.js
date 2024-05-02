import { useRouter } from 'next/router';
import Link from "next/link";

const ErrorPage = () => {
    const router = useRouter();
    const errorMessage = router.query.error;

    return (
        <div>
            <div className={'text-center p-2 bg-red-300 border-red-600 w-1/2 m-auto mt-2 rounded'}>
               <Link href={'/login'}>{errorMessage}. Try Again!</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
