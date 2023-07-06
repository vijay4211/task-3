import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { VscThreeBars } from 'react-icons/vsc'

const App = () => {
  return (
    <>
      <div className="bg-gray-500">
        <div className="p-2 w-4/5 mx-auto flex justify-between">
          <div className="flex gap-2 items-center text-white">
            <FaCamera />
            <p>Album</p>
          </div>
          <div className="width w-7 h-5 flex justify-center items-center rounded text-white">
            <VscThreeBars />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="bg-gray-100 h-64 flex justify-center items-center">
        <div className="w-3/5 mx-auto text-center">
          <p className="text-2xl">Album example</p>
          <p className="w-9/12 mx-auto mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            eaque nobis blanditiis magni rem nemo possimus, obcaecati,
            voluptatem quis quod ipsum iure natus accusantium! Qui cum officiis
            officia molestias vel.
          </p>
          <div className="flex gap-2 justify-center">
            <button className="bg-blue-500 py-1 px-1 text-white rounded">
              Main call to action
            </button>
            <button className="bg-gray-400 rounded py-1 px-1 text-white">
              Secondary action
            </button>
          </div>
        </div>
      </div>
      {/* columns section */}
      <div className="pt-6">
        <div className="w-4/5 mx-auto grid grid-cols-3 gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <div className="bg-gray-600 h-40 flex justify-center items-center">
              <p className="text-white text-2xl">Thumbnail</p>
            </div>
            <div className="p-3 border-2">
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nobis eligendi veritatis fugiat quisquam nulla quam dignissimos
                tempore porro est, nesciunt
              </p>
              <div className="flex justify-between">
                <div>
                  <button className="border-2 border-gray-100">View</button>
                  <button className="border-2 border-gray-100">Edit</button>
                </div>
                <div>9 mins</div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-gray-600 h-40 flex justify-center items-center">
              <p className="text-white text-2xl">Thumbnail</p>
            </div>
            <div className="p-3 border-2">
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nobis eligendi veritatis fugiat quisquam nulla quam dignissimos
                tempore porro est, nesciunt
              </p>
              <div className="flex justify-between">
                <div>
                  <button className="border-2 border-gray-100">View</button>
                  <button className="border-2 border-gray-100">Edit</button>
                </div>
                <div>9 mins</div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-gray-600 h-40 flex justify-center items-center">
              <p className="text-white text-2xl">Thumbnail</p>
            </div>
            <div className="p-3 border-2">
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nobis eligendi veritatis fugiat quisquam nulla quam dignissimos
                tempore porro est, nesciunt
              </p>
              <div className="flex justify-between">
                <div>
                  <button className="border-2 border-gray-100">View</button>
                  <button className="border-2 border-gray-100">Edit</button>
                </div>
                <div>9 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
