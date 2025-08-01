const employees = [
  {
    id: 1,
    firstName: "E",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile and format sales data for Q2.",
        date: "2025-07-25",
        category: "Reports",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Meeting",
        description: "Discuss project roadmap with ACME Corp.",
        date: "2025-07-28",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review the frontend code for the new dashboard.",
        date: "2025-07-30",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1,
    },
  },
  {
    id: 2,
    firstName: "Fatima",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Write Blog Post",
        description: "Draft article about upcoming features.",
        date: "2025-07-27",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Sync",
        description: "Weekly stand-up with design team.",
        date: "2025-07-29",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fixing",
        description: "Fix login issue reported by QA.",
        date: "2025-07-26",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Update Docs",
        description: "Revise onboarding documentation.",
        date: "2025-07-31",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 2,
    },
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Review",
        description: "Review UI designs for approval.",
        date: "2025-07-30",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Email Campaign",
        description: "Launch August newsletter.",
        date: "2025-07-28",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Training Session",
        description: "Attend cybersecurity awareness training.",
        date: "2025-07-27",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1,
    },
  },
  {
    id: 4,
    firstName: "Hina",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Performance Review",
        description: "Self-evaluation form submission.",
        date: "2025-07-31",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Deploy Update",
        description: "Deploy version 2.3.1 to production.",
        date: "2025-07-29",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Audit Logs Check",
        description: "Verify user access audit logs.",
        date: "2025-07-26",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Slack Cleanup",
        description: "Remove unused channels and inactive users.",
        date: "2025-07-30",
        category: "Admin",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Mentor Session",
        description: "Provide guidance to new interns.",
        date: "2025-07-28",
        category: "Mentorship",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 3,
      completed: 1,
      failed: 1,
      newTask: 3,
    },
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Test Cases",
        description: "Design unit tests for new login module.",
        date: "2025-07-29",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Customer Feedback",
        description: "Summarize feedback from July survey.",
        date: "2025-07-27",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Backend Optimization",
        description: "Improve query speed for report generation.",
        date: "2025-07-30",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Notification Bug",
        description: "Resolve duplicate notification issue.",
        date: "2025-07-25",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Team Lunch Planning",
        description: "Coordinate Friday lunch event.",
        date: "2025-07-31",
        category: "Social",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 3,
      completed: 1,
      failed: 1,
      newTask: 2,
    },
  },
];

const admin = [
  {
    admin: {
      firstName: "Hina",
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
