import React, { Component } from "react";
import {callUserData} from '../../api/'
import JobInfoCard from './Card/JobInfoCard'
import { message } from "antd";

class JobInfoContent extends Component {
    constructor(props){
        super(props)
        this.state={
            jobsData:[]
        }
    }

	render() {
        const {jobsData} = this.state    
		return (
			<div className='job-content-wrapper'>
                {jobsData.map(jobInfo=>{
                    return <JobInfoCard key={jobInfo.jobId} jobInfo={jobInfo}/>
                })}
			</div>
		)
    }
    
    componentDidMount(){
        callUserData().then(res=>{
            const jobsData = res;
            this.setState({jobsData})
        })
        .catch(err=>{
            message.error(err)
        })
    }
}

export default JobInfoContent ;