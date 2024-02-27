import React from 'react'
import { toggleShowModal } from '../../slice/usersSlice'
import { useDispatch } from 'react-redux'
import { IoClose } from 'react-icons/io5'

const TweetModalCloseBtn = () => {
    const dispatch = useDispatch()
  return (
    <div className="flex justify-end text-xl ">
          <button
            className="hover:bg-pink-500/20 hover:text-pink-700 transition-colors ease-in-out duration-200 p-1 rounded-full"
            onClick={() => dispatch(toggleShowModal())}
          >
            <IoClose />
          </button>
        </div>
  )
}

export default TweetModalCloseBtn