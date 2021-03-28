import React from 'react'
import * as s from './UserInputForm.Style'
function UserInputForm(props) {
    const {setAge,setType,setHeight,height,GetAnswer,type,age} = props;

    
    return (
        <React.Fragment>
            <label>Type:</label>
					<s.TypeButtonGroup type={type}>
						<button className="Cbtn leftBtn" onClick={()=> setType('C')}>Classic</button>
						<button className="Cbtn rightBtn" onClick={()=> setType('F')}>Freestyle</button>
					</s.TypeButtonGroup>
                    <label>Age:</label>
					<s.AgeButtonGroup age={age}>
						<button className="btn1" onClick={()=> setAge(0)}>0-4</button>
						<button className="btn2" onClick={()=> setAge(1)}> 5-8</button>
                        <button className="btn3" onClick={()=> setAge(2)}>8+</button>
					</s.AgeButtonGroup>
                    <label>Height:</label>
                    <s.HeightInput 
                        placeholder="Height in cm"
                        value={height}
                        onChange={(e)=> setHeight(e.target.value)}
                    />
                    <s.SubmitBtn onClick={GetAnswer}>Submit</s.SubmitBtn>
        </React.Fragment>
    )
}

export default UserInputForm
