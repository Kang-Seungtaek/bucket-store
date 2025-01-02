export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={'w-full flex flex-col items-start'}>{children}</main>
  );
}
