import { StackedLayout } from '@/components/ui/stacked-layout';
import { InternalSidebar } from './internal-sidebar';
import { InternalNavbar } from './internal-navbar';

export const InternalLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <StackedLayout navbar={<InternalNavbar />} sidebar={<InternalSidebar />}>
      {children}
    </StackedLayout>
  );
};
