import { MdArrowDropDown } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#212731]">
      <footer className="footer p-10 text-[#c6cbcf] items-center container mx-auto md:px-10 bg-[#212731]">
        <nav>
          <h6 className="footer-title uppercase text-white">Cetogories</h6>
          <a className="link link-hover">Web Builder</a>
          <a className="link link-hover">Hosting</a>
          <a className="link link-hover">Data Center</a>
          <a className="link link-hover">Robotic-Automation</a>
        </nav>
        <nav>
          <h6 className="footer-title uppercase text-white">Contact</h6>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms Of Service</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <a className="link link-hover flex gap-3">United States <MdArrowDropDown></MdArrowDropDown></a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
