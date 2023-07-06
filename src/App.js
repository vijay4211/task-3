import React from 'react'

const App = () => {
  return (
  <>
    <div className='border-2 flex justify-between items-center px-5'>
        <div className='py-2'>
            <ul className='flex gap-3 text-blue-600'>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ul>
        </div>
        <div>
            <input type="text" placeholder='Search'  className='border-2 mr-3 bg-white placeholder-red-300' /><span className='bg-blue-300 text-xs p-1 text-white'>Search</span>
        </div>
    </div>
  </>
  )
}

export default App
