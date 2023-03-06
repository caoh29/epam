class Task {
    constructor (name) {
        this.name = name;
    }
}

class Guest {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTask(index) {
        return { name: this.tasks[index].name };
    }
}

class User {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTask(index) {
        return { name: this.tasks[index].name };
    }

    createTask(task) {
        this.tasks.push(task);
    }
}


class Admin {
    constructor(roles) {
        this.roles = roles;
    }

    getArray() {
        return this.roles.map(obj => obj.constructor.name);
    }

    changeType(index) {
        if (this.roles[index] instanceof Guest) {
            return this.roles[index] = new User(this.roles[index].tasks);
        }
        else if (this.roles[index] instanceof User){
            return this.roles[index] = new Guest(this.roles[index].tasks);
        } else {
            throw new Error("Index out of bounds");
        }
    }
}


// const user = new User([
//     new Task('task name 1'),
//     new Task('task name 2'),
//     new Task('task name 3'),
// ]);


// console.log(guest.getTask(0));

// console.log(guest.createTask(new Task('task name 4')));

// console.log(user.getTask(0));

// console.log(user.createTask(new Task('task name 4')));

// console.log(user.getTask(3));

const admin = new Admin(
    [
        new Guest([]),
        new Guest([new Task('task name 1')]),
        new User([]),
        new User([new Task('task name 2')]),
    ]
);

console.log(admin.getArray());
console.log(admin)

admin.changeType(1);
console.log(admin.getArray());

console.log(admin)
