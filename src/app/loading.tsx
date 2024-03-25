import { Surround } from '@/components'
import { Spinner } from '@nextui-org/react'
import React from 'react'

export default function Loading() {
  return (
    <Surround className='flex justify-center items-center h-screen'>
        <Spinner size='lg' />
    </Surround>
  )
}
