interface SidebarMenuItem {
  name: string,
  path: string,
  icon: string,
  public: boolean
}

interface Themes {
  name: string;
  themename: string;
}

interface Processes {
  name: string;
}

declare var electron: any;

declare var module: NodeModule;
interface NodeModule {
  id: string;
}