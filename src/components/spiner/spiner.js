import React from "react";
import Loader from "react-loader-spinner";
import styled from 'styled-components';

const SpinerBox = styled.div`
display: flex;
justify-content: center;
`;

export default function Spiner() {
    return (
      <SpinerBox>
        <Loader type="ThreeDots" color="#3142F5" height={80} width={80} />
      </SpinerBox>
    );
}