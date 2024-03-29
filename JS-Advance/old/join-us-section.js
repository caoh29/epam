export const joinUsSection = window.addEventListener('load', () => {

    const section = document.createElement('section');
    section.setAttribute('class', 'app-section app-section--dynamic');

    const sybling = document.querySelector('.app-section--image-culture')
    sybling.after(section);


    const sectionObj = document.querySelector('.app-section--dynamic');

    sectionObj.style.background = 'linear-gradient(rgba(5, 17, 18, 0.5), rgba(5, 17, 18, 0.5)), url("./assets/dynamic_background.png")';
    sectionObj.style.backgroundPosition = 'center';
    sectionObj.style.backgroundSize = 'contain';
    sectionObj.style.backgroundRepeat = 'no-repeat';
    sectionObj.style.width = '100%';
    sectionObj.style.height = '436px';
    sectionObj.style.display = 'flex';
    sectionObj.style.flexDirection = 'column';
    sectionObj.style.alignItems = 'center';

    const heading = document.createElement('h2');
    heading.setAttribute('class', 'dynamic__h2')
    sectionObj.append(heading);


    const headingObj = document.querySelector('.dynamic__h2');
    headingObj.innerText = 'Join Our Program';
    headingObj.style.color = '#FFFFFF';
    headingObj.style.marginTop = '90px';
    headingObj.style.marginBottom = '0';


    const description = document.createElement('h3');
    description.setAttribute('class', 'dynamic__h3')
    sectionObj.append(description);

    const descriptionObj = document.querySelector('.dynamic__h3');
    descriptionObj.innerHTML = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    descriptionObj.style.color = '#FFFFFF';
    descriptionObj.style.width = '400px';
    descriptionObj.style.marginTop = '50px';
    descriptionObj.style.marginBottom = '0';

    const form = document.createElement('form');
    form.setAttribute('id', 'dynamic__form');
    sectionObj.append(form);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('id', 'dynamic__input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'dynamic__input');
    emailInput.setAttribute('placeholder', 'email');
    form.append(emailInput);

    const subscribeButton = document.createElement('input');
    subscribeButton.setAttribute('id', 'dynamic__submit');
    subscribeButton.setAttribute('type', 'submit');
    form.append(subscribeButton);

    if (window.screen.width >= 768) {
        const emailInput = document.querySelector('#dynamic__input');
        emailInput.style.opacity = '0.2';
        emailInput.style.width = '400px';
        emailInput.style.height = '36px';
        emailInput.style.marginRight = '30px';
        emailInput.style.marginTop = '60px';
    
        const subscribeButton = document.querySelector('#dynamic__submit');
        subscribeButton.style.cursor = 'pointer';
        subscribeButton.innerText = 'SUBSCRIBE';
    } else if (window.screen.width <= 768) {
        sectionObj.style.height = '525px';

        const form = document.querySelector('#dynamic__form');
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.alignItems = 'center';

        const emailInput = document.querySelector('#dynamic__input');
        emailInput.style.opacity = '0.2';
        emailInput.style.width = '400px';
        emailInput.style.height = '48px';
        emailInput.style.marginBottom = '42px';
        emailInput.style.marginTop = '55px';
    
        const subscribeButton = document.querySelector('#dynamic__submit');
        subscribeButton.innerText = 'SUBSCRIBE';
        subscribeButton.style.width = '110px';
        subscribeButton.style.cursor = 'pointer';
    }

    document.querySelector('#dynamic__form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('#dynamic__input');
        const email = input.value;
        console.log(`${email}`);
        input.value = '';
    });
});

