// script.js
document.addEventListener("DOMContentLoaded", function() {
    const toc = document.createElement("ul");
    toc.classList.add("toc");

    // Select all h1, h2, h3 headers
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((heading, index) => {
        // Assign a unique ID to each heading
        const id = "section-" + index;
        heading.id = id;

        // Create a link for the sidebar
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        toc.appendChild(li);
    });

    // Append the table of contents (TOC) to the sidebar
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.innerHTML = "<h2>Table of Contents</h2>";
    sidebar.appendChild(toc);

    // Prepend the sidebar to the body
    document.body.insertBefore(sidebar, document.body.firstChild);
});
