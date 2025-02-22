import Dashboard from '../../assets/dash.svg';
import UserManagement from '../../assets/user.svg';
import WorkflowManagement from '../../assets/workflow.svg';
import AuditTrail from '../../assets/audit.svg';
import CustomerTransactions from '../../assets/transactions.svg'; 
import Customer360 from '../../assets/customer360.svg';
import CustomerOnboarding from '../../assets/onboarding.svg';
import ComplaintsManagement from '../../assets/complaints.svg';
import TradeFinance from '../../assets/trade.svg';
import LeadManagement from '../../assets/lead.svg';
import KnowledgeBase from '../../assets/knowledge.svg';
import LicenseManagement from '../../assets/license.svg';
import AdminSettings from '../../assets/admin.svg';

export const sidebarItems = [
  {
    name: "Dashboard",
    icon: Dashboard,
    // expandable: true,
    description: "Access the main dashboard and monitor key activities."
  },
  {
    name: "User Management",
    icon: UserManagement,
    // expandable: true,
    description: "Manage users, their roles, and permissions."
  },
  {
    name: "Workflow Management",
    icon: WorkflowManagement,
    route: "/workflow-management",
    // expandable: true,
  },
  {
    name: "Audit Trail",
    icon: AuditTrail,
    expandable: true,
    subItems: [
      { 
        name: "Sub Item 1", 
        icon: "/src/assets/Home.svg", 
        route: "/sub-item1", 
        description: "Description for Sub Item 1"
      },
      { 
        name: "Sub Item 2", 
        icon: "/src/assets/Notification.svg", 
        route: "/sub-item2", 
        description: "Description for Sub Item 2"
      }
    ]  },
  {
    name: "Customer Transactions",
    icon: CustomerTransactions,
    expandable: true,
    subItems: [
      { 
        name: "Sub Item 3", 
        icon: "/src/assets/admin.svg", 
        route: "/sub-item3", 
        description: "Description for Sub Item 3"
      },
      { 
        name: "Sub Item 4", 
        icon: "/src/assets/license.svg", 
        route: "/sub-item4", 
        description: "Description for Sub Item 4"
      }
    ]   },
  {
    name: "Customer 360",
    icon: Customer360,
    expandable: true,
    subItems: [
      { 
        name: "Sub Item 3", 
        icon: "/src/assets/admin.svg", 
        route: "/sub-item3", 
        description: "Description for Sub Item 3"
      },
      { 
        name: "Sub Item 4", 
        icon: "/src/assets/license.svg", 
        route: "/sub-item4", 
        description: "Description for Sub Item 4"
      }
    ] },
  {
    name: "Customer Onboarding",
    icon: CustomerOnboarding,
    // expandable: true,
    description: "Handle the registration and onboarding process for new customers."
  },
  {
    name: "Complaints Management",
    icon: ComplaintsManagement,
    // expandable: true,
    description: "Track and resolve customer complaints and feedback."
  },
  {
    name: "Trade Finance",
    icon: TradeFinance,
    expandable: true,
    description: "Manage and optimize financial transactions related to trade."
  },
  {
    name: "Lead Management",
    icon: LeadManagement,
    expandable: true,
    subItems: [
      { 
        name: "Sub Item 3", 
        icon: "/src/assets/admin.svg", 
        route: "/sub-item3", 
        description: "Description for Sub Item 3"
      },
      { 
        name: "Sub Item 4", 
        icon: "/src/assets/license.svg", 
        route: "/sub-item4", 
        description: "Description for Sub Item 4"
      }
    ]  },
  {
    name: "Knowledge Base",
    icon: KnowledgeBase,
    route: "/knowledge-base",
    // expandable: true,
  
  },
  {
    name: "License Management",
    icon: LicenseManagement,
    expandable: true,
    subItems: [
      { 
        name: "Sub Item 3", 
        icon: "/src/assets/admin.svg", 
        route: "/sub-item3", 
        description: "Description for Sub Item 3"
      },
      { 
        name: "Sub Item 4", 
        icon: "/src/assets/license.svg", 
        route: "/sub-item4", 
        description: "Description for Sub Item 4"
      }
    ]   },
  {
    name: "Admin Settings",
    icon: AdminSettings,
    // expandable: true,
    description: "Configure and manage application settings and user roles."
  }
];
