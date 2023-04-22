import React from 'react'
import ShortPost from '../shortPost/ShortPost';

const UserPostList = ({posts}) => {
    console.log(posts);
  return (
    posts.map(post => {
      return (
        <ShortPost 
          key={post.id}
          title={post.title}
          numLikes={post.numLikes}
          date={post.datePublished}
          id={post.id}          
        />
      )
    })
  )
}

export default UserPostList