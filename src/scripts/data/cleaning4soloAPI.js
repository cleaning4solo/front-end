class Cleaning4SoloAPI {
  static async eventAPI() {
    const response = await fetch(`${process.env.BASE_URL}/events`);
    console.log(`base url : ${process.env.BASE_URL}`);
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

  static async signup(username, email, password) {
    try {
      const response = await fetch(`${process.env.BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Error during signup:', error.message);
      throw error;
    }
  }

  static async login(email, password) {
    try {
      const response = await fetch(`${process.env.BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Error during login:', error.message);
      throw error;
    }
  }

  static async joinVolunteer(userId, eventId) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available. Please log in again.');
      }

      const response = await fetch(`${process.env.BASE_URL}/volunteer/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, eventId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Gagal mengunggah data: ${errorData.message || response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error during joining event:', error.message);
      throw error;
    }
  }

  static async getDetaiVolunteer(id) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available. Please log in again.');
      }
      const response = await fetch(`${process.env.BASE_URL}/volunteer/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return undefined;
    }
  }

  static async deleteVolunteerEvent(userId, eventId) {
    try {
      const response = await fetch(`${process.env.BASE_URL}/volunteer/${userId}/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Gagal menghapus event');
      }
      return await response.json();
    } catch (error) {
      console.error('Error during deleting event:', error.message);
      throw error;
    }
  }
}

export default Cleaning4SoloAPI;
