import { Avatar, Divider, Typography } from 'antd'
import React from 'react'

const HiringTeam : React.FC = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
        <div className='p-4 bg-white rounded-lg'>
          <div className='flex items-center space-x-2'>
            <Avatar/>
            <Typography className='font-semibold'>Valerian Dwi Purnomo</Typography>
          </div>
          <Divider className='my-2'/>
          <Typography className='text-end text-gray-500'>Hiring 10 employees</Typography>
        </div>
    </div>
  )
}

export default HiringTeam