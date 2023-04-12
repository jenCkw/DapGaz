import React from 'react'
import { Header } from './Header';

type Props = {
  children?: React.ReactNode,
};

function Layaout({children}:Props) {
  return (
    <>
    <Header/>
    
      <main>{children}</main>
    </>
  );
}

export default Layaout