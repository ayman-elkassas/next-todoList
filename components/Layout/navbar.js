import React from 'react';
import Link from 'next/link'
function Navbar(props) {
    return (
        <div>
            <header>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog/post">Post</Link>
                    <a>Login</a>
                </div>
            </header>
        </div>
    );
}

export default Navbar;