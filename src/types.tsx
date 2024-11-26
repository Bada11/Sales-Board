export type SideNav  = {
    title: string;
    path: string;
    subMenu?: boolean;
    subMenuItems?: SideNav[];
}