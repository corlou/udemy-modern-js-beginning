class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = newDate(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastNmae = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const amy = new Person('Amy', 'Pond', '11-13-1980');

amy.getsMarried('Williams');

console.log(Person.addNumbers(1, 2));