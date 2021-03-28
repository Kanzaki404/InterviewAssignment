import styled from "styled-components";

export const TypeButtonGroup = styled.div`
	

	margin-top: 10px;
    margin-bottom: 10px;
	.Cbtn {
	
		//background-color: ${(p) => p.type === '' ? 'Transparent' : 'rgba(255, 255, 255, 0.1)'};;
		border: 1px solid #c4c4c4;
		outline: none;
		height: 55px;
		width: 181px;
		color: #c4c4c4;
		font-size: 30px;
		font-weight: 200;
		font-family: "Quicksand", sans-serif;
		:hover {
			background-color: rgba(255, 255, 255, 0.1);
			cursor: pointer;
		}
	}
	.leftBtn {
		border-radius: 5px 0 0 5px;
		background-color: ${(p) => p.type !== 'C' ? 'Transparent' : 'rgba(255, 255, 255, 0.1)'};
	}
	.rightBtn {
		border-radius: 0 5px 5px 0;
		background-color: ${(p) => p.type !== 'F' ? 'Transparent' : 'rgba(255, 255, 255, 0.1)'};
	}
`;

export const AgeButtonGroup = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
	button {
		width: 110px;
		height: 55px;
		//background: Transparent;
		border: 1px solid #c4c4c4;
		outline: none;
        color: #c4c4c4;
		font-size: 30px;
		font-weight: 200;
		font-family: "Quicksand", sans-serif;
        border-radius: 5px;
		:hover {
			background-color: rgba(255, 255, 255, 0.1);
			cursor: pointer;
		}
        :nth-child(2){
            margin: 0 15px 0 15px;
        }
		
	}
	.btn1{
			background-color: ${(p) => p.age !== 0 ? 'Transparent' : 'rgba(255, 255, 255, 0.1)'};
		}
		.btn2{
			background-color: ${(p) => p.age !== 1 ? 'Transparent' : 'rgba(255, 255, 255, 0.1)'};
		}
		.btn3{
			background-color: ${(p) => p.age !== 2 ? 'Transparent' : 'rgba(255, 255, 255, 0.1)'};
		}
`;

export const HeightInput = styled.input`
        margin-top: 15px;
        background: Transparent;
		border: 1px solid #c4c4c4;
		outline: none;
		height: 55px;
		width: 360px;
		color: #c4c4c4;
		font-size: 24px;
		font-weight: 200;
        border-radius: 5px;
        display: block;
        padding-left: 20px;
        box-sizing: border-box;
`;

export const SubmitBtn = styled.button`

margin-top: 35px;
        background: Transparent;
		border: 1px solid #c4c4c4;
		outline: none;
		height: 55px;
		width: 360px;
		color: #c4c4c4;
		font-size: 24px;
		font-weight: 200;
        border-radius: 5px;
		:hover {
			background-color: rgba(255, 255, 255, 0.1);
			cursor: pointer;
		}
`;