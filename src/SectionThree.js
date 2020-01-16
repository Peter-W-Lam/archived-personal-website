import React from "react"
import './SectionThree.css'
import ResumeCard from './ResumeCard'
class SectionThree extends React.Component {
    constructor() {
        super()
        this.state = {
            experience: 0
        }
    }
    render() {
        return(
            <div className="SectionThree">
                <div className="content">
                    <div className="section-heading-right">
                        <h1>My Experience</h1>
                        {/* <div className="buttons">
                            <button>All</button>
                            <button>Technical</button>
                            <button>Writing</button>
                        </div> */}
                    </div>
                    <section>
                        <h2 className="experience-header">Education</h2>
                        <ResumeCard title="Tufts University"
                                    subhead="Bachelor of Science, Computer Science and English"
                                    date="Sept. 2016 - May 2020"
                                    descr="GPA: 3.74"
                        />
                    </section>
                    <section>
                        <h2 className="experience-header">Technical Experience</h2>
                        <div className="cards">
                            <div className="column">
                                <ResumeCard title="Documentary Songwriters"
                                            subhead="Front-End Lead"
                                            date="Sept. 2019 - Present"
                                            descr="Student organization. Currently leading a small team to build the front-end interface of a web application in React.js for non-profit. Organizing timeline of development, as well as providing instruction and support to team members."
                                />
                                <ResumeCard title="Bookbuilding Workshops Inc."
                                            subhead="Web Design Freelancer"
                                            date="Aug. 2018 - July 2019"
                                            descr="Worked with client to set up a non-profit company for educational children's workshops. Designed, built, and maintained a Squarespace site with a payment platform, and provided quick tech support to both client and customers."
                                />
                            </div>
                            <div className="column">
                                <ResumeCard title="Laidlaw Foundation"
                                            subhead="UI/UX Designer and Researcher"
                                            date="May 2018 - Aug. 2019"
                                            descr="Led independent research team to design an iOS app to help treat symptoms of patients with binge eating disorder. Conducted research on gamification and user interface engagement, then translated results of research into mockups of app using Sketch. Held regular meetings with team to maintain progress, and then presented results at student research conference."
                                />
                                <ResumeCard title="AccuAssembly"
                                            subhead="C# Intern"
                                            date="May 2017 - Aug. 2017"
                                            descr="Learned C# and VB.Net to ship a plugin in the first three weeks. Adapted a managed .NET C# DLL to be called from unmanaged C++ code. Created a plugin to sync software results with a web server. "
                                />
                            </div>
                        </div>
                        
                        
                    </section>
                    <h2 className="experience-header">Additional Experience</h2>
                    <div className="cards">
                            <div className="column">
                                <ResumeCard title="Ploughshares"
                                            subhead="Editorial Intern"
                                            date="June 2019 - Aug. 2019"
                                            descr="Responded to queries from authors and submitters, sorted submissions, and conducted research for Editorial Assistants. Assisted in compiling statistics of submitters and subscribers"
                                />
                                <ResumeCard title="GrubStreet Inc."
                                            subhead="Young Adult Writer's Program Intern"
                                            date="June 2018 - Aug. 2018"
                                            descr="Tracked student information for over 200 teenage students. Provided support for instructors with curriculum development and events, often under urgent deadlines."
                                />
                            </div>
                            <div className="column">
                                <ResumeCard title="Tufts Digital Collections and Archives"
                                            subhead="Research Assistant"
                                            date="Sept. 2016 - Present"
                                            descr="Independently researching questions for library patrons, locating  primary sources to find answers to queries. Assisting with in ArchivesSpace, a digital archives management system."
                                />
                                <ResumeCard title="Tufts Daily"
                                            subhead="Contributing Writer + Graphic Designer"
                                            date="Sept. 2016 - Present"
                                            descr="Contributing reviews for the arts section of the paper, up-to-date with current releases. Additionally acted in past as section head for graphics section of the paper, creating infographics to help visualize data-heavy articles."
                                />
                            </div>
                        </div>
                    </div>   
            </div>
        )
    }
}

export default SectionThree