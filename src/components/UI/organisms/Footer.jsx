import { Nav } from "./Nav/index";

export const Footer = ({ name = "Angel" }) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-600">&copy; {name}</div>
          </div>
          <Nav username={name} isDark={false}></Nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
