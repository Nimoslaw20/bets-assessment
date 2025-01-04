const { test, expect } = require("@playwright/test");
const apiData = require("../fixtures/api.json");
const { expectStatus500 } = require("../utils/helper");

test.describe(`POST ${apiData.pet}`, () => {
  test("should create a new pet", async ({ request }) => {
    const pet = {
      id: 0,
      category: {
        id: 0,
        name: "German Sherperd"
      },
      name: "doggie",
      photoUrls: [apiData.dogImage],
      tags: [
        {
          id: 0,
          name: "Dog"
        }
      ],
      status: "available"
    };

    const response = await request.post(`${apiData.baseUrl}${apiData.pet}`, {
      headers: {
        "Content-Type": "application/json"
      },
      data: pet
    });

    expect(response.status()).toBe(200);
    console.log("Response status is ", response.status());
    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(responseBody).toHaveProperty("id");
    expect(responseBody).toHaveProperty("name", pet.name);
    expect(responseBody).toHaveProperty("status", pet.status);
  });

  test("should return 500 when a bad request is made", async ({ request }) => {
    const pet = {
      id: 2,
      category: {
        id: 0,
        name: "string"
      },
      name: "doggie",
      photoUrls: "",
      tags: [
        {
          id: 0,
          name: "string"
        }
      ],
      status: "available"
    };

    const response = await request.post(`${apiData.baseUrl}${apiData.pet}`, {
      headers: {
        "Content-Type": "application/json"
      },
      data: pet
    });
    console.log("Response status is ", response.status());
    expectStatus500(response);
  });
});
