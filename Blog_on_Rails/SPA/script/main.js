import webApi from "./API.js";

const postsList = document.querySelector("#index #show-list");

const navb = document.querySelectorAll(".nav-item");
navb.forEach(element => {
    element.addEventListener("click", showPage, false)
});

function showPage(e, pageId) {
    console.log('showpage')
    let pageName;
    if (e) {
        e.preventDefault();
        pageName = e.target.attributes['target-id'].value;
        console.log('hello')
    } else {
        pageName = pageId;
    };

    document.querySelectorAll(".hide").forEach(element => {
        element.style.display = 'none';
    });

    document.querySelector(`.hide#${pageName}`).style.display = 'block';
    if (pageName === 'posts') {
        // showAll();
    };
};

function showAll() {
    webApi.get('posts')
            .then(data => data.json())
            .then( data => {
                postsList.innerHTML = data.map(post => {
                    `<li>
                        ${post.title}
                    </li>`
                })
            })
}