import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { MoreHorizontal } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'


function Post() {
  return (
    <div className='my-8 w-full max-w-sm mx-auto'>
      <div className='flex item-center gap-2'>
        <Avatar>
          <AvatarImage src='https://i.pinimg.com/736x/c6/88/9c/c6889ce171366ef13b7162387c94fc07.jpg' alt='post'></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Username</h1>
      </div>
      <Dialog>
        <DialogTrigger>
          <MoreHorizontal className='cursor-pointer'></MoreHorizontal>
        </DialogTrigger>
        <DialogContent>
          <Button variant='ghost'>Unfollow</Button>
        </DialogContent>
      </Dialog>
      
    </div>
  )
}

export default Post