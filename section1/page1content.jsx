import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-3 px-18  h-[90vh] gap-10 text-white flex '>
        <Leftcontent />
        <Rightcontent users={props.users}/>

    </div>
  )
}

export default Page1content