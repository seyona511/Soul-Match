
const feed = document.getElementById("feed");
const form = document.getElementById("uploadForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = form.querySelector("textarea").value;
  const file = form.querySelector("input").files[0];

  const post = document.createElement("div");
  post.className = "post";

  if (file && file.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = "100%";
    post.appendChild(img);
  } else if (file && file.type.startsWith("video/")) {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);
    video.controls = true;
    video.style.maxWidth = "100%";
    post.appendChild(video);
  }

  const caption = document.createElement("p");
  caption.textContent = text;
  post.appendChild(caption);

  feed.prepend(post);
  form.reset();
});
