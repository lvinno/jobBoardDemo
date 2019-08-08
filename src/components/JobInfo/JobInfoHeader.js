import React, { Component } from "react";
import './JobInfo.css'

class JobInfoHeader extends Component {


	render() {
		return (
			<div className='job-info-wrapper'>
                <div className='job-info-title'>
                    <p>Jobs Available</p>
                </div>
			</div>
		)
	}
}

export default JobInfoHeader;