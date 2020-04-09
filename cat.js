class Cat {
  constructor(name, tiredness, hunger, loneliness, happiness) {
    this._name = name;
    this._tiredness = tiredness;
    this._hunger = hunger;
    this._loneliness = loneliness;
    this._happiness = happiness;
  }

  set hunger(value) {
    this._hunger += value;
  }

  set tiredness(value) {
    this._tiredness += value;
  }

  set loneliness(value) {
    this._loneliness += value;
  }

  set happiness(value) {
    this._happiness = value;
  }

  eat() {
    let n = Math.floor(Math.random() * 10 + 1);

    console.log("Hunger Option  : " + n);

    switch (n) {
      case (n = 1):
        console.log(
          `${
            this._name
          } waits for the moment where you are not concentrated and steals your pizza`
        );
        this.hunger = 1;
        break;
      case (n = 2):
        console.log(
          `${this._name} wanted to know what the goldfish tasted like`
        );
        this.hunger = 1;
        break;
      case (n = 3):
        console.log(`${this._name} doesn't like tofu`);
        this.hunger = -2;
        break;

      case (n = 4):
        console.log(`${this._name} had a furrball instead`);
        this.hunger = -1;
        break;

      case (n = 5):
        console.log(`${this._name} ate the grilled chicken .. but puked`);
        this.hunger = -1;
        break;

      case (n = 6):
        console.log(`${this._name} really likes goodies`);
        this.hunger = +2;
        break;

      case (n = 7):
        console.log(`${this._name} sniffed the food ... but isn't in the mood`);
        this.hunger = 0;
        break;
      case (n = 8):
        console.log(`${this._name} jumps around for those cheesy maccaronis`);
        break;
      case (n = 9):
        console.log(`${this._name} looks at the meat .... my preciousssssss`);
        break;
      case (n = 10):
        console.log(`${this._name} something 0 `);
        break;

      default:
        console.log("Cat is not hungry");
        break;
    }
  }

  sleep() {
    let n = Math.floor(Math.random() * 7 + 1);

    console.log("Sleep Option  : " + n);

    switch (n) {
      case (n = 1):
        console.log(
          `${
            this._name
          } doesn't want to sleep and cries in front of the garden door`
        );
        this.tiredness = -2;
        break;
      case (n = 2):
        console.log(`${this._name} jumps on you when you fall asleep`);
        this.tiredness = 1;
        break;
      case (n = 3):
        console.log(`${this._name} is making itself comfortable on your lap`);
        this.tiredness = 1;
        break;
      case (n = 4):
        console.log(`${this._name} takes a nap on the balcony`);
        this.tiredness = 1;
        break;
      case (n = 5):
        console.log(`${this._name} is laying on your keyboard`);
        this.tiredness = 1;
        break;
      case (n = 6):
        console.log(`${this._name} says sleep is for pussies`);
        this.tiredness = -1;
        break;
      case (n = 7):
        console.log(`${this._name} looks at you... come on .. it's 4 am`);
        this.tiredness = -2;
        break;

      default:
        console.log("Cat is not tired");
        break;
    }
  }

  pet() {
    let n = Math.floor(Math.random() * 7 + 1);

    console.log("Pet Option  : " + n);

    switch (n) {
      case (n = 1):
        console.log(
          `${this._name} is just passing you by.. keep your hands off`
        );
        this.loneliness = -2;
        break;
      case (n = 2):
        console.log(`${this._name} is blocking the screen for some strokes`);
        this.loneliness = 1;
        break;
      case (n = 3):
        console.log(`${this._name} can't get enough`);
        this.loneliness = 2;
        break;
      case (n = 4):
        console.log(`${this._name} says you hit the right spot`);
        this.loneliness = 1;
        break;
      case (n = 5):
        console.log(`${this._name}'s head is moving while patting`);
        this.loneliness = 1;
        break;
      case (n = 6):
        console.log(`${this._name} is enjoying it`);
        this.loneliness = 1;
        break;
      case (n = 7):
        console.log(`${this._name} first wanted it .. now slapped your hand`);
        this.loneliness = 0;
        break;

      default:
        console.log("Cat is doing fine.");
        break;
    }
  }
}

const bruno = new Cat("Bruno", 50, 50, 50, 50);

console.log(bruno);

bruno.sleep();
bruno.pet();
bruno.eat();
