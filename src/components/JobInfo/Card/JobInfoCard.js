import React, { Component } from "react";
import moment from 'moment';
import {Row,Col} from 'antd';
import 'moment-timezone';

const options = {  weekday: 'short', month: 'short', day: 'numeric' };

class JobInfoCard extends Component {
    constructor(props){
        super(props)
        this.state={
            formattedShifts:[],
            jobStart:'',
            jobEnd:''
        }
    }

	render() {
        const {title,wagePerHourInCents,company,branch,branchPhoneNumber} = this.props.jobInfo
        const {formattedShifts,jobStart,jobEnd} = this.state;
		return (
			<div className='job-card-wrapper'>
                <div className='job-card-top'>
                    <div className='job-card-icon'>
                        <img alt="job-card-icon" src={company.logo}/>
                    </div>
                    <div className='job-card-company-details'>
                        <p id='job-card-company-details-title'>{title}</p>
                        <p>{company.name}</p>
                        <p>{wagePerHourInCents}</p>
                        <p id='job-card-company-details-span'>{`${jobStart} - ${jobEnd}`}</p>
                    </div>
                    <div className="job-card-working-span-wrapper">
                        <p>If you take this job you are agreeing to work ALL DAYS</p>
                        <div id="job-card-working-span-shifts">
                            {formattedShifts.map(shift=>{
                                let date = moment(shift[0]).tz("Australia/Sydney").format('ddd MMM D hh:mm a z')
                                let dateArr = date.split(' ');
                                return (
                                    <Row key={date}>
                                        <Col span={3}><p>{dateArr[0]},</p></Col>
                                        <Col span={3}><p>{dateArr[1]}</p></Col>
                                        <Col span={3}><p>{dateArr[2]}</p></Col>
                                        <Col span={3}><p>{dateArr[3]}</p></Col>
                                        <Col span={3}><p>{dateArr[4]}</p></Col>
                                        <Col span={3}><p>{dateArr[5]}</p></Col>
                                    </Row>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='job-card-location'>
                    <p>Location</p>
                    <p id="job-card-location-address">{company.address}</p>
                </div>
                <div className='job-card-branch'>
                    <p>Branch</p>
                    <p>{branch}</p>
                    <p id="job-card-branch-number">{branchPhoneNumber}</p>
                </div>
                <div className="job-card-bottom-wrapper">
                    <div className="job-card-button">NO THANKS</div>
                    <div className="job-card-button">I'LL TAKE IT</div>
                </div>
			</div>
		)
    }
    componentDidMount(){
        const {shifts} = this.props.jobInfo
        let formattedShifts = shifts.map(shift=>{
            let [start,end] = [
                new Date(shift.startDate),
                new Date(shift.endDate)
            ]
            return [start,end]
        })
        let jobStart = formattedShifts[0][0].toLocaleDateString('en-us', options);
        let jobEnd = formattedShifts[formattedShifts.length-1][0].toLocaleDateString('en-us', options);
        this.setState({formattedShifts,jobStart,jobEnd})
    }
}

export default JobInfoCard;