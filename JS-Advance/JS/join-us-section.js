export class SectionCreator {
    create(type) {
        let section;
        if (type === 'standard') {
            section = new StandardSection();
        } else if (type === 'advanced') {
            section = new AdvancedSection();
        } else {
            throw new Error('Invalid section type');
        }
        section.remove = function() {
            section.section.parentNode.removeChild(section.section);
        }
        return section.section;
    }
}

class StandardSection {
    constructor() {
        this.titleText = 'Join Our Program';
        this.descriptionText = 'Sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.';
        this.buttonText = 'SUBSCRIBE';

        this.section = document.createElement('section');
        this.section.setAttribute('class', 'app-section app-section--dynamic');
        this.section.style.background = 'linear-gradient(rgba(5, 17, 18, 0.5), rgba(5, 17, 18, 0.5)), url("../assets/dynamic_background.png")';
        this.section.style.backgroundPosition = 'center';
        this.section.style.backgroundSize = 'contain';
        this.section.style.backgroundRepeat = 'no-repeat';
        this.section.style.width = '100%';
        this.section.style.height = '436px';
        this.section.style.display = 'flex';
        this.section.style.flexDirection = 'column';
        this.section.style.alignItems = 'center';


        this.title = document.createElement('h2');
        this.title.style.color = '#FFFFFF';
        this.title.style.marginTop = '90px';
        this.title.style.marginBottom = '0';
        this.title.innerText = this.titleText;
        this.section.append(this.title);

        this.description = document.createElement('h3');
        this.description.style.color = '#FFFFFF';
        this.description.style.marginTop = '50px';
        this.description.style.marginBottom = '0';
        this.description.style.width = '400px';
        this.description.innerText = this.descriptionText;
        this.section.append(this.description);

        this.form = document.createElement('form');

        this.input = document.createElement('input');
        this.input.setAttribute('type', 'email');
        this.input.setAttribute('placeholder', 'email');

        this.form.append(this.input);

        this.button = document.createElement('button');
        this.button.setAttribute('type', 'submit');
        this.button.style.cursor = 'pointer';
        this.button.innerText = this.buttonText;


        this.form.append(this.button);

        this.section.append(this.form);


        const sections = document.querySelectorAll('section');
        const size = sections.length;
        const syblingSection = sections[size - 1];
        syblingSection.after(this.section);

        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.querySelector('input');
            const email = input.value;
            console.log(`${email}`);
            input.value = '';
        });

        window.onbeforeunload = () => false;
    }
}

class AdvancedSection extends StandardSection {
    constructor() {
        super();
        this.titleText = 'Join Our Advanced Program';
        this.buttonText = 'Subscribe to Advanced Program';
        this.section.querySelector('h2').innerText = this.titleText;
        this.section.querySelector('button').innerText = this.buttonText;
    }
}
