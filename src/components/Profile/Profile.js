import React from "react";
import profileImage from '../../assets/images/Profile_Nicolas.jpg';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline'
import { FaUser} from "react-icons/all";
import "./Profile.css";
import resumeData from "../../utils/resumeData";
import {TimelineContent, TimelineItem} from "@material-ui/lab";
import {Typography} from "@material-ui/core";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";

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
						<CustomTimelineItem title="Title" text={resumeData.car}/>
						{Object.keys(resumeData.socials).map(key =>(
							// <CustomTimelineItem  key={resumeData.socials[key].text}  title={key} text= link={resumeData.socials[key].link }
							//  class='profile_link'
							// />
							<TimelineItem className={"custom_timeline_link"}>
							<TimelineSeparator className={'separator_padding'}>
							<TimelineDot variant={'outlined'} className={'timeline_dot'} />
							<TimelineConnector /></TimelineSeparator>
							<TimelineContent className={'timeline_content'}>
								<a  href={resumeData.socials[key].link } className={'timeline_link_profile'}>
									<Typography className={'profile_link_title timelineItem_text'}>{resumeData.socials[key].text}
										<span className={'profile_icon_title timelineItem_text'}>{resumeData.socials[key].icon}</span>
									</Typography>
								</a>
							</TimelineContent>
							</TimelineItem>
						))}
					</CustomTimeline>

					{/*<div className={'button_container'}>*/}
					{/*	<CustomButton text={'Download Cv'} icon={<FaDownload fontSize={'small'} />} ></CustomButton>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	)
}

export default Profile ;
