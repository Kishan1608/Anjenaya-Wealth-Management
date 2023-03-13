import React from "react";
import "./About.css";
import img1 from '../../assest/about-icon.svg';
import CheckIcon from '@mui/icons-material/Check';

const About = () => {
    return(
        <section id="about">
            <h1 className="about_header">Who we are</h1>
            <h4 className="about_subheader">Welcome to Anjenaya, a leading investment management firm dedicated to helping individuals and organizations achieve their financial goals. With years of experience and a proven track record of success, we are committed to providing our clients with the highest level of expertise, integrity, and personalized service.</h4>
            <div className="about_us">
                <div className="card">
                    <div className="content">
                        <br/>
                        Our team of highly skilled and knowledgeable investment professionals works closely with clients to understand their unique financial objectives, risk tolerance, and investment goals. We offer a comprehensive range of investment options, including stocks, bonds, mutual funds, and alternative investments, designed to deliver the optimal balance of returns and risk for each individual portfolio.
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src={img1} alt="404" height={300} width={300}/>
                    </div>
                    <div className="content">
                        Where banks give you just 5% returns , Our experts have given atleast <strong>15-18% return Pa</strong>                  
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <br/>
                        Our clients include: <br/> <br/> 
                        <CheckIcon/> Individuals <br/>
                        <CheckIcon/> Families <br/>
                        <CheckIcon/> Trusts <br/>
                        <CheckIcon/> Institutions <br/><br/>

                        If you're looking to grow and protect your wealth, we invite you to join the <strong>Anjenaya Investment</strong> community and discover the benefits of working with a trusted and experienced investment firm.   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;