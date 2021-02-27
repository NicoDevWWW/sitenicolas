import React, {useState} from "react";
import './Porfolio.css';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Dialog, DialogActions, DialogContent, DialogTitle,
	Grid,
	Grow,
	Tab,
	Tabs,
	Typography
} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Button/Button";
import { FaExternalLinkAlt} from "react-icons/all";

const Portfolio = () => {
	const [tabValue, setTabValue] = useState('All');
	const [projectDialog, setProjectDialog] = useState(false)
	return(

		<Grid container className={'section pb_45 pt_45'}>
			<Grid item className={'section-title'}>
				<span></span>
				<Typography variant={'h6'}>Portfolio</Typography>
			</Grid>
			<Grid item xs={12}>
				<Tabs value={tabValue}
					  indicatorColor='white'
					  className={'custom_tabs'}
					  onChange={(event, newValue) => setTabValue(newValue)}>
					<Tab label='All' value='All' className={
						tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'
						}
					/>
					{[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
						<Tab label={tag} value={tag}
							 indicatorColor='white'
							 onChange={(event, newValue) => setTabValue(newValue)}
							 className={
								 tabValue === tag ? 'customTabs_item active' : 'customTabs_item'
							 }
						/>
					))}
				</Tabs>
			</Grid>
				<Grid item xs={12} className={'container_projects'}>
					<Grid container spacing={2}>
						{resumeData.projects.map(project => (
							<>
							{tabValue === project.tag || tabValue === 'All' ? (
								<Grid item xs={12} md={6} className={'project_card'} spacing={16}>
									<Grow in timeout={1000}>
										<Card className={'customCard'} onClick={() => setProjectDialog(project)}>
											<CardActionArea>
												<CardMedia className={'customCard_image'} image={project.image} title={project.title}>
													<img className="img-fluid" src={project.image} alt={project.title} />
												</CardMedia>
												<CardContent>
													<Typography className={'customCard_title'}>{project.title}</Typography>
													<Typography variant='body2' className={'customCard_caption'}>{project.caption}</Typography>
													<Typography variant='body2' className={'customCard_date'}>{project.date}</Typography>
													{project?.technos?.map(techno => (
														<span className={'projectDialog_button'}>{techno.icon}</span>
													))}
												</CardContent>
											</CardActionArea>
										</Card>
									</Grow>
								</Grid>
							) : null}

							</>
						))}
					</Grid>
				</Grid>
				<Dialog className={'popup_container'} open={projectDialog} onClose={() => setProjectDialog(false)}>
					<DialogTitle className={'popup_title'}  onClose={() => setProjectDialog(false)}>
						{projectDialog.title}
					</DialogTitle>
					<img src={projectDialog.image} alt={projectDialog.title} className={'projectDialog_image'}/>
					<DialogContent className={'popup_content'} >
						<Typography  className={'projectDialog_description'}>{projectDialog.description}</Typography>
						<div className={'container_actions'}>
							{projectDialog?.links?.map(link => (
								<CustomButton text={link.text} icon={<FaExternalLinkAlt fontSize={'small'} />}>
									<a href={link.link} rel="noreferrer" target={"_blank"} className={'link_to_project'}>{link.text}</a>
								</CustomButton>
							))}
						</div>
					</DialogContent>
					<DialogActions  className={'projectDialog_actions'}>
						{projectDialog?.technos?.map(techno => (
							<span className={'projectDialog_button'}>{techno.icon}</span>
						))}
					</DialogActions>
				</Dialog>

		</Grid>

	)
}

export default Portfolio
