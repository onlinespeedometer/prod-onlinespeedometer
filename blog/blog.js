const blogData = [
    {
        title: "How Speedometer Works in Bike",
        content: "This is the content of the first blog post.",
        link:"how-speedometer-works-in-bike"
    },
    // Add more blog entries as needed
];

const blogContainer = document.getElementById("blogContainer");

function createBlogPost(title, content) {
    const postElement = document.createElement("div");
    postElement.className = "blog-post";

    const titleElement = document.createElement("h2");
    titleElement.className = "blog-title";
    titleElement.textContent = title;

    const contentElement = document.createElement("p");
    contentElement.className = "blog-content";
    contentElement.textContent = content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    return postElement;
}

// for redirecting 

blogData.forEach(entry => {
    const blogPost = createBlogPost(entry.title, entry.content, entry.link);
    
    // Add a click event listener to the blog post
    blogPost.addEventListener("click", () => {
        // Redirect to a link when the blog post is clicked
        window.location.href = entry.link;
    });

    blogContainer.appendChild(blogPost);
});
