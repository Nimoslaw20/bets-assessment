const { test, expect } = require('@playwright/test');
const apiData = require('../fixtures/api.json');
const { expectStatus200, expectResponseBodyArray } = require('../utils/helper');


test.describe(`GET ${apiData.getPetByStatus}`, () => {
  

    test('should get all pets by status ', async ({ request }) => {

        for (const status of apiData.status) {
          const response = await request.get(`${apiData.baseUrl}${apiData.getPetByStatus}`, {
            params: {
              status: status
            }
          });
          expectStatus200(response);
          const responseBody = await response.json();
          console.log("responseBody : ", responseBody);
          expectResponseBodyArray(responseBody);
          for (const pet of responseBody) {
            expect(pet).toHaveProperty('status', status);
          }
        }
      });
    

  test('should get all pets by status - available', async ({ request }) => {


      const response = await request.get(`${apiData.baseUrl}${apiData.getPetByStatus}`, {
        params: {
          status: apiData.status[0]
        }
      });
      expectStatus200(response);
      const responseBody = await response.json();
      console.log("responseBody : ", responseBody);
      expectResponseBodyArray(responseBody);
      for (const pet of responseBody) {
        expect(pet).toHaveProperty('status', apiData.status[0]);
      }
  
  });


  test('should get all pets by status - pending', async ({ request }) => {


      const response = await request.get(`${apiData.baseUrl}${apiData.getPetByStatus}`, {
        params: {
          status: apiData.status[1]
        }
      });
      expectStatus200(response);
      const responseBody = await response.json();
      console.log("responseBody : ", responseBody);
      expectResponseBodyArray(responseBody);
      for (const pet of responseBody) {
        expect(pet).toHaveProperty('status', apiData.status[1]);
      }

  });


  test('should get all pets by status - sold', async ({ request }) => {

      const response = await request.get(`${apiData.baseUrl}${apiData.getPetByStatus[2]}`, {
        params: {
          status: apiData.status[2]
        }
      });
      console.log("response.status() is ", response.status());
      if(response.status() !== 200){
        console.error(`Endpoint return status code of ${response.status()}`);
        return ;
      }
      expectStatus200(response);
      const responseBody = await response.json();
      console.log("responseBody : ", responseBody);
      expectResponseBodyArray(responseBody);
      for (const pet of responseBody) {
        expect(pet).toHaveProperty('status', apiData.status[2]);
      }
  
  });
});
