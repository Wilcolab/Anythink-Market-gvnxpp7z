import styled from "styled-components";
const StyledBanner=({props})=>{
    const StyleBanner=styled.div`
background-color:${props.theme.dark}`;
    return(<StyleBanner></StyleBanner>
)
}
export default StyledBanner;