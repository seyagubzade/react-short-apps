import React from 'react'
import Project from './Project'


const Projects = () => {
    const projects = [
        {
            id: 1,
            img: "https://www.w3schools.com/w3images/house3.jpg",
            title: "Summer House"
        },
        {
            id: 2,
            img: "https://www.w3schools.com/w3images/house2.jpg",
            title: "Brick House"
        },
        {
            id: 3,
            img: "https://www.w3schools.com/w3images/house2.jpg",
            title: "Renovated"
        },
        {
            id: 4,
            img: "https://www.w3schools.com/w3images/house4.jpg",
            title: "Barn House"
        },
       
    ]
    
    return (
        <div>
            <div id="projects" className="w3-container w3-padding-32">
                <h2 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h2>
            </div>

            <div className="w3-row-padding">
                {projects.map(project=>{
                    return <Project id={project.id} img={project.img} title={project.title} />
                })}
                
            </div>
        </div>
    )
}

export default Projects