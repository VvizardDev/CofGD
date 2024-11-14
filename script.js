// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Create the sidebar and its elements
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    // Title for the sidebar
    sidebar.innerHTML = "<h2>Table of Contents</h2>";

    // Create the list for the table of contents
    const toc = document.createElement("ul");

    // Select all headings (h1, h2, h3) on the page
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((heading, index) => {
        // Assign a unique ID to each heading
        const id = "section-" + index;
        heading.id = id;

        // Create a list item for the table of contents
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + id;
        a.textContent = heading.textContent;

        // Determine the heading level and add a corresponding class
        if (heading.tagName === "H1") {
            li.classList.add("level-1");
        } else if (heading.tagName === "H2") {
            li.classList.add("level-2");
        } else if (heading.tagName === "H3") {
            li.classList.add("level-3");
        }

        li.appendChild(a);
        toc.appendChild(li);
    });

    // Add the table of contents to the sidebar
    sidebar.appendChild(toc);

    // Insert the sidebar at the beginning of the body
    document.body.insertBefore(sidebar, document.body.firstChild);
});
