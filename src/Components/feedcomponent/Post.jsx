import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { Bookmark, MessageCircle, MoreHorizontal, Send } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ✅ Correct
import CommentDialog from '../ui/CommentDialog'

function Post() {
  const [text, setText] = useState("");
  const [open ,setOpen] = useState(false);
  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText)
    } else {
      setText("")
    }
  }
  return (
    <div className='my-8 w-full max-w-sm mx-auto'>
      <div className='flex item-center gap-2'>
        <Avatar>
          {/* <AvatarImage src='https://i.pinimg.com/736x/c6/88/9c/c6889ce171366ef13b7162387c94fc07.jpg' alt='post'></AvatarImage> */}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Shaksi baby</h1>
        <Dialog>
          <DialogTrigger>
            <MoreHorizontal className='cursor-pointer'></MoreHorizontal>
          </DialogTrigger>
          <DialogContent className="p-4">

            {/* <Button
          variant="ghost"
          className="w-full text-left justify-start text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
        >
          Follow
        </Button> */}
            <Button
              variant="ghost"
              className=" text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Unfollow
            </Button>
            <Button
              variant="ghost"
              className=" text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors"
            >
              Add to favrate
            </Button>
            <Button
              variant="ghost"
              className=" text-sm font-medium text-gray-800 hover:text-red-600 transition-colors"
            >
              Delete
            </Button>

          </DialogContent>
        </Dialog>
      </div>

      <img src="https://i.pinimg.com/474x/41/8a/39/418a3921406300032b9b03e2f40407f7.jpg" alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fon-instagram--862228291186461244%2F&psig=AOvVaw3Xqq0I3iYjhA4xkymBeAIV&ust=1752924107321000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCHlKqlxo4DFQAAAAAdAAAAABAE" />

      <div className='flex item-center justify-between my-2'>
        <div className='flex item-center gap-3'>
          <FaRegHeart size={'22px'}></FaRegHeart>
          <MessageCircle onClick={()=>setOpen(true)} className='cursor-pointer hover:text-gray-600'></MessageCircle>
          <Send ></Send>
        </div>
        <Bookmark className='cursor-pointer hover:text-gray-600'></Bookmark>
      </div>

      <span className='font-medium block mb-2'>1k Likes</span>
      <p>
        <span className='font-meduim mr-2'>username</span>
        caption
      </p>
      <span onClick={()=>setOpen(true)} className='cursor-pointer text-sm gray-400'>  View all 10 comments</span>
      <CommentDialog open={open} setOpen={setOpen}></CommentDialog>

      <div className='flex items-center justify-between'>
        <input type="text" placeholder='Add a comment...' className='outline-none text-sm w-full' value={text} onChange={changeEventHandler} />
        {

          text && <span className='text-[#3BADF8]'>Post</span>

        }      </div>
    </div>

  )
}

export default Post