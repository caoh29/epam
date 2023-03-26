import { SectionCreator } from "./join-us-section.js";



export function main() {
    let factory;

    factory = new SectionCreator();

    const section = factory.create('standard');
    //section.remove();
}

main();