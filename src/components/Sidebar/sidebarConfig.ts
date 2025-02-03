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
    expandable: true,
    description: "Access the main dashboard and monitor key activities."
  },
  {
    name: "User Management",
    icon: UserManagement,
    expandable: true,
    description: "Manage users, their roles, and permissions."
  },
  {
    name: "Workflow Management",
    icon: WorkflowManagement,
    route: "/workflow-management",
    expandable: true,
  },
  {
    name: "Audit Trail",
    icon: AuditTrail,
    expandable: true,
    subItems: [
      { 
        name: "Sub Item 1", 
        icon: "/src/assets/sub-item1-icon.svg", 
        route: "/sub-item1", 
        description: "Description for Sub Item 1"
      },
      { 
        name: "Sub Item 2", 
        icon: "/src/assets/sub-item2-icon.svg", 
        route: "/sub-item2", 
        description: "Description for Sub Item 2"
      }
    ]  },
  {
    name: "Customer Transactions",
    icon: CustomerTransactions,
    expandable: true,
    description: "Manage and track customer transactions and financial activities."
  },
  {
    name: "Customer 360",
    icon: Customer360,
    expandable: true,
    description: "View comprehensive customer data and history in one place."
  },
  {
    name: "Customer Onboarding",
    icon: CustomerOnboarding,
    expandable: true,
    description: "Handle the registration and onboarding process for new customers."
  },
  {
    name: "Complaints Management",
    icon: ComplaintsManagement,
    expandable: true,
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
    description: "Oversee and analyze sales leads and opportunities."
  },
  {
    name: "Knowledge Base",
    icon: KnowledgeBase,
    route: "/knowledge-base",
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
        icon: "/src/assets/sub-item4-icon.svg", 
        route: "/sub-item4", 
        description: "Description for Sub Item 4"
      }
    ]
  },
  {
    name: "License Management",
    icon: LicenseManagement,
    expandable: true,
    description: "Handle software licenses, renewals, and compliance."
  },
  {
    name: "Admin Settings",
    icon: AdminSettings,
    expandable: true,
    description: "Configure and manage application settings and user roles."
  }
];
