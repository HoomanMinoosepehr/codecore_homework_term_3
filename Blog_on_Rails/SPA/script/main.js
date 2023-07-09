import webApi from "./API.js";

const postsList = document.querySelector("#show-list");
const showpost = document.querySelector("#show-post");
const post_create_btn = document.querySelector("#post-create-btn");
const update_btn = document.querySelector("#update-btn");

const navb = document.querySelectorAll(".nav-item");
navb.forEach(element => {
    element.addEventListener("click", showPage, false)
});

function showPage(e, pageId) {
    removeAlert()
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
        const id = e.target.dataset.id;
        if (e.target.dataset.func == 'edit'){
            editPost(id);
        } else {
            deletePost(id);
        }
    }
});

post_create_btn.addEventListener('click', () => {
    let titleNode = document.querySelector("#create-post #title");
    let bodyNode = document.querySelector("#create-post #body");
    const title = titleNode.value;
    const body = bodyNode.value;
    const post = {title, body};
    webApi.req(`posts`, post, "POST")
            .then(data => {
                showAlert(data.message)
                showPost(data.post.id)
                titleNode.value = "";
                bodyNode.value = "";
            }).catch(error => {
                console.log(error)
            })
});

update_btn.addEventListener("click", () => {
    const titleNode = document.querySelector('#edit-post #title');
    const bodyNode = document.querySelector("#edit-post #body");
    const id = document.querySelector("#edit-post #id").value;
    const title = titleNode.value;
    const body = bodyNode.value;
    const update = {title, body};
    webApi.req(`posts/${id}`, update, 'PATCH')
            .then(data => {
                showAlert(data.message)
                showPost(data.post.id);
                titleNode.value = "";
                bodyNode.value = "";
            })
});

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
                showAlert(data.message)
                showPage(null, "index-page")
            })
};

function editPost(id) {
    webApi.get(`posts/${id}`)
            .then(data => {
                showPage(null, "edit-post");
                document.querySelector("#edit-post #title").value = data.title;
                document.querySelector("#edit-post #body").value = data.body;
                document.querySelector('#edit-post #id').value = data.id;
            })
};

function showAlert(message) {
    document.getElementById("alert-info").innerHTML = `
    <div class="alert alert-${message.condition} alert-dismissible fade show" role="alert">
        ${message.text}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`
};

function removeAlert() {
    document.getElementById('alert-info').innerHTML = ""
};