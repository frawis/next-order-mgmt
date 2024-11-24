import Link from 'next/link';
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from '../ui/sidebar';
import { Logo } from '../base/logo';

export const InternalSidebar = () => {
  return (
    <Sidebar>
      <SidebarBody>
        <div className="mb-2 flex">
          <Link href="/dashboard">
            <Logo className="size-10 text-primary" width={40} height={40} />
            <span className="sr-only">Lieferblick</span>
          </Link>
        </div>
        <SidebarSection>
          <SidebarItem href="/dashboard">Dashboard</SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
};
