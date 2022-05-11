const Jobs = require('../models/Jobs');

class JobService {
  async getAll() {
    try {
      const jobs = await Jobs.find({ active: true });
      return jobs;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllByCategory(category = '') {
    try {
      const jobs = await Jobs.find({ active: true, category });
      return jobs;
    } catch (error) {
      console.log(error);
    }
  }

  async addJob(data) {
    try {
      const job = await Jobs.create(data);
      return job;
    } catch (error) {
      console.log(error);
    }
  }

  async editJob(id, data) {
    try {
      const job = await Jobs.findByIdAndUpdate(id, data, {
        returnOriginal: false,
      });
      return job;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteJob(id) {
    try {
      const job = await Jobs.findByIdAndUpdate(id, { active: false });
      return job;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = JobService;
