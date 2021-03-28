import React,{useState} from "react";
import * as s from "./LandingPage.style";
import UserInputForm from "../../Components/UserInputForm/UserInputForm"
import ResultInfo from '../../Components/ResultInfo/ResultInfo'
import {RequestAnswer} from '../../utils/apiCall'
function LandingPage() {
    const [type, setType] = useState('') //ski type classic (C) or Freestyle (F)
    const [age, setAge] = useState(null) //age 0-4 (0), 5-8 (1) and 8+ (2)
    const [height, setHeight] = useState('') // height in cm
    const [resultData, setResultData] = useState({})
    let data = {}
    async function GetAnswer(){
        data.type = type;
        data.age = age;
        data.height = height;
        
        const response = await RequestAnswer(data); // call the api from util folder
      
        if(response.status === 200){ 
            const result = await response.json(); //if 200 get the data from the redableStream
            setResultData(result)
            clearInputs(); //clears the userInput
        }else{           
            alert('Something went wrong')
            clearInputs()
        }
    }
    function clearInputs(){
        setType('')
        setAge(null)
        setHeight('')
    }

	return (
		<s.LandingPageContainer>
			<s.UpperBlock>
				<h1>Choose the right length for your skis</h1>
			</s.UpperBlock>
			<s.LowerBlock>
				<s.userInputArea>
					<UserInputForm 
                        type={type}
                        age={age}
                        setType={setType}                    
                        setAge={setAge}
                        setHeight={setHeight}
                        height={height}
                        GetAnswer={GetAnswer}
                    />
				</s.userInputArea>
				<s.resultArea>
                    <ResultInfo resultData={resultData}/>
                </s.resultArea>
			</s.LowerBlock>
		</s.LandingPageContainer>
	);
}

export default LandingPage;
