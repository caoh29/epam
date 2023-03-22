'use strict';

window.addEventListener('load', () => {

    const dynamicDiv = document.createElement('div');
    dynamicDiv.setAttribute('class', 'dynamic');

    const sybling = document.querySelector('.number__8')
    sybling.after(dynamicDiv);


    const dynamicDivObj = document.querySelector('.dynamic');

    dynamicDivObj.style.background = 'linear-gradient(rgba(5, 17, 18, 0.5), rgba(5, 17, 18, 0.5)), url("./assets/dynamic_background.png")';
    dynamicDivObj.style.backgroundPosition = 'center';
    dynamicDivObj.style.backgroundSize = 'contain';
    dynamicDivObj.style.backgroundRepeat = 'no-repeat';
    dynamicDivObj.style.width = '100%';
    dynamicDivObj.style.height = '436px';
    dynamicDivObj.style.display = 'flex';
    dynamicDivObj.style.flexDirection = 'column';
    dynamicDivObj.style.alignItems = 'center';

    const title = document.createElement('h1');
    title.setAttribute('class', 'dynamic__h1')
    dynamicDivObj.append(title);


    const titleTag = document.querySelector('.dynamic__h1');
    titleTag.innerHTML = 'Join Our Program';
    titleTag.style.color = '#FFFFFF';
    titleTag.style.marginTop = '90px';
    titleTag.style.marginBottom = '0';


    const description = document.createElement('h2');
    description.setAttribute('class', 'dynamic__h2')
    dynamicDivObj.append(description);

    const descriptionTag = document.querySelector('.dynamic__h2');
    descriptionTag.innerHTML = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    descriptionTag.style.color = '#FFFFFF';
    descriptionTag.style.width = '400px';
    descriptionTag.style.marginTop = '50px';
    descriptionTag.style.marginBottom = '0';

    const form = document.createElement('form');
    form.setAttribute('id', 'dynamic__form');
    dynamicDivObj.append(form);

    const input = document.createElement('input');
    input.setAttribute('id', 'dynamic__input');
    form.append(input);

    const submit = document.createElement('input');
    submit.setAttribute('id', 'dynamic__submit');
    form.append(submit);

    if (window.screen.width >= 768) {
        const inputTag = document.querySelector('#dynamic__input');
        inputTag.style.opacity = '0.2';
        inputTag.style.width = '400px';
        inputTag.style.height = '36px';
        inputTag.style.marginRight = '30px';
        inputTag.style.marginTop = '60px';
        inputTag.setAttribute('type', 'email');
        inputTag.setAttribute('name', 'dynamic__input');
        inputTag.setAttribute('placeholder', 'Email');
    
        const submitTag = document.querySelector('#dynamic__submit');
        submitTag.setAttribute('value', 'SUBSCRIBE');
        submitTag.setAttribute('type', 'submit');
        submitTag.style.cursor = 'pointer';    
    } else if (window.screen.width <= 768) {
        dynamicDivObj.style.height = '525px';

        const form = document.querySelector('#dynamic__form');
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.alignItems = 'center';

        const inputTag = document.querySelector('#dynamic__input');
        inputTag.style.opacity = '0.2';
        inputTag.style.width = '400px';
        inputTag.style.height = '48px';
        inputTag.style.marginBottom = '42px';
        inputTag.style.marginTop = '55px';
        inputTag.setAttribute('type', 'email');
        inputTag.setAttribute('name', 'dynamic__input');
        inputTag.setAttribute('placeholder', 'Email');
    
        const submitTag = document.querySelector('#dynamic__submit');
        submitTag.setAttribute('value', 'SUBSCRIBE');
        submitTag.setAttribute('type', 'submit');
        submitTag.style.width = '110px';
        submitTag.style.cursor = 'pointer';
    }

    //const styleSheet = document.querySelector('#stylesheet');
    //styleSheet.sheet.insertRule('#dynamic__input::placeholder { color: #FFFFFF; font-weight: bold; opacity: 1;}', 0);

    document.querySelector('#dynamic__form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('#dynamic__input');
        const email = input.value;
        console.log(`Email: ${email}`);
        input.value = '';
    });
});




