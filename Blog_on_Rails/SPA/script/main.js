import webApi from "./API";

const postsList = document.querySelector("#index #show-list");

const navb = document.querySelectorAll(".nav-item");
navb.forEach(element => {
    element.addEventListener('click', showPage, false)
});

function showPage(e, pageId) {
    let pageName;
    if (e) {
        e.preventDefault();
        pageName = e.target.attribute['target-id'].value;
    } else {
        pageName = pageId;
    };

    document.querySelectorAll(".hide").forEach(element => {
        element.style.display = 'none';
    });

    document.querySelector(`.hide#${pageName}`).style.display = 'block';
    if (pageName === 'posts') {
        showAll();
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