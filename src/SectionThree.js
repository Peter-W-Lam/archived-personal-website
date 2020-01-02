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
                                            descr="Through student organization JumboCode. Leading a small team of front-end developers."
                                />
                                <ResumeCard title="Bookbuilding Workshops Inc."
                                            subhead="Freelancer"
                                            date="Aug. 2018 - July 2019"
                                            descr="Lorem ipsizzle dolor shit the bizzle, fo adipiscing elizzle. Nullizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle crackalackin, cool volutpizzle, suscipit shut the shizzle up, for sure vel, yo. Pellentesque eget fo shizzle. Gangster erizzle. I'm in the shizzle izzle dolor dapibizzle turpis tempizzle tempor. Maurizzle pellentesque nibh check out this turpizzle. Its fo rizzle in rizzle."
                                />
                            </div>
                            <div className="column">
                                <ResumeCard title="Laidlaw Foundation"
                                            subhead="UI/UX Designer and Researcher"
                                            date="May 2018 - Aug. 2019"
                                            descr="Lorem ipsizzle dolor shit the bizzle, fo adipiscing elizzle. Nullizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle crackalackin, cool volutpizzle, suscipit shut the shizzle up, for sure vel, yo. Pellentesque eget fo shizzle. I'm in the shizzle izzle dolor dapibizzle turpis tempizzle tempor. Maurizzle pellentesque nibh check out this turpizzle. Its fo rizzle in rizzle."
                                />
                                <ResumeCard title="AccuAssembly"
                                            subhead="C# Intern"
                                            date="May 2017 - Aug. 2017"
                                            descr="Lorem ipsizzle dolor shit the bizzle, fo adipiscing elizzle. Nullizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle crackalackin, cool volutpizzle, suscipit shut the shizzle up, for sure vel, yo. Pellentesque eget fo shizzle."
                                />
                            </div>
                        </div>
                        
                        
                    </section>
                    <h2 className="experience-header">Additional Experience</h2>
                    <div className="cards">
                            <div className="column">
                                <ResumeCard title="Ploughshares"
                                            subhead="Editorial Intern"
                                            date="Sept. 2019 - Present"
                                            descr="Through student organization JumboCode. Leading a small team of front-end developers."
                                />
                                <ResumeCard title="GrubStreet Inc."
                                            subhead="Freelancer"
                                            date="Aug. 2018 - July 2019"
                                            descr="Lorem ipsizzle dolor shit the bizzle, fo adipiscing elizzle. Nullizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle crackalackin, cool volutpizzle, suscipit shut the shizzle up, for sure vel, yo. Pellentesque eget fo shizzle. Gangster erizzle. I'm in the shizzle izzle dolor dapibizzle turpis tempizzle tempor. Maurizzle pellentesque nibh check out this turpizzle. Its fo rizzle in rizzle."
                                />
                            </div>
                            <div className="column">
                                <ResumeCard title="Tufts Digital Collections and Archives"
                                            subhead="Research Assistant"
                                            date="Sept. 2016 - Present"
                                            descr="Lorem ipsizzle dolor shit the bizzle, fo adipiscing elizzle. Nullizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle crackalackin, cool volutpizzle, suscipit shut the shizzle up, for sure vel, yo. Pellentesque eget fo shizzle. I'm in the shizzle izzle dolor dapibizzle turpis tempizzle tempor. Maurizzle pellentesque nibh check out this turpizzle. Its fo rizzle in rizzle."
                                />
                                <ResumeCard title="Tufts Daily"
                                            subhead="Contributing Writer + Graphic Designer"
                                            date="May 2017 - Aug. 2017"
                                            descr="Lorem ipsizzle dolor shit the bizzle, fo adipiscing elizzle. Nullizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle crackalackin, cool volutpizzle, suscipit shut the shizzle up, for sure vel, yo. Pellentesque eget fo shizzle."
                                />
                            </div>
                        </div>
                    </div>   
            </div>
        )
    }
}

export default SectionThree