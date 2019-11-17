let user = {
    firstName: "Вася",
    sayHi() {
        console.log(`Привет, ${this.firstName}!`);
    }
};

setTimeout(() => {
    user.sayHi(); // Привет, Вася!
}, 1000);
