import { Op, Sequelize } from "sequelize";
import JobPost from "../models/JobPost.entity.js";
import JobPosition from "../models/jobposition.entity.js";
import Company from "../models/Company.entity.js";
import CompanyLogo from "../models/CompanyLogo.entity.js";

// Controller functions
const JobPostController = {
  // Create a new JobPost
  async createJobPost(req, res) {
    try {
      const { CompanyID } = req.body;
      const CompanyRecord = await Company.findByPk(CompanyID);
      if (!CompanyRecord) {
        return res.status(404).json({ message: "Company not found" });
      }

      CompanyRecord.FreeJobPosted = true;
      await CompanyRecord.save();

      const newJobPost = await JobPost.create(req.body);
      return res.status(201).json(newJobPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all JobPosts
  async getJobPosts(req, res) {
    try {
      const {
        page = 1,
        limit = 10,
        nat,
        q,
        loc,
        sFrom,
        sTo,
        ed,
        cf,
        jp,
      } = req.query;
      const offset = (page - 1) * limit;

      const filter = { is_Active: true };
      if (nat) {
        filter.nationality = nat;
      }

      if (loc) {
        filter.interviewMethod = loc;
      }

      if (sFrom) {
        filter.salary_From = { [Op.gte]: sFrom };
      }

      if (sTo) {
        filter.salary_To = { [Op.lte]: sTo };
      }

      if (ed) {
        filter.education = ed;
      }

      if (jp) {
        filter.JobPositionId = jp;
      }

      if (cf) {
        filter.CompanyID = cf;
      }

      if (q) {
        filter[Op.or] = [
          Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("jobSummary")),
            "LIKE",
            `%${q.toLowerCase()}%`
          ),
          Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("interviewMethod")),
            "LIKE",
            `%${q.toLowerCase()}%`
          ),
          Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("Job Position.position")),
            "LIKE",
            `%${q.toLowerCase()}%`
          ),
          Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("Company.CompanyName")),
            "LIKE",
            `%${q.toLowerCase()}%`
          ),
        ];
      }

      const { count, rows: jobPosts } = await JobPost.findAndCountAll({
        where: filter,
        include: [
          {
            model: JobPosition,
            as: "Job Position",
          },
          {
            model: Company,
            as: "Company",
            include: [
              {
                model: CompanyLogo,
                as: "CompanyLogo",
              },
            ],
          },
        ],
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [["createdAt", "DESC"]],
      });

      return res.status(200).json({
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page),
        jobPosts,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getPopularJobs(req, res) {
    try {
      const jobPosts = await JobPost.findAll({
        include: [
          {
            model: JobPosition,
            as: "Job Position",
          },
        ],
      });
  
      const jobLikes = jobPosts.reduce((acc, jobPost) => {
        const position = jobPost["Job Position"].position;
        if (!acc[position]) {
          acc[position] = {
            ...jobPost["Job Position"].toJSON(),
            totalLikes: 0,
          };
        }
        acc[position].totalLikes += jobPost.likes;
        return acc;
      }, {});
  
      const jobLikesArray = Object.values(jobLikes).sort((a, b) => b.totalLikes - a.totalLikes);
  
      return res.status(200).json(jobLikesArray);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  

  // Get a JobPost by ID
  async getJobPostById(req, res) {
    const { id } = req.params;
    try {
      const JobPostRecord = await JobPost.findByPk(id);
      if (!JobPostRecord) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      return res.status(200).json(JobPostRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a JobPost by CompanyID
  async getJobPostByCompanyID(req, res) {
    const { CompanyID } = req.params;
    try {
      const JobPostRecords = await JobPost.findAll({ where: { CompanyID } });
      if (!JobPostRecords) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      return res.status(200).json(JobPostRecords);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a JobPost
  async updateJobPost(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedJobPost] = await JobPost.update(body, {
        where: { id },
        returning: true, // Return the updated JobPost object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      return res.status(200).json(updatedJobPost[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteJobPost(req, res) {
    const { id } = req.params;
    try {
      const jobPost = await JobPost.findByPk(id);
      if (!jobPost) {
        return res.status(404).json({ message: "Job Post not found" });
      }

      const CompanyID = jobPost.CompanyID;
      const deletedRowCount = await JobPost.destroy({ where: { id } });

      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Job Post not found" });
      }

      const count = await JobPost.count({ where: { CompanyID } });
      if (count === 0) {
        const CompanyRecord = await Company.findByPk(CompanyID);
        if (CompanyRecord) {
          CompanyRecord.FreeJobPosted = false;
          await CompanyRecord.save();
        }
      }

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Like a Job Post
  async likeJobPost(req, res) {
    const { id } = req.params;
    try {
      const jobPost = await JobPost.findByPk(id);
      if (!jobPost) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      jobPost.likes += 1;
      await jobPost.save();
      return res.status(200).json(jobPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Dislike a JobPost
  async dislikeJobPost(req, res) {
    const { id } = req.params;
    try {
      const jobPost = await JobPost.findByPk(id);
      if (!jobPost) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      jobPost.likes -= 1;
      await jobPost.save();
      return res.status(200).json(jobPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default JobPostController;
