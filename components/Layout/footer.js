import React from 'react';
import Link from 'next/link'

//todo:can make style module file
import StyleFoot from '../../styles/Footer.module.css'

function Footer(props) {
    return (
        // using style as a following
        <div className={StyleFoot.foot}>
            <footer>
                Copy Right<br/>
                <Link href="/blog/post">Post</Link>
            </footer>
        </div>
    );
}

export default Footer;