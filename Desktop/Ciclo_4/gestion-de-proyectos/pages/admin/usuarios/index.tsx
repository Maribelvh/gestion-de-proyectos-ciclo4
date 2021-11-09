import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div>
            <div>Página de admin de usuarios</div>
            <Link href ='/'>
            <a>Ir al Home</a>
            </Link>
        </div>
    )
}

export default index
