import React from "react";

const foot = {
    backgroundColor:'#21304a',
    height:'80px',
    color: '#2fc3b6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
function FooterR(props) {

    return(
        <div style={foot}>
            <p>Powered by: Paps21</p>
        </div>
    )
};
export default FooterR