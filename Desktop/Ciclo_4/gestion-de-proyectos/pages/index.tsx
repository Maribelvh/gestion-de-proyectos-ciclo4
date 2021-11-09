import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className = 'bg-red-500'> 
      
      <p>Página de Index- Prueba dev</p>
      <Link href ='/admin/usuarios'>
      <a className='cursor-pointer'>Ir a admin usuarios</a>
      </Link>
      
    </div>
  )
}

export default Home
