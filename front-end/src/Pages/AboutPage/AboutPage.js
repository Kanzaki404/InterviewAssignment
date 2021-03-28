import React from 'react'
import * as s from './About.Style'
function AboutPage() {
    return (
        <s.AboutPageContainer>
        <h3>Hello, Here is my interview assignment,<br/> created using React and Express(NodeJS).</h3>
          <p> For the front-end I used the following:</p>
           <ul>
               <li>React</li>
               <li>Styled-Components</li>
               <li>React-router-dom</li>
               <li>Media Query (minimal responsivness)</li>
           </ul>
           <p> For the back-end I used the following:</p>
           <ul>
               <li>NodeJs</li>
               <li>Express</li>
               <li>esm</li>
           </ul>
        </s.AboutPageContainer>
    )
}

export default AboutPage
