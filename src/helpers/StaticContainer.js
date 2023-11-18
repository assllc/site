import React from "react";
import tw from "twin.macro";

const StyledDiv = tw.div`p-8 m-0 overflow-hidden`;

function StaticContainer({children}) {
    return (
        <>
            {children}
        </>
    );
}

export default props => (
    <StyledDiv>
        <StaticContainer {...props} />
    </StyledDiv>
);