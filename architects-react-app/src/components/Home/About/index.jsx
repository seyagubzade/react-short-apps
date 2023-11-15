import React from 'react'
import Employee from './Employee'
const employees = [
    {
        id: 1,
        name: "John Doe",
        title: "CEO & Founder",
        bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: "https://www.w3schools.com/w3images/team2.jpg"
    },
    {
        id: 2,
        name: "John Doe",
        title: "Architect",
        bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: "https://www.w3schools.com/w3images/team1.jpg"
    },
    {
        id: 3,
        name: "Jane Doe",
        title: "Architect",
        bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: "https://www.w3schools.com/w3images/team3.jpg"
    },
    {
        id: 4,
        name: "Mike Ross",
        title: "Architect",
        bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: "https://www.w3schools.com/w3images/team4.jpg"
    },
    
]

const About = () => {
    return (
        <>
            <div id="about" className="w3-container w3-padding-32">
                <h2 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className="w3-row-padding w3-grayscale">
                {employees.map(employee => {
                    return <Employee
                        id={employee.id}
                        name={employee.name}
                        title={employee.title}
                        bio={employee.bio}
                        img={employee.img}
                    />
                })}




            </div>
        </>
    )
}

export default About