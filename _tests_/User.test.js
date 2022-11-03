const superset = require("supertest");
const app = require("../src/index");
const CustomerModel = require("../Model/Customer");
const CustomerController = require("../controller/customer/createCustomer");
const { all } = require("../routes/customer");
const sequelize = require("../database/Sequelize");
const { describe } = require("../Model/Customer");
// const request = superset.agent(app)

beforeAll(() => {
  sequelize.sync({ force: true });
});

describe("Customer create route", () => {
  const createCustomer = {
    id: 1,
    name: "fisayo",
    role: "jj",
  };

  test("Should have key record and msg when created", async () => {
    const mockCreateCustomer = jest.fn(() => createCustomer);
    jest
      .spyOn(CustomerModel, "create")
      .mockImplementation(() => mockCreateCustomer());

    const res = await request(app).post("/createCustomer").send(createCustomer);

    expect(mockCreateCustomer).toHaveBeenCalledTimes(1);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("role");
  });

  test("Should handle exception", async () => {
    const mockCreateCustomer = jest.fn(() => {
      throw "error";
    });
    jest
      .spyOn(CustomerModel, "create")
      .mockImplementation(() => mockCreateCustomer());

    const res = await request(app).post("/createCustomer").send(createCustomer);

    expect(mockCreateCustomer).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual({});
  });
});
