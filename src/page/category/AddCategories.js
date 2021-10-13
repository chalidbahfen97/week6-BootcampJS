import { log } from '@craco/craco/lib/logger';
import { Dialog, Transition } from '@headlessui/react'
import React,{ Fragment, useState } from 'react'
import {  toast } from 'react-toastify';
import apiCategories from './api-categories';

export default function AddCategories(props) {

    const [values , setValues] = useState({
        cate_id : undefined,
        cate_name :''
    });


    const handleChange = name => event =>{
        // console.log(name + ":" + event.target.value);
        setValues({...values,[name]:event.target.value});
    }

    const onSubmit = async ()=>{
        //alert(values.cate_name)
        const data={
            cate_id : undefined,
            cate_name : (values.cate_name).toUpperCase() || ''
        }
        const result = await apiCategories.createRow(data);
        if(result.status === 200){
            props.closeModal();
            props.setRefresh();
            toast.success("Data Successfully Inserted")
        }
    }

  return (
    <div>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=> null}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Category
                </Dialog.Title>
                <div className="mt-2">
                  <form action="#" method='POST'>
                      <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm">
                              Category Name
                          </label>
                          <input
                            type="text"
                            name="cate_name"
                            value={values.cate_name}
                            onChange={handleChange('cate_name')}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                          />
                      </div>
                  </form>
                </div>

                <div className="flex flex-row space-x-4 mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={props.closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
