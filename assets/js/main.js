const button = document.querySelector('.read');

button.addEventListener('click', () =>{
    document.querySelectorAll('li').forEach(e =>{
        e.classList.remove('unseen');
        console.log(e.classList);
    });
    document.querySelectorAll('.dot').forEach(e =>{
        e.classList.remove('dot');
    })
    document.querySelector('.number').innerText = '0';
    })