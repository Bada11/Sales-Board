export type SideNavBar  = {
    title: string;
    path: string;
    subMenu?: boolean;
    subMenuItems?: SideNavBar[];
}