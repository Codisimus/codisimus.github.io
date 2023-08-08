function loadPosts() {
  loadPost("post" + 1, "https://raw.githubusercontent.com/Codisimus/codisimus.github.io/master/posts/2023-08-08%20Initial%20Post.md");
};

function loadSinglePost() {
  loadPost("post", getMdSource(), false);
};

function getMdSource() {
  return new URLSearchParams(window.location.search).get("src");
};

function loadPost(id, source, clickForFull=true) {
  var md = document.createElement("zero-md");
  md.setAttribute("src", source);
  var post = document.getElementById(id);
  post.append(md);
  if (clickForFull) {
    post.setAttribute("onclick", "location.href='post.html?src=" + source + "';");
  }
};
