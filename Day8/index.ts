// why typescript?
/*
 -> compile time error checking
 -> turns on a number of neat features, like autocomplete, refactoring capabilities, immediate error checking to improve developer experience. 
 -> protect against runtime type error, in simple terms. 
*/

type Menu = {
  id: number;
  name: string;
  price: number;
};
type Order = {
  id: number;
  menuItem: Menu;
  status: "ordered" | "completed";
};

const menu: Menu[] = [
  { id: 1, name: "Pizza", price: 100 },
  { id: 2, name: "Maggi", price: 100 },
  { id: 3, name: "Pasta", price: 100 },
  { id: 4, name: "Roll", price: 100 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
var nextOrderId = 1;

function addNewItem(newMenuItem: Menu) {
  menu.push(newMenuItem);
}

function placeOrder(orderedItemName: string) {
  let menuItem = menu.find((menuItem) => menuItem.name === orderedItemName);
  if (menuItem != undefined) {
    cashInRegister += menuItem.price;
    const newOrder: Order = { id: nextOrderId++, menuItem, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
  }
  return -1;
}

function completeOrder(orderId: number) {
  let order = orderQueue.find((o) => o.id === orderId);
  if (order !== undefined) {
    order.status = "completed";
    return order;
  }
}

const myName = "Bob";
// literal type --> type Bob
let myName2 = "Alex";
// Unions
type UserRole = "guest" | "member" | "admin";
//literal types
//let userRole: UserRole = "something";
let userRole: UserRole = "admin";

//Type Narrowing
function getMenuItemDetail(identifier: string | number): Menu | undefined {
  if (typeof identifier === "string") {
    return menu.find((item) => item.name === identifier);
  } else {
    return menu.find((item) => item.id === identifier);
  }
}

function updateMenuItemDetail(identifier: number) {
  let menuItem = menu.find((item) => item.id === identifier);
  Object.assign({}, menuItem);
}

//typescript types
/*
1. any - don't use
2. unknown - safer than any, requires type checking before use
3. void - no return value
4. never - function that never returns, like an infinite loop or a function that always throws
*/

//Utility types
/*
create partial types 
omit type - takes all the properties and a unions of strings that specify the properties to be omitted
*/
type updateMenu = Partial<Menu>;
type addMenu = Omit<Menu, "id">;

//Generics
function getLastItemFromArray<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}
let lastMenuItem: Menu | undefined = getLastItemFromArray<Menu>(menu);
