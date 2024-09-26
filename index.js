const commentBtn = document.getElementById("collapse-comments")

function openCommentsSection () {
    // open the comment section
    document.querySelector("div.collapsible-wrapper").classList.toggle("show")
}

commentBtn.addEventListener("click", function(event) {
    // rotate the button
    event.target.classList.toggle("comments-section-opened")

    openCommentsSection()
})

document.querySelector("article.blog-comment").addEventListener("click", () => {
    openCommentsSection()
})