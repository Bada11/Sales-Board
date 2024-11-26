import { SideNavBar } from "./types";


export const SideNavItems: SideNavBar[] = [
    {
        title: "Dashboard",
        path: "/"

    },
    {
        title: "Task",
        path: "/task"
    },
    {
        title: "Accounts",
        path: "/accounts",
        subMenu: true,
        subMenuItems: [
            {title: "Bank Transactions", path: "/accounts/bank-transactions"},
            {title: "Sales", path: "/accounts/sales"},
            {title: "Expenses", path: "/accounts/expenses"},
            {title: "Invoices", path: "/accounts/invoices"},
        ]

    },
    {
        title: "Settings",
        path: "/settings"
    },
    {
        title: "Budgetting and Reports",
        path: "/budgetting-and-reports"

    },
    {
        title: "Workflow Automation",
        path: "/workflow-automation"
    },
    {
        title: "CRM",
        path: "/crm"
    }
]