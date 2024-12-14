# **TEST PLAN**

# **Part 1: UT Testing**

## __Feature 1: Login Functionality__


### Scenario 1: Verify that users can log in with valid credentials.

   Pre-condition: 
      - User must have access to the login page


   Steps to Test:
      - Navigate to the login page.
      - Enter valid username and password.
      - Click on the login button.
      - Assert that the product page is displayed. 


   Expected Outcome:
      - User should be able to login with valida credentials and also be redirected to the Products page


### Scenario 2: Verify that users cannot log in with invalid credentials.

    Pre-condition: 
      - User must have access to the login page.


    Steps to Test:
      - Navigate to the login page.
      - Enter invalid username and password.
      - Click on the login button.
      - Assert that an error message is displayed below the password field. 


    Expected Outcome:
      - User should not be able to login with invalid credentials.
      - Error message should be displayed to inform the user.


### Scenario 3: Verify that users can logout.
    Pre-condition: 
      - User must be loggged in.
      - Logout button should be present on the menu options.


    Steps to Test:
      - After login.
      - Click on the menu icon.
      - Select the logout.
      - Assert that user is redirected to the login page. 


    Expected Outcome:
      - User should able to logout.
      - User must be directed to the login page.
      - When user clicks back button, user should not be redirected to the app.



## __Feature 2: Add To Cart & Checkout Functionality__


### Scenario 1: Verify that products page has products.
    Pre-condition: 
      - User must be loggged in.


    Steps to Test:
      - After login.
      - On the products page, observe the page for products
      - Check for product name, description, image and price.
     

    Expected Outcome:
      - User should able add product(s) to the cart page.
      - The count on the cart badge should increase when user add to the cart.
      - User should be able to see the added products in the cart.


### Scenario 2: Verify that user can add product(s) to cart.
    Pre-condition: 
      - User must be loggged in.
      - Product item should be clickable.
      - Product item should have an 'add to cart' button


    Steps to Test:
      - After login.
      - On the products page, click on  'add to cart' on one or more product(s).
      - Check & observe count on the cart badge at the top right corner of the page
      - Assert that the count is equal to the number of items selected.
      - Click on the cart badge or icon
      - View the number of products on the cart page.
    

    Expected Outcome:
      - User should able add product(s) to the cart page.
      - The count on the cart badge should increase when user add to the cart.
      - User should be able to see the added products in the cart.


### Scenario 3: Verify that user can checkout product.
    Pre-condition: 
      - User must be loggged in.
      - User should be able to select products and see them on the cart page.
      - 'Checkout' button must be present on the cart page.
     

    Steps to Test:
      - After product selection.
      - Click on the cart icon at the top right corner of the page.
      - Check the exact number of products selected.
      - Click on 'Checkout' button.
      - Fill the user details forms.
      - Check the exact number of products on the review page.
      - Click on the 'Finish' button.
      - Observe the confirmation message 
    

    Expected Outcome:
      - User should able add product(s) to the cart page.
      - The count on the cart badge should increase when user add to the cart.
      - User should be able to see the added products in the cart.
    


# **Some bugs Founds:**
## 1. User can checkout an empty cart.



# **Part 1: API Testing**


## Chosen API

### POST /pet – Create a new pet to the store.
### GET /pet/findByStatus – Find pet by ID.


## Test Cases - POST /pet

### Test Case 1: Verify that a new pet can be created with valid data.

    - Test Data:

         Here is an example of the `pet` object:

```json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "German Shepherd"
  },
  "name": "doggie",
  "photoUrls": [
    "https://img.freepik.com/free-photo/adorable-brown-white-basenji-dog-smiling-giving-high-five-isolated-white_346278-1657.jpg?t=st=1734213310~exp=1734216910~hmac=341836e7faedb4ee10713eaaada69eb8dd7047aace88e036eac4bbbbb24cd76d&w=1800"
  ],
  "tags": [
    {
      "id": 0,
      "name": "Dog"
    }
  ],
  "status": "available"
} 

```

### Test Case 2: Verify that adding a pet with an invalid data type returns a 500 internal server error.

     - Test Data:

         Here is an example of the `pet` object:

```json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "German Shepherd"
  },
  "name": "doggie",
  "photoUrls": " ",
  "tags": [
    {
      "id": 0,
      "name": "Dog"
    }
  ],
  "status": "available"
} 

```



## Test Cases - GET /pet/findByStatus


### Test Case 1: Verify that api can get pet by status
 - Test Data:

         Here is an example:

```json
{
 
  "status": "available"
} 


```


### Test Case 2: Verify that api returns 404 when an empty string is passed as a status

  - Test Data:

         Here is an example of the `pet` object:

```json
{
 
  "status": ""
} 


```
### Test Case 3: Verify that api returns 404 when an uppercase status data is passed as a status

 - Test Data:

         Here is an example of the `pet` object:

```json
{
 
  "status": "SOLD"
} 


```




