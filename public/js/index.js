//make a post
const createPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const post = document.querySelector('#post').value;
//post the post
const response = await fetch(`/api/post`, { 
    method: 'POST',
    body: JSON.stringify({ title, post }),
    headers: {
    'Content-Type': 'application/json',
    },
});
    if (response.ok) {
        document.location.replace('/dash');
    } else {
        alert('Failed');
    }
    }
//update post
    const updatePost = async (event) => {
        event.preventDefault();
        const title = document.querySelector('#title').value.trim();
        const post = document.querySelector('#post').value.trim();
    //post the post
    const response = await fetch(`/api/post${post_Id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, post }),
        headers: {
        'Content-Type': 'application/json',
        },
    });
        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert('Failed');
        }
        }


        //update post
    const deletePost = async (event) => {
        event.preventDefault();

        const confirmed = confirm('You Certain?');
        if (!confirmed) {
            return;
        }


    //delete the post
    const response = await fetch(`/api/post${post_Id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    });
        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert('Failed');
        }
        }
// Comment function
        const createComment = async (event) => {
            event.preventDefault();
            const comment = document.querySelector('#comment').value.trim();

//sub post
        const response = await fetch(`/api/comment/${post_Id}`, {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
            'Content-Type': 'application/json',
            },
        });
            if (response.ok) {
                document.location.replace('/post');
            } else {
                alert('Failed');
            }
            }
document.addEventListener('DOMContentLoaded', () => { 
    console.log('DOM Loaded!');
    const loginForms = document.querySelectorAll('.login-form');
    console.log('Login Forms: ', loginForms);
    loginForms.forEach(form => {
        form.addEventListener('submit', loginFormHandler);
    });

document
    .querySelector('#new-post').addEventListener('submit', createPost);

document
    .querySelector('#update-post').addEventListener('submit', updatePost);

document
    .querySelector('#delete-post').addEventListener('click', deletePost);

document
    .querySelector('#create-comment').addEventListener('submit', createComment);
});