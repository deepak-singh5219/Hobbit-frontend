import React from 'react'

const AppLayout = ({children}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#E7E7E7]">
        {children}
    </div>
  )
}

export default AppLayout