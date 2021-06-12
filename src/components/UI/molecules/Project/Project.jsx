import styled from "styled-components";
const theme = {
  twRingOffsetWidth: "0px",
  twRingOffsetColor: "#fff",
  twRingColor: "rgba(59, 130, 246, 0.5)",
  twRingOffsetShadow: "0 0 #0000",
  twRingShadow: "0 0 #0000",
  twShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  twBorderOpacity: "1",
  twBgOpacity: "1",
  textWhite: "rgba(255,255,255,1)",
  bgWhite: "rgba(255,255,255,1)",
  textGreen600: "rgba(5, 150, 105, 1)",
  textGray400: "rgba(156,163,175,1)",
  textGray600: "rgba(75,85,99,1)",
  textGray700: "rgba(55,65,81,1)",
  textGray800: "rgba(31,41,55,1)",
  bgGray900: "rgba(17,24,39,1)",
  bgGreen500: "rgba(16,185,129,1)",
};

const Container = styled.div`
  width: 100%;
  max-width: 20rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14rem;
  background-color: ${theme.bgWhite};
  border-bottom-width: 8px;
  border-radius: 0.375rem;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  height: 2rem;
`;

export const Project = ({ image, name, url }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <a
        href="#"
        className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <div className="py-2 px-3 text-center text-sm">
          <p className="text-gray-300">{name}</p>
          <span className="block text-gray-500 mt-2">{url}</span>
        </div>
      </a>
    </Container>
  );
};

export default Project;
