import React from 'react'
import { Dialog, DialogContent } from './dialog'

function CommentDialog({ open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        hideCloseButton={true}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Close Button */}
        {/* <button
          onClick={() => setOpen(false)}
          style={{
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#fff',
          }}
          aria-label="Close"
        >
          &times;
        </button> */}

        {/* Image with size constraints */}
        <img
          src="https://i.pinimg.com/474x/41/8a/39/418a3921406300032b9b03e2f40407f7.jpg"
          alt="A stylized anime character"
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            borderRadius: '8px',
            objectFit: 'contain',
          }}
        />
       <div className='w-1/2 flex flex-col justify-between'>
            <div className='flex items-center justify-between p-4'>
              <div className='flex gap-3 items-center'>
                <Link>
                  <Avatar>
                    <AvatarImage src='' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <Link className='font-semibold text-xs'></Link>
                  {/* <span className='text-gray-600 text-sm'>Bio here...</span> */}
                </div>
              </div>

                 <Dialog>
                <DialogTrigger asChild>
                  <MoreHorizontal className='cursor-pointer' />
                </DialogTrigger>
                <DialogContent className="flex flex-col items-center text-sm text-center">
                  <div className='cursor-pointer w-full text-[#ED4956] font-bold'>
                    Unfollow
                  </div>
                  <div className='cursor-pointer w-full'>
                    Add to favorites
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <hr />

             <div className='flex-1 overflow-y-auto max-h-96 p-4'>
              {/* {
                comment.map((comment) => <Comment key={comment._id} comment={comment} />)
              } */}
            </div>
            <div className='p-4'>
              <div className='flex items-center gap-2'>
                <input type="text" value={text} placeholder='Add a comment...' className='w-full outline-none border text-sm border-gray-300 p-2 rounded' />
                <Button disabled={!text.trim()}  variant="outline">Send</Button>
              </div>
            </div>
          </div>
      
      </DialogContent>
    </Dialog>
  )
}

export default CommentDialog
