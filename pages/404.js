import Link from 'next/link';
import React, { useEffect } from 'react';
import {useRouter} from 'next/router'

function NotFound(props) {

    const router=useRouter()

    //useEffect as mount job in function component
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 3000)
        
    })

    return (
        <div>
            <h1>Oooooooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Home page</a></Link></p>
        </div>
    );
}

export default NotFound;