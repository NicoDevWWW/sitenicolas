import React from "react";
import {Grid, Icon, Paper, Typography} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {CustomTimelineSeparator} from "../../components/Timeline/Timeline";
import {FaGraduationCap, FaBriefcase} from "react-icons/all";
import '../Resume/Resume.css'
import {TimelineContent, TimelineItem} from "@material-ui/lab";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
const Resume = () => {

	return(
		<div className={'main_resume_content'}>
			<Grid container className={'section'}>
				<Grid item id={"resume_main"} className={'section-title'}>
					<span></span>
					<Typography variant={'h6'}>A propos</Typography>
				</Grid>
				<Grid item xs={12} className={'section_content'}>
					<Typography className={'about_me_text'}>{resumeData.about_1}</Typography>
					<Typography className={'about_me_text'}>{resumeData.about_2}</Typography>
					<Typography className={'about_me_text'}>{resumeData.about_3}</Typography>
					<Typography className={'about_me_text content_after'}>{resumeData.about_4}</Typography>
					<Typography className={'about_me_text'}>{resumeData.about_5}</Typography>
					<Typography className={'about_me_text'}>{resumeData.about_6}</Typography>
					<Typography className={'about_me_text'}>{resumeData.about_7}</Typography>
				</Grid>
			</Grid>
			<Grid container className={'section'}>
				<Grid item className={'section-title'}>
					<span></span>
					<Typography variant={'h6'}>Résumé</Typography>
				</Grid>
				<Grid item xs={12} className={'section_content work_school'}>
					<Grid container>
						<Grid item sm={12} md={6}>
							<CustomTimeline title='Expèriences professionnelles' icon={<FaBriefcase/>}>
								{resumeData.experiences.map(experience => (
									<TimelineItem>
										<TimelineSeparator className={'separator_padding'}>
											<TimelineDot variant={'outlined'} className={'timeline_dot'} />
											<TimelineConnector />
										</TimelineSeparator>
										<TimelineContent className={'timeline_content'}>
											<Typography className={'timeline_title'}>{experience.title}</Typography>
											<Typography variant='caption' className={'timeline_date'}>{experience.date}</Typography>
											<Typography variant='body' className={'timeline_description'}>{experience.description}</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
						<Grid item sm={12} md={6}>
							<CustomTimeline title='Formations' icon={<FaGraduationCap/>}>
								{resumeData.educations.map(education => (
									<TimelineItem>
										<TimelineSeparator className={'separator_padding'}>
											<TimelineDot variant={'outlined'} className={'timeline_dot'} />
											<TimelineConnector />
										</TimelineSeparator>
										<TimelineContent className={'timeline_content'}>
											<Typography className={'timeline_title'}>{education.title}</Typography>
											<Typography variant='caption' className={'timeline_date'}>{education.date}</Typography>
											<Typography variant='body' className={'timeline_description'}>{education.description}</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container className={'section'}>
				<Grid item className={'section-title'}>
					<span></span>
					<Typography variant={'h6'}>Loisirs</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container className={'container_services'}>
						{resumeData.services.map(service => (
							<Grid item xs={12} sm={6} md={2} className={'service'}>

								<div className={'service_content'}>
									<Icon className={'service_icon'}variant={'h6'}>{service.icon}</Icon>
									<Typography className={'service_title'} variant={'h6'}>{service.title}</Typography>
									<Typography className={'service_title'}>{service.description}</Typography>
								</div>

							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Resume
