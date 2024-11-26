export type SideNavBar  = {
    title: string;
    path: string;
    icon?:  JSX.Element;
    subMenu?: boolean;
    subMenuItems?: SideNavBar[];
}