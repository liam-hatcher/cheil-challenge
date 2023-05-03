interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mx-80 px-12 h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 overflow-scroll">
      {children}
    </div>
  );
}

export default MainLayout;
