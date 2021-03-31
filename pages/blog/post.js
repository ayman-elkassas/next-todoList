import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

function post(props) {
    return (
        <div>
            <h2>Post Blog</h2>
            <Image src="/linux.png" width={128} height={77}></Image>
            <Link href="/">Home</Link>
        </div>
    );
}

export default post;