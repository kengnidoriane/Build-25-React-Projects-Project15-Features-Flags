// Simulated API response containing feature flags
const dummyApiResponse = {
  showLightAndDarkMode: true, 
  showTicTacToe: false,       
  showRandomColorGenerator: true, 
  showAccordion: true,        
  showTreeView: true,        
}

// Function to simulate an asynchronous API call to fetch feature flags
function featureFlagsDAtaServiceCall() {
  return new Promise((resolve, reject) => {
    // Check if dummyApiResponse exists
    if (dummyApiResponse) {
      // Simulate a delay of 500 milliseconds before resolving the promise with the API response
      setTimeout(() => resolve(dummyApiResponse), 500);
    } else {
      // Reject the promise with an error message if dummyApiResponse does not exist
      reject('Some error occurred! Please try again');
    }
  });
}

// Export the function as the default export of the module
export default featureFlagsDAtaServiceCall;
