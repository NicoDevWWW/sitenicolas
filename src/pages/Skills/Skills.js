import React from "react";
import {Grid, Typography} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import '../Resume/Resume.css'
const Resume = () => {
	const itemsfront = resumeData.langages[0].array.map(item =>
		<div className={'item_skill'} key={item.title_front}>
			{item.icon_front}
			<div className={'item_skill_title'}>{item.title_front}</div>
		</div>
	);
	const itemsframework = resumeData.framework[0].array.map(item =>
		<div className={'item_skill'} key={item.title_fram}>
			{item.icon_fram}
			<div className={'item_skill_title'}>{item.title_fram}</div>
		</div>
	);
	const itemsdev = resumeData.dev[0].array.map(item =>
		<div className={'item_skill'} key={item.title_dev}>
			{item.icon_dev}
			<div className={'item_skill_title'}>{item.title_dev}</div>
		</div>
	);
	const itemssoftskills = resumeData.softskills[0].array.map(item =>
		<div className={'item_skill'} key={item.title_softskills}>
			{item.icon_softskills}
			<div className={'item_skill_title'}>{item.title_softskills}</div>
		</div>
	);
	return(
		<div className={'main_resume_content'}>
			<Grid container className={'section'}>
				<Grid item className={'section-title'}>
					<span></span>
					<Typography variant={'h6'}>Mes compétences</Typography>
				</Grid>
				<Grid item xs={12} className={'skills_container'}>
					{/*Langages*/}
					{Object.keys(resumeData.langages).map(skill => (
						<Grid item xs={12} sm={12} md={12} className={'skill_block'}>
							<Typography variant={'h6'}>{resumeData.langages[skill].title}</Typography>
							<div className={'grid_skills'}>
								{itemsfront}
							</div>
						</Grid>
					))}
					{/*Framework*/}
					{Object.keys(resumeData.framework).map(frames => (
						<Grid item xs={12} sm={12} md={12} className={'skill_block'}>
							<Typography variant={'h6'}>{resumeData.framework[frames].title}</Typography>
							<div className={'grid_skills'}>
								{itemsframework}
							</div>
						</Grid>
					))}
					{/*dev*/}
					{Object.keys(resumeData.dev).map(frames => (
						<Grid item xs={12} sm={12} md={12} className={'skill_block'}>
							<Typography variant={'h6'}>{resumeData.dev[frames].title}</Typography>
							<div className={'grid_skills'}>
								{itemsdev}
							</div>
						</Grid>
					))}
					{/*softskills*/}
					{Object.keys(resumeData.softskills).map(frames => (
						<Grid item xs={12} sm={12} md={12} className={'skill_block'}>
							<Typography variant={'h6'}>{resumeData.softskills[frames].title}</Typography>
							<div className={'grid_skills'}>
								{itemssoftskills}
							</div>
						</Grid>
					))}

				</Grid>
			</Grid>
		</div>
	)
}

export default Resume
