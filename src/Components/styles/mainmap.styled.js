import styled from "styled-components";
const MapStyling = styled.div`
  .upperDiv {
    position: absolute;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .name {
    font-size: 25px;
    color: #00331b;
    text-shadow: 0 0 3px #00c3ff7b, 0 0 2px #05ff374f;
  }
  .map-container-div {
    position: relative;
    z-index: 0;
  }
  .icons{
    font-size: 20px;
  }
  @media(max-width:600px) {
    .name{
        font-size: 20px;
    }
    .icons{
        font-size: 15px;
    }
  }
`;
export default MapStyling;
