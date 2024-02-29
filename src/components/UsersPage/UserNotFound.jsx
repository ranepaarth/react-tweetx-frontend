import React from 'react'
import { FaUserXmark } from 'react-icons/fa6'

const UserNotFound = () => {
  return (
    <div className="flex items-center flex-col my-8">
        <span className="text-neutral-400 py-4">
          <FaUserXmark className="text-8xl" />
        </span>
        <p className="text-neutral-700 font-bold text-2xl">No users found</p>
        <p className="font-medium text-neutral-400">
          We could&apos;nt find what you&apos;r looking for
        </p>
      </div>
  )
}

export default UserNotFound