import { Nav } from "./../Nav/index";

import { HeaderContainer, Container, Wrapper, Link, Span } from "./Styles";

export const Header = ({
  name = "Angel",
  hostname = "http://localhost:3000",
}) => {
  return (
    <HeaderContainer>
      <Container>
        <Wrapper>
          <div>
            <Link href={hostname}>
              <svg
                className="h-6 w-6 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Span>{name}</Span>
            </Link>
          </div>
          <Nav username={name}></Nav>
        </Wrapper>
      </Container>
    </HeaderContainer>
  );
};

// export const Header2 = ({
//   name = "Angel",
//   hostname = "http://localhost:3000",
// }) => {
//   return (
//     <header className="bg-white shadow border-t-4 border-green-600">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <a
//               className="flex items-center text-gray-800 hover:text-green-600"
//               href={hostname}
//             >
//               <svg
//                 className="h-6 w-6 sm:h-6 sm:w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               </svg>

//               <span className="mx-3 font-medium text-sm md:text-base">
//                 {name}
//               </span>
//             </a>
//           </div>
//           <Nav username={name} dark={true}></Nav>
//         </div>
//       </div>
//     </header>
//   );
// };

export default Header;
