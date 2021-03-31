import React from 'react';
import Link from 'next/link'

function Footer(props) {
    return (
        <div>
            <footer>
                Copy Right<br/>
                <Link href="/blog/post">Post</Link>
            </footer>
        </div>
    );
}

export default Footer;