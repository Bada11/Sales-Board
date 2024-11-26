import { SideNavBar } from "./types";
 import { LayoutDashboard, Joystick, BookOpen, Settings, NotebookTabs, Workflow, CircleFadingPlusIcon } from "lucide-react";


export const SideNavItems: SideNavBar[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <LayoutDashboard />

    },
    {
        title: "Task",
        path: "/task",
        icon: <Joystick />
    },
    {
        title: "Accounts",
        path: "/accounts",
        icon: <BookOpen />,
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
        path: "/settings",
        icon: <Settings />
    },
    {
        title: "Budgetting and Reports",
        path: "/budgetting-and-reports",
        icon: <NotebookTabs />

    },
    {
        title: "Workflow Automation",
        path: "/workflow-automation",
        icon: <Workflow />
    },
    {
        title: "CRM",
        path: "/crm",
        icon: <CircleFadingPlusIcon />
    }
]