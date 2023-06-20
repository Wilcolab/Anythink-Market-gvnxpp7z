import styled from "styled-components";
const StyledBanner=({props})=>{
    const StyleBanner=styled.div`
background-color:${props.theme.dark}`;
    return(<StyleBanner>Nothing to mention here</StyleBanner>
)
}
export default StyledBanner;