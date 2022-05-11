const { response } = require('express');
const JobService = require('../services/jobs');

const jobService = new JobService();

const getAllJobs = async (req, res = response) => {
  const jobs = await jobService.getAll();

  res.json(jobs);
};

const getAllByCategory = async (req, res = response) => {
  const { category } = req.params;

  const jobs = await jobService.getAllByCategory(category);

  res.json(jobs);
};

const postJob = async (req, res = response) => {
  const data = req.body;
  const { _id } = req.user;

  data.user = _id;

  const newJob = await jobService.addJob(data);

  res.status(201).json(newJob);
};

const editJob = async (req, res = response) => {
  const data = req.body;
  const { id } = req.params;

  const job = await jobService.editJob(id, data);

  res.json(job);
};

const deleteJob = async (req, res = response) => {
  const { id } = req.params;

  const job = await jobService.deleteJob(id);

  res.json(job);
};

module.exports = {
  getAllJobs,
  getAllByCategory,
  postJob,
  editJob,
  deleteJob,
};
