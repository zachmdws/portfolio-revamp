import React from "react";

function FooterLinks() { 
    return(
        <div>
        <a href="https://github.com/zachmdws" >
                <img className ="footerImg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo" style={{height: "55px", borderRadius: "50%", marginRight: "15px"}}/>
            </a>
            <a href="https://www.linkedin.com/in/zachary-meadows-102681145/" >
                <img className ="footerImg" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="LinkedIn Logo" style={{height: "55px"}}/>
            </a>
            </div>
    )
}

export default FooterLinks