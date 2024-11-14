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
    let currentList = toc;
    let listStack = [];

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
            currentList = toc; // Reset to top-level list for <h1>
        } else if (heading.tagName === "H2") {
            li.classList.add("level-2");
            // Create a collapsible section for <h2>
            const collapsible = document.createElement("ul");
            collapsible.classList.add("collapsible");
            li.appendChild(collapsible);
            currentList = collapsible;
            listStack.push(collapsible); // Push current list to stack for nested sections
        } else if (heading.tagName === "H3") {
            li.classList.add("level-3");
            // Create a collapsible section for <h3>
            const collapsible = document.createElement("ul");
            collapsible.classList.add("collapsible");
            li.appendChild(collapsible);
            currentList.appendChild(collapsible);
            currentList = collapsible;
        }

        // Add the link to the current list
        currentList.appendChild(li);

        // Toggle collapsible behavior
        a.addEventListener("click", function(e) {
            e.preventDefault();
            const collapsibleSections = li.querySelectorAll(".collapsible");
            collapsibleSections.forEach(function(section) {
                section.style.display = (section.style.display === "block" ? "none" : "block");
            });
        });

        // Close the stack if we have gone deeper
        if (heading.tagName === "H1" || heading.tagName === "H2") {
            currentList = listStack.pop(); // Pop back to the previous list
        }
    });

    // Add the table of contents to the sidebar
    sidebar.appendChild(toc);

    // Insert the sidebar at the beginning of the body
    document.body.insertBefore(sidebar, document.body.firstChild);

    // Create the toggle button
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-btn");
    toggleButton.textContent = "☰"; // Hamburger icon for toggling
    document.body.appendChild(toggleButton);

    // Toggle sidebar visibility when the button is clicked
    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("hidden");
        document.querySelector(".content").classList.toggle("sidebar-hidden");
    });
});
