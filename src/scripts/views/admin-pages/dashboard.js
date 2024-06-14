import { createDashboardTemplate } from '../templates/admin-template';

const Dashboard = {
  async render() {
    return `
          ${createDashboardTemplate()}
        `;
  },

  async afterRender() {
    // Implementasikan logika tambahan yang diperlukan setelah render di sini
  },
};

export { Dashboard };
