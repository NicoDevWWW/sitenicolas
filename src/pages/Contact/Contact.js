import React from "react";
import './contact.css'
import {Grid, TextField, Typography} from "@material-ui/core";
import CustomButton from "../../components/Button/Button";
import {useState} from "react";
import {useEffect} from "react";

const Contact = () => {
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if ( window.location.search.includes('success=true') ) {
			setSuccess(true);
		}
	}, []);
	return(
		<div className={'main_contact'}>
			<Grid container className={'section'}>
				<Grid item xs={12} lg={12}>
					<Grid container>
						<Grid item className={'section-title'}>
							<span></span>
							<Typography variant={'h6'} >Contactez moi</Typography>
						</Grid>
						{success && (
							<p style={{ color: "green" }}>Thanks for your message! </p>
						)}
					</Grid>
					<Grid item>
						<form
							name="contact"
							method="POST"
							data-netlify="true"
						>
							<input type="hidden" name="form-name" value="contact" />
							<Grid container spacing={5}>
								<Grid item xs={12} sm={6}>
									<TextField fullWidth name='name' label='Name'/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField fullWidth name='email' label='Email'/>
								</Grid>
								<Grid item xs={12} >
									<TextField fullWidth name='message' label='Message' multiline rows={4}/>
								</Grid>
								<Grid item xs={12}>
									<CustomButton text={'Envoyer'} type={"submit"}/>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Contact
