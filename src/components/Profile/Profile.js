import React from "react";
import profileImage from '../../assets/images/Profile_Nicolas.jpg';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline'
import { FaUser} from "react-icons/all";
import "./Profile.css";
import resumeData from "../../utils/resumeData";
import {TimelineContent, TimelineItem} from "@material-ui/lab";
import {Typography} from "@material-ui/core";
import CustomButton from '../Button/Button'
import {FaDownload} from "react-icons/all";

const CustomTimelineItem = ({title, text, link}) => {
	return(
		<TimelineItem className="timeline_items">
			<CustomTimelineSeparator/>
			<TimelineContent className="timeline_content">

				{link ? (<Typography className="timelineItem_text">
					<span></span><a href={link} target="_blank">{text}</a>
				</Typography>):(
					<Typography className="timelineItem_text">{text}</Typography>
				)}
			</TimelineContent>
		</TimelineItem>
		)
}

const Profile = () => {
	return(
		<div className="profile container_shadow" >
			<div>
				<div className='profile_name'>
					<div className='name'>{resumeData.name}</div>
					<div className='title'>{resumeData.title}</div>
				</div>
				<figure className='profile_image'>
					<img src={profileImage} alt='Nicolas SQUEREN Cv' />
				</figure>
				<div className='profile_information'>
					<CustomTimeline icon={<FaUser/>} >
						<CustomTimelineItem title="Name" text={resumeData.name}/>
						<CustomTimelineItem title="Title" text={resumeData.birthday}/>
						<CustomTimelineItem title="Email" text={resumeData.email}/>
						{Object.keys(resumeData.socials).map(key =>(
							<CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link } />
						))}
					</CustomTimeline>
					<div className={'button_container'}>
						<CustomButton text={'Download Cv'} icon={<FaDownload fontSize={'small'} />} >my button</CustomButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile ;
