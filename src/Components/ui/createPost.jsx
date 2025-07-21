import React from "react";

const CreatePost = ({open, setOpen}) => {
  return (
    <Dialog open={open}>

        <DialogTitle>Create- Roshni- a New Post</DialogTitle>

        <DialogContent>
            <DialogContentText>
                To create a new post, please enter the title and content of your post.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="postTitle"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
            />
            <TextField
                margin="dense"
                id="postContent"
                label="Content"
                type="text"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
                Cancel
            </Button>
            <Button onClick={() => {}} color="primary">
                Submit
            </Button>
        </DialogActions>
    </Dialog>
  );
}

export default CreatePost;