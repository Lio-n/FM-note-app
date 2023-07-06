import styled from "styled-components";

const Wallpaper = styled.div`
  height: 20vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url(${({ theme }) => theme.background_image_mobile});

  @media (min-width: 375px) {
    background-image: url(${({ theme }) => theme.background_image_desktop});
  }
`;

export default Wallpaper;
