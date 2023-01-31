import React from 'react'
import { Toaster } from 'react-hot-toast';

const AppLayout = ({children}) => {
  return (
    <div className="font-poppins w-screen h-screen flex items-center justify-center bg-[#E7E7E7]">
        <Toaster/>
        {children}
    </div>
  )
}

export default AppLayout