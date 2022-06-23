import { useEffect, useState } from 'react'
import { listPagi } from './Api/User'

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(0)
  const [totalP, setTotalPage] = useState(10)

  useEffect(() => {
    const getPagiUsers = async () => {
      const { data } = await listPagi(page);
      setUsers(data.results);
      console.log(data);
    }
    getPagiUsers()
  }, [page])
  const onChangePage = (index) => {
    setPage(index)
  }

  return (
    <>
      <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-2 pl-10  text-left text-sm tracking-normal leading-4"></th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-2 pl-10  text-left text-sm tracking-normal leading-4">Full Name</th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">User Name</th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Email</th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Picture</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => {
                return <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                  <td className="text-sm text-center whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{index + 1}</td>
                  <td className="text-sm pr-2 pl-8 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.name.first} {item.name.last}</td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.login.username}</td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.email} </td>
                  <td className="pr-6 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8">
                        <img src={item.picture.thumbnail} className="h-full w-full rounded-full overflow-hidden shadow" />
                      </div>
                      <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">{item.name.first} {item.name.last}</p>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            {/* <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm ml-3 font-medium leading-none ">Previous</p> */}
          </div>
          <div className="sm:flex hidden">
            {[...Array(totalP).keys()].map((item,index) => {
            return <p onClick={() => onChangePage(index)} className=" text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">{item+1}</p>
            })}
            {/* <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p> */}
          </div>
          <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            {/* <p className="text-sm font-medium leading-none mr-3">Next</p>
            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
