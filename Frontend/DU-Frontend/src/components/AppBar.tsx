

export const Appbar = () => {
    return <div className="shadow h-20 flex justify-between items-center px-4 bg-gray-800">
        <div className=" text-2xl font-bold text-white ">
            DevsUnited
        </div>
        <div className="flex items-center ">
       <button className="  w-l text-white bg-blue-700 hover:bg-gblue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-m px-4 py-2 me-2">signup</button>
       <button className=" w-l text-white bg-blue-700 hover:bg-gblue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-m  px-4 py-2  ">signin</button>
       </div>
    </div>
}