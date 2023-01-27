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
    color: #00c8ff8d;
    text-shadow: 0 0 1px #4000ff97, 0 0 1px #1500ff7b;
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
