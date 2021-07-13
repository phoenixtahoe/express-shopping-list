process.env.NODE_ENV = "test";
// npm packages
const request = require("supertest");
const app = require("../app");

let items = require("../fakeDb")

let item = { name: "popsicle", price:1.45 }

beforeEach(async () => {
  items.push(item)
});

afterEach(async () => {
  items = []
});

describe("GET /items", function () {
  test("Get all items", async function () {
    const res = await request(app).get(`/items`);
    const { items } = res.body;
    
    expect(res.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});