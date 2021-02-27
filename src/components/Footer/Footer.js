import React from "react";
import '../../utils/resumeData'
import '../Footer/Footer.css'
import resumeData from "../../utils/resumeData";

const Footer = () => {
	return(
		<div className={'footer'}>
			<div className={'footer_right'}>{resumeData.site_date}</div>
			<div className={'footer_left'}>{resumeData.copyright}</div>
		</div>
	)
}

export default Footer ;
