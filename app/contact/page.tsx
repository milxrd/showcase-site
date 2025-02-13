import Header from "../ui/Header";
import Footer from "../ui/Footer";

const pageTitle = "Page title";

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact'},
];

const author = "Full Name";

export default function Page() {
  return (
    <>
      <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover overflow-hidden bg-beige flex-col justify-center min-h-screen py-6 sm:py-12">
        <Header title={pageTitle} navItems={navItems}/>
        <Footer author={author} />
      </div>
    </> 
  );
}
