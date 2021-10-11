import React,{useState,useEffect} from 'react'
import apiCategories from './api-categories';
import { PencilIcon , DocumentAddIcon} from '@heroicons/react/outline';

export default function Categories() {  
   const [category, setCategory ] = useState([]); 

   useEffect(() => {
       fetchData();
   }, [])

   async function fetchData(){
       const response = await apiCategories.list();
       setCategory(response);
   }

    return (
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                   
                    <th scope="col" className="relative px-6 py-3 text-right">
                      <button type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                         <PencilIcon className='-ml-1 mr-2 h-5 ww text-gray-500' aria-hidden="true"/>
                        New Category
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {category && category.map((data) => (
                    <tr key={data.cate_id}>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.cate_id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.cate_name}</td>

                      <div className='flex flex-row-reverse space-x-0 space-x-reverse'>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Remove
                        </a>
                      </td>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}
