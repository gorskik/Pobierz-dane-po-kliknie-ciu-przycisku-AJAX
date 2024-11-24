console.log('Pobierz dane po kliknięciu przycisku');

let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(res => res.json())
    .then(data => {

        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');

        pId.innerText = `Post ID: ${data.id}`;
        pUserId.innerText = `User ID: ${data.userId}`;
        pTitle.innerText = `Title: ${data.titel}`;
        pBody.innerText = `Body: ${data.body}`;

        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);

        // console.log(pTitle);
    })
    // console.log('getData()');
    .catch(error => {
        console.error(error);
    })
    
}

btnGetData.addEventListener('click', getData);
