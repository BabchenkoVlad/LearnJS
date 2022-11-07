
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`hello ${this.name}`);
  };
}

User.prototype.exit = function (name) {
  console.log(`Пользователь ${this.name} ушел`);
}

const ivan = new User('ivan', 28);
const alex = new User('alex', 26);

ivan.hello();