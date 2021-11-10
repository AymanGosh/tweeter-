let tw = Tweeter();

function start() {
  for (post of tw.getPosts()) {
    let newOb = `<div class="post">
    
     <h3 class=${post.id}> ${post.text}   </h3>   
     
     </div> `;

    $("#posts").append(newOb);

    for (comment of post.comments) {
      let newOb = `<div class="comments">
      
      <div>

      <div class="delete-comment" onclick="deleteComment(this)">X</div>
       <p class=${comment.id}>  ${comment.text}</p> 

     </div>

     </div> `;

      $(`.${post.id}`).append(newOb);
    }

    $(`.${post.id}`).append(
      '<div onclick="deletePost(this)" class="delete" > delete post</div>'
    );
  }
}
function deleteComment(elm) {
  elm.parentNode.remove();
}
function deletePost(elm) {
  elm.parentNode.parentNode.remove();
}

function post() {
  alert("me");
}
