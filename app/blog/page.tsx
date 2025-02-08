import Header from "../ui/Header";
import Footer from "../ui/Footer";

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact'},
];

export default function Page() {
  return (
    <>
      <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover overflow-hidden bg-beige flex-col justify-center min-h-screen py-6 sm:py-12">
        <Header title='Page title' navItems={navItems}/>
        <Footer socialIcons={[]} />
      </div>
    </>
  );
}
