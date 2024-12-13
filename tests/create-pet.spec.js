
const { test, expect } = require('@playwright/test');
const apiData = require('../fixtures/api.json');

test.describe(`POST ${apiData.pet}`, () => {

  
    test('should create a new pet', async ({ request }) => {
      const pet = {
        id: 0,
        category: {
          id: 0,
          name: 'string'
        },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [
          {
            id: 0,
            name: 'string'
          }
        ],
        status: 'available'
      };
  
      const response = await request.post(`${apiData.baseUrl}${apiData.pet}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: pet
      });
  
      expect(response.status()).toBe(200);
  
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty('id');
      expect(responseBody).toHaveProperty('name', pet.name);
      expect(responseBody).toHaveProperty('status', pet.status);
    });
  });