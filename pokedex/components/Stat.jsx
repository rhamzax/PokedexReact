import React from 'react'

const Stat = ({stat, name, width} ) => {
  const widthStyle = {
    width: `${Math.round(width)}%`
  }
  return (
    <>
      <span className='justify-self-end px-5 whitespace-nowrap'>{name}</span>
      <div className="w-full bg-gray-200 rounded-md dark:bg-gray-700 my-2 col-span-2 ">
          <div className={`bg-red-400 text-base font-medium text-white text-right py-1 leading-none rounded-md`} style={widthStyle}>
            <span className='px-1'>{stat.base_stat}</span>
          </div>
      </div>
    </>
    
  )
}

export default Stat