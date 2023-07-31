function subscribeFormSubmit(event) {
      event.preventDefault();
      const form = event.target.closest('form');
      const emailInput = form.querySelector('input[type="email"]');
      const subscribeButton = form.querySelector('input[type="submit"]');
      const apiUrl = "https://assets.mailerlite.com/jsonp/534041/forms/95167824242148861/subscribe"; // Replace with your MailerLite API endpoint
  
      const email = emailInput.value; // Get the user's email address from the input field
  
      // Perform your own validation on the email address, if needed.
      // For demonstration purposes, we'll assume the email is valid.
  
      // Prepare the request body (this may vary depending on the MailerLite API)
      const requestBody = {
        fields: {
          email: email,
        },
      };
  
      // Prepare the fetch options
      const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
          // Add any necessary authorization headers if required
        },
        body: JSON.stringify(requestBody), // Convert the request body to JSON string
      };
  
      // Perform the AJAX request to the MailerLite server
      fetch(apiUrl, fetchOptions)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to subscribe.'); // Handle errors appropriately
          }
        })
        .then(data => {
          // Handle the API response data as needed
          // In this example, we assume the subscription was successful
          subscribeButton.value = 'Subscribed';
          emailInput.value = ''; // Clear the email input after subscribing (optional)
        })
        .catch(error => {
          // Handle errors appropriately
          console.error(error);
          // You may display an error message to the user if necessary
        });
    }