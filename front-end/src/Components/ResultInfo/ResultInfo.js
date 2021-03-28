import React from "react";
import * as s from './ResultInfo.Style'
function ResultInfo({ resultData }) {
	const empty = Object.keys(resultData).length !== 0;
	return (
		<React.Fragment>
			{empty ? (
				<s.ResultInfoContainer>
					<h2>Your desired ski length will be :</h2>
                    <h1>{resultData.length} cm</h1>	
				</s.ResultInfoContainer>
			) : null}
		</React.Fragment>
	);
}

export default ResultInfo;
