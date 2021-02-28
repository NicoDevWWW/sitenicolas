import React from "react";
import './contact.css'
import {Grid, TextField, Typography} from "@material-ui/core";
import CustomButton from "../../components/Button/Button";
import {FaDownload, FaEnvelope, FaLinkedin, FaMailBulk, FaPaperPlane} from "react-icons/all";

const Contact = () => {
	return(
		<div className={'main_contact'}>
			<Grid container className={'section'}>
				<Grid item xs={12} lg={12}>
					<Grid container>
						<Grid item className={'section-title'}>
							<span></span>
							<Typography variant={'h6'} >Contactez moi</Typography>
						</Grid>
					</Grid>
					<Grid item className={'container_contact_content'}>
							<Grid container spacing={5} className={"container_actions_contact"}>
								<Grid item xs={12} sm={6} className={'contact_item'}>
									<a href={"mailto:nicolas.squeren@gmail.com"}>
										<CustomButton text={'Par email'} icon={<FaPaperPlane fontSize={'small'} />} />
									</a>
								</Grid>
								<Grid item xs={12} sm={6} className={'contact_item'}>
									<a href={"https://www.linkedin.com/in/nicolas-squeren/"} target={"_blank"}>
										<CustomButton text={'Sur linkedin'} icon={<FaPaperPlane fontSize={'small'} />} />
									</a>
								</Grid>
							</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Contact
