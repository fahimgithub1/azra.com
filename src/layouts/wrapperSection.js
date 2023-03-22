import React from 'react'

export default function WrapperSection(props) {
  return (
    <section className='container mb-0 md:pb-[5px] lg:mb-[30px]'>
        {props.children}
    </section>
  )
}
