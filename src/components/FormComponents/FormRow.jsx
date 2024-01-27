import React from 'react'

const FormRow = ({children}) => {
  return (
    <div className='flex items-center bg-neutral-200/40 mb-6 p-4 w-full rounded text-neutral-500 font-medium'>{children}</div>
  )
}

export default FormRow