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
        <h1>baby</h1>
      </DialogContent>
    </Dialog>
  )
}

export default CommentDialog
