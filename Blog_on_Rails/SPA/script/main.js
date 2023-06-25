import webApi from "./API.js";

const postsList = document.querySelector("#show-list");

const navb = document.querySelectorAll(".nav-item");
navb.forEach(element => {
    element.addEventListener("click", showPage, false)
});

function showPage(e, pageId) {
    let pageName;
    if (e) {
        e.preventDefault();
        pageName = e.target.attributes['target-id'].value;
    } else {
        pageName = pageId;
    };

    document.querySelectorAll(".hide").forEach(element => {
        element.style.display = 'none';
    });

    document.querySelector(`.hide#${pageName}`).style.display = 'block';
    if (pageName === 'index-page') {
        showAll();
    };
};

function showAll() {
    webApi.get('posts')
            // .then(data => data.json())
            .then( data => {
                postsList.innerHTML = data.map(post => {
                    return `<li>
                        ${post.title}
                    </li>`
                }).join("")
            })
}