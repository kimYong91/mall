import React from 'react'
import Basicmenu from '../components/menus/Basicmenu'

function BasicLayout({children}) {
  return (
    <>
        <header
            className='bg-teal-400 p-5'>

            <Basicmenu/>
        </header>

        <div
        className='bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>

            <main
            className='bg-sky-300 md:w-2/3 lg:w3/4 px-5 py-40'>
                {children}
            </main>

            <aside
            className='bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40'>

                <h1
                className='text-2xl md:text-4xl'>
                    sidebar
                </h1>
            </aside>
        </div>
    </>
  )
}

export default BasicLayout