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

    },
    {
      name: "User Management",
      icon: UserManagement,
      expandable: true,

    },
    {
      name: "Workflow Management",
      icon: WorkflowManagement,
      route: "/workflow-management",
    },
    {
      name: "Audit Trail",
      icon: AuditTrail,
      expandable: true,

    },
    {
      name: "Customer Transactions",
      icon: CustomerTransactions,
      expandable: true,

    },
    {
      name: "Customer 360",
      icon: Customer360,
      expandable: true,

    },
    {
      name: "Customer Onboarding",
      icon: CustomerOnboarding,
      expandable: true,

    },
    {
      name: "Complaints Management",
      icon: ComplaintsManagement,
      expandable: true,

    },
    {
      name: "Trade Finance",
      icon: TradeFinance,
      expandable: true,

    },
    {
      name: "Lead Management",
      icon: LeadManagement,
      expandable: true,

    },
    {
      name: "Knowledge Base",
      icon: KnowledgeBase,
      route: "/knowledge-base",
    },
    {
      name: "License Management",
      icon: LicenseManagement,
      expandable: true,

    },
  
    {
        name: "Admin Settings",
        icon: AdminSettings,
        expandable: true,
      },
  ];
  