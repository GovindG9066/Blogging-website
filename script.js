
function Multi_card(title, info, date, desc, img) {
    const row = document.querySelector(".row");
    const div = document.createElement("div");
    div.classList.add("colume");
    div.classList.add("col-md-6");  //this is class from the css bootstrap
    div.innerHTML = `
       
            <div
                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style="min-height: 320px;">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-warning">${title}</strong>
                    <h3 class="mb-0 text-white">${info}</h3>
                    <div class="mb-2 mt-1 text-light ">${date}</div>
                    <p class="card-text mb-auto text-light">${desc}...</p>
                    <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg class="bi">
                            <use xlink:href="#chevron-right"></use>
                        </svg>
                    </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img src="${img}" class="bd-placeholder-img" width="200" height="100%" alt="">

                </div>
            </div>
    
        `;
    row.appendChild(div);

}
Multi_card(
    "Coding World",
    "Let's Begin the Coding journery",
    "Feb 12",
    "Here we can learn about the Programming lanuages like HTML,CSS,JAVASCRIPT,JAVA and more",
    "Coding/thumb1.jpg"
)
Multi_card(
    "The Future of AI in Programming",
    "How AI is shaping software development.",
    "Feb 18",
    "How AI is shaping software development.",
    "Coding/card-2.jpg"
)
Multi_card(
    "Web Development Trends in 2025",
    "What's new in web development?",
    "Feb 20",
    "From AI-powered chatbots to Web3 technology, discover the biggest trends shaping modern web development this year.",
    "Coding/card-3.jpg"
)

Multi_card(
    " Mastering Mobile App Development",
    "The essentials of building mobile apps.",
    "Feb 25",
    "Whether you're using React Native, Flutter, or Swift, learn the best practices and tools for creating high-performance mobile apps.",
    "Coding/card-5.jpg"
)
Multi_card(
    "JavaScript: The King of Web Development",
    "Why JavaScript still rules the web.",
    "Mar 1",
    "From frontend to backend, JavaScript continues to dominate web development. Learn why it’s still the go-to language for developers.",
    "Coding/card-4.jpg"
)
Multi_card(
    "🛠️ Best Coding Tools Every Developer Should Use",
    "Top tools for efficient coding.",
    "Mar 5",
    "Explore the best text editors, debugging tools, and automation software to speed up your development process.",
    "Coding/card-6.jpeg"
)
