function Renderer() {
  function renderPosts(posts) {
    // $("#posts");
    for (post of posts) {
      alert(post);
    }
  }

  return { renderPosts: renderPosts };
}
