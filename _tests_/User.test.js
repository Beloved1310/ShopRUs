const request = require('superset');
const app = require('../src/index');
const  CustomerModel = require( '../Model/Customer');
const CustomerController = require('../controller/customer/createCustomer');
const { all } = require('../routes/customer');
const sequelize = require('../database/Sequelize');
const { describe } = require('../Model/Customer');


beforeAll(()=>{ 
	 sequelize.sync({ force: true});
})

// describe('User Registration', ()=>{
// 	it('test', (done)=>{
// 		request(app)
// 		.post('/createCustomer')
// 		.send({
// 			name: 'fisayo',
//         role: 'abc@abc.com',
// 		})
// 		.then((res)=>{
// 			// CustomerModel.findAll({

// 			// })
// 			console.log(res, 'ggg')
// 			done()
// 		})
// 	})
// })
// test('1# Register user', async () => {
//     // const userService = new UserAccountService()
//     // jest.spyOn(Customer, 'create')

//     const registerRequest = {
//         name: 'fisayo',
//         email: 'abc@abc.com',
//         password: '1234'
//     }
//     const registeredUser = await CustomerController(registerRequest);
    

//     expect(Customer.create).toHaveBeenCalledTimes(1);
//     expect(registeredUser).toBeInstanceOf(Customer);
//     expect(registeredUser.email).toEqual('abc@abc.com')
// });

describe("Customer create route", () => {
	const createCustomer = {
		name: 'fisayo',
       role: 'jj'
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
		expect(res.body).toEqual({
			
		});
	});

	// test("Should handle request param", async () => {
	// 	const res = await request(app).post("/api/v1/create").send({});

	// 	expect(res.body).toEqual({
	// 		msg: "The title value should not be empty",
	// 		param: "title",
	// 		location: "body",
	// 	});
	// });
});




// describe("test read pagination  route", () => {
// 	const registerRequest = {
//         name: 'fisayo',
//         email: 'abc@abc.com',
//         password: '1234'
//     }

// 	test("Should return array of todo", async () => {
// 		const mockReadAllTodo = jest.fn((): any => [todo]);
// 		jest
// 			.spyOn(TodoInstance, "findAll")
// 			.mockImplementation(() => mockReadAllTodo());

// 		const res = await request(app).get("/api/v1/read?limit=5");

// 		expect(mockReadAllTodo).toHaveBeenCalledTimes(1);
// 		expect(res.body).toEqual([todo]);
// 	});

// 	test("Should handle exception", async () => {
// 		const mockCreateTodo = jest.fn((): any => {
// 			throw "error";
// 		});
// 		jest
// 			.spyOn(TodoInstance, "findAll")
// 			.mockImplementation(() => mockCreateTodo());

// 		const res = await request(app).get("/api/v1/read?limit=5");
// 		expect(mockCreateTodo).toHaveBeenCalledTimes(1);
// 		expect(res.body).toEqual({
// 			msg: "fail to read",
// 			status: 500,
// 			route: "/read",
// 		});
// 	});

// 	test("Should handle request query", async () => {
// 		const res = await request(app).get("/api/v1/read?limit=0");
// 		expect(res.body).toEqual({
// 			value: "0",
// 			msg: "The limit value should be number and between 1-10",
// 			param: "limit",
// 			location: "query",
// 		});
// 	});
// });