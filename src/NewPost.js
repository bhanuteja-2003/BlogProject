import React from 'react'


export const NewPost = ({handleSubmit, postTitle,setPostTitle,postBody,setPostBody}) => {
  
  return (
    <main className='NewPost' >
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit} >
          {/* post title */}
          <label htmlFor='postTitle'>Title :</label>
          <input 
          type='text'
          placeholder='Enter Title...' 
          id='postTitle'
          required
          value={postTitle}
          onChange={(e)=>{setPostTitle(e.target.value)}}
          />
          {/* post body */}
          <label htmlFor='postBody'>Post :</label>
          <input 
          className='NewPostBodyText'
          type='text'
          placeholder='Enter Body...' 
          id='postBody'
          required
          value={postBody}
          onChange={(e)=>{setPostBody(e.target.value)}}
          />
          
          <button  type='submit'>Submit</button>
          
          
        </form>
    </main>
  )
}

export default NewPost;
