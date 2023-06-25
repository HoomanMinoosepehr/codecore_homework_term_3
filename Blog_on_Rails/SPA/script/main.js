import webApi from "./API.js";

const postsList = document.querySelector("#show-list");
const showpost = document.querySelector("#show-post");
const post_create_btn = document.querySelector("#post-create-btn");

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

postsList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.matches(".product")) {
        const id = e.target.dataset.id;
        showPost(id);
    }
});

showpost.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.matches('.btn')){
        if (e.target.dataset.func == 'edit'){
            console.log('edit')
        } else {
            deletePost(e.target.dataset.id);
        }
    }
})

function showAll() {
    webApi.get('posts')
            .then( data => {
                postsList.innerHTML = data.map(post => {
                    return `<li>
                        <a class="fs-5 product" href="#" data-id=${post.id}>${post.id} - ${post.title}</a>
                    </li>`
                }).join("")
            })
};

function showPost(id) {
    webApi.get(`posts/${id}`)
            .then(data => {
                showPage(null, 'show-post');
                showpost.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
                <div>
                    <button class='btn btn-warning' id='edit-btn' data-id=${data.id} data-func='edit'>Edit</button>
                    <button class='btn btn-danger' id='delete-btn' data-id=${data.id} data-func='delete'>Delete</button>
                </div>`
            })
};

function deletePost(id) {
    webApi.req(`posts/${id}`, null, "DELETE")
            .then(data => {
                showPage(null, "index-page")
            })
};

post_create_btn.addEventListener('click', () => {
    let titleNode = document.querySelector("#create-post #title");
    let bodyNode = document.querySelector("#create-post #body");
    const title = titleNode.value;
    const body = bodyNode.value;
    const post = {title, body};
    webApi.req(`posts`, post, "POST")
            .then(data => {
                showPost(data.post.id)
                // console.log(data)
                titleNode.value = "";
                bodyNode.value = "";
            }).catch(error => {
                console.log(error)
            })
})