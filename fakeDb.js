const items = [
  { name: "popsicle", price: 1.45 },
  { name: "cheerios", price: 3.4 },
];

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  // static add() {
  //   items.push(this);
  // }
}

module.exports = { items, Item };
