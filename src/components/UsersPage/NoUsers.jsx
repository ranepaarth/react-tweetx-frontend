import React from 'react'
import { MdGroups } from 'react-icons/md'

const NoUsers = () => {
  return (
    <article className="mt-20  text-neutral-500  flex flex-col items-center gap-4 w-full">
        <MdGroups className="text-[12rem] rounded-full outline outline-offset-4 outline-neutral-500/40" />
        <div className="text-pretty text-center w-full">
          <span className="font-extrabold text-2xl text-pink-500 w-[30%]">
            It seems there&apos;s no user other than you
          </span>
        </div>
      </article>
  )
}

export default NoUsers