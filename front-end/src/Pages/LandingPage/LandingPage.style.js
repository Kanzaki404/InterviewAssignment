import styled from "styled-components";

export const LandingPageContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 50px;
	box-sizing: border-box;
    @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const UpperBlock = styled.div`
	
	height: 10%;
	h1 {
		color: white;
		font-family: "Quicksand", sans-serif;
		font-weight: 100;
		font-size: 3em;
	}
    @media (max-width: 700px) {
        margin-top: 60px;
        h1{
            font-size: 2em;
        }
  }
    
`;
export const LowerBlock = styled.div`
	display: flex;
	width: 100%;
	height: 89%;
    @media (max-width: 700px) {
    display: block;
  }
`;

export const userInputArea = styled.div`
	label {
		font-size: 17px;
		font-family: "Quicksand", sans-serif;
		color: #c4c4c4;
        
	}
    
	
	flex: 1;
	height: 50%;
    min-width: 600px;
`;

export const resultArea = styled.div`
	
	flex: 1;
	height: auto;

    
`;
