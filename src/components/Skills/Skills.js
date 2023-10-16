// AboutMe.js
import React from 'react';
import './skills.css'
import SkillBox from './SkillBox';

const Skills = () => {
    return (
        <section id="skills" className='skills'>
            <h2 className='skills-title'>Skills</h2>
            <div className="container">
                <div className="row">
                    <div className='col-md-3'>
                        <SkillBox
                            title="Languages"
                            description="As a software engineer, I adeptly traverse various programming languages to engineer adaptable solutions. Python's clean syntax and broad libraries empower me 
                            to efficiently develop diverse software solutions. JavaScript takes the lead in crafting dynamic web experiences, while Java's object-oriented foundation remains a sturdy 
                            backdrop despite its reduced role in my current work. Moreover, my creative flair finds expression through Ruby's expressive syntax in personal projects, adding an 
                            experimental edge to my problem-solving toolkit."
                            technologies="Python, Javascript, Java, Ruby"
                            demoLink="https://example.com/demo"
                            codeLink="https://github.com/username/project2"
                        />
                    </div>
                    
                    <div className='col-md-3'>
                        <SkillBox
                            title="HTML/CSS"
                            description="In the realm of software engineering,, I frequently engage with web development technologies such as 
                            HTML, CSS, and various libraries. HTML serves as the foundation for structuring web content, allowing me to define the 
                            layout and hierarchy of elements on a webpage. CSS, on the other hand, empowers me to style and design these elements, ensuring a visually appealing and
                             consistent user experience across different devices."
                            technologies="Python, Flask, Mysql, Matlab"
                            demoLink="https://example.com/demo"
                            codeLink="https://github.com/username/project2"
                        />
                    </div>
                    <div className='col-md-3'>
                        <SkillBox
                            title="Databases"
                            description="Being a software engineer, I work with a range of databases: MySQL and PostgreSQL for relational data needs, 
                            DynamoDB for scalable and performant solutions, and MongoDB for flexible, unstructured data storage. Each database is chosen to match specific project requirements, 
                            ensuring efficient data management and optimal performance."
                            technologies="MySQL, PostgreSQL, DynamoDB, MongoDB"
                            demoLink="https://example.com/demo"
                            codeLink="https://github.com/username/project2"
                        />
                    </div>
                    <div className='col-md-3'>
                        <SkillBox
                            title="Tools"
                            description="I rely on a set of potent tools to drive my work. I use Redis for dynamic caching and Docker to streamline environment deployment. VMware helps me efficiently manage virtual infrastructure, 
                            while Kubernetes enables smooth application scaling. Jira and Trello are my go-to platforms for structured task and project management. I leverage SQLAlchemy to seamlessly integrate databases, and Terraform for 
                            consistent cloud deployments. With these tools, I tackle software challenges with precision and confidence."
                            technologies="Python, Flask, Mysql, Matlab"
                            demoLink="https://example.com/demo"
                            codeLink="https://github.com/username/project2"
                        />
                    </div>
                    <div className='col-md-3'>
                        <SkillBox
                            title="Testing"
                            description="I employ a suite of robust testing tools to ensure the reliability of my projects. unittest and pytest serve as my Python testing mainstays, enabling comprehensive unit and functional 
                            testing. Mocha steps in for JavaScript, providing a seamless testing framework. When working with Java, JUnit is my trusted companion for rigorous testing. Additionally, Selenium empowers me to 
                            automate browser testing, enhancing the overall quality of my software."
                            technologies="Python, Flask, Mysql, Matlab"
                            demoLink="https://example.com/demo"
                            codeLink="https://github.com/username/project2"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Skills;
