import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { BsArrowDown } from 'react-icons/bs';

const Evolution = ({name, min_level, trigger_name, item, id, index}) => {
  let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  return (
    <Link href={`/pokemon/${name}`}>
      <div className='grid justify-items-center capitalize mx-5 my-3'>
        <div className='flex flex-col justify-center items-center text-sm'>
          {ArrowShow(index, trigger_name, min_level, item)} 
        </div>

        <Image
                className="object-contain"
                width={100}
                height={100}
                src={image}
                alt="evolutions"
          />
        <div>
          {`#${id} \n ${name}`}
        </div>
      </div>
    </Link>
    
  )
}

const ArrowShow = (key, trigger_name, min_level, item) => {
  if(key > 0){
    if(trigger_name == 'use-item'){
      return (
        <>
        {`${trigger_name} ${item["name"]}`}
        <BsArrowDown className='text-4xl'/>
        </>
        )
    }
    else if(trigger_name == 'trade'){
      return (
        <>
        {`${trigger_name}`}
        <BsArrowDown className='text-4xl'/>
        </>
      )
    }
    else if(trigger_name == "level-up"){
      return (
        <>
        {`${trigger_name} ${min_level}+`}
        <BsArrowDown className='text-4xl'/>
        </>
        )
    }  
  }
  else{
    <></>
  }
}


export default Evolution