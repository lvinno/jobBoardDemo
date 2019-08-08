import React, { Component } from "react";
import JobInfoHeader from "../../components/JobInfo/JobInfoHeader"
import JobInfoContent from "../../components/JobInfo/JobInfoContent"


class JobInfoContainer extends Component {


	render() {
		return (
			<div>
				<JobInfoHeader />
				<JobInfoContent />
			</div>
		)
	}
}

export default JobInfoContainer;