//increment

export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

//add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment
//somehow commented action Creator writes everything twice! either I need to use 'index' in comments.js instead of 'i' or i should correct index as i down there..
// export function removeComment(postId, index) {
//   return {
//     type: 'REMOVE_COMMENT',
//     postId,
//     index
//   };
// }

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
}
