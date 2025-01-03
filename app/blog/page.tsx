import Footer from "../ui/Footer";
import Header from "../ui/Header";

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact'},
];

export default function Page() {
  return (
    <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover min-h-screen overflow-hidden bg-olive flex-col justify-center py-6 sm:py-12">
      <div className="relative text-black mx-2 px-6 pb-8 pt-10 sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md pb-16">
          <Header title='Page title' navItems={navItems}/>
        </div>
        <Footer socialIcons={[]} />
      </div>
    </div>
  );
}
