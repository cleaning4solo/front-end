class Cleaning4SoloAPI {
  static async eventAPI() {
    console.log('BASE_URL:', process.env.BASE_URL); // Untuk debugging
    const response = await fetch(`${process.env.BASE_URL}/events`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async blogAPI() {
    console.log('BASE_URL:', process.env.BASE_URL); // Untuk debugging
    const response = await fetch(`${process.env.BASE_URL}/blogs`);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default Cleaning4SoloAPI;
