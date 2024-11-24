import { SignOutButton } from '@clerk/nextjs';
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from '../ui/navbar';
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '../ui/dropdown';
import { UserCircle } from '@phosphor-icons/react/dist/ssr';
import { Logo } from '../base/logo';

export const InternalNavbar = () => {
  return (
    <Navbar>
      <div className="flex items-center gap-x-2">
        <Logo className="size-8 text-primary" width={32} height={32} />
        <span>Lieferblick</span>
      </div>
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        <NavbarItem href="/dashboard">Dashboard</NavbarItem>
        <NavbarItem href="/bestellungen">Bestellungen</NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <UserCircle weight="duotone" size={28} />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom end">
            <DropdownItem href="/einstellungen">Einstellungen</DropdownItem>

            <SignOutButton>
              <DropdownItem as={'div'}>Abmelden</DropdownItem>
            </SignOutButton>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  );
};
