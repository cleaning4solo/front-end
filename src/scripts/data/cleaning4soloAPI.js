class Cleaning4SoloAPI {
  static async eventAPI() {
    const response = await fetch(`${process.env.BASE_URL}/events`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async blogAPI() {
    const response = await fetch(`${process.env.BASE_URL}/blogs`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getDetailBlog(id) {
    try {
      const response = await fetch(`${process.env.BASE_URL}/blogs/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return undefined;
    }
  }

  static async getDetailEvent(id) {
    try {
      const response = await fetch(`${process.env.BASE_URL}/events/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return undefined;
    }
  }
}

export default Cleaning4SoloAPI;
