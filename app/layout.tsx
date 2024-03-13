import React from 'react'
import './dashboard/globals.css'

const Layout = ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
  return (
    <>
    <html lang="en">
      <head></head>
    <body className='w-full'>
        {children}
    </body>
    </html>
    </>
  )
}

export default Layout