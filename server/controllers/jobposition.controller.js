import JobPosition from "../models/jobposition.entity";

const JobPositionController = {
  async createJobPosition(req, res) {
    try {
      const newJobPosition = await JobPosition.create(req.body);
      return res.status(201).json(newJobPosition);
    } catch (error) {
      return res.staus(500).json({ error: error.message });
    }
  },

  async getJobPositions(req, res) {
    try {
      const JobPositions = await JobPosition.findAll();
      return res.status(201).json(JobPositions);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getJobPositionById(req, res) {
    const { id } = req.params;
    try {
      const JobPosition = await JobPosition.findByPk(id);
      if (!JobPosition) {
        return res.status(404).json({ message: "JobPosition not found" });
      }
      return res.status(200).json(JobPosition);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateJobPosition(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedJobPosition] = await JobPosition.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "JobPosition not found" });
      }
      return res.status(200).json(updatedJobPosition[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteJobPosition(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await JobPosition.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "JobPosition not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default JobPositionController;