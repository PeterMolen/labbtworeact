import react from 'react'
import cvData from '../cvdata.json'
import './cvDisplay.css';


const CVDisplay=()=>{
    return(
        <div className="cv-container">
            {/* First row with two columns */}
            <div className="cv-column">
                
                {cvData.cvs.map((cv) => (
                    <div key={cv.cvData}>
                        <h2>{cv.personuppgifter}</h2>
                        <p><strong>Namn:</strong> {cv.name}</p>
                        <p><strong>Email:</strong> {cv.email}</p>
                        <p><strong>Telefon:</strong> {cv.phone}</p>
                    </div>
                ))}
            </div>
            <div className="cv-column">
                {cvData.cvs.map((cv) => (
                    <div key={cv.cvData}>
                        <h3>{cv.Arbetslivserfarenhet}</h3>
                        <p>{cv.job1.timeperiod}: {cv.job1.jobtitle}</p>
                        <p>Företag: {cv.job1.company}</p>
                        <p>Stad: {cv.job1.city}</p>
                        <br/>
                        <p>{cv.job2.timeperiod}: {cv.job2.jobtitle}</p>
                        <p>Företag: {cv.job2.company}</p>
                        <p>Stad: {cv.job2.city}</p>
                    </div>
                ))}
            </div>

            {/* Second row with two columns */}
            <div className="cv-column">
            <p>_______________________________________________________________</p>
                {cvData.cvs.map((cv) => (
                    <div key={cv.cvData}>
                        <h3>{cv.Profile}</h3>
                        <img src={cv.profilepic.image} alt="Profilbild" style={{ width: "290px", height: "auto" }}/>
                    </div>
                ))}
            </div>
            <div className="cv-column">
            <p>_______________________________________________________________</p>
                {cvData.cvs.map((cv) => (
                    <div key={cv.cvData}>
                        <h3>{cv.Courses}</h3>
                        <p>{cv.course1.timeperiod}: {cv.course1.ctitle}</p>
                        <p>Skola: {cv.course1.school}</p>
                        <p>Stad: {cv.course1.city}</p>
                        <br/>
                        <p>{cv.course2.timeperiod}: {cv.course2.ctitle}</p>
                        <p>Skola: {cv.course2.school}</p>
                        <p>Stad: {cv.course2.city}</p>
                        <br/>
                        <p>{cv.course3.timeperiod}: {cv.course3.ctitle}</p>
                        <p>Skola: {cv.course3.school}</p>
                        <p>Stad: {cv.course3.city}</p>
                        <br/>
                        <p>{cv.course4.timeperiod}: {cv.course4.ctitle}</p>
                        <p>Skola: {cv.course4.school}</p>
                        <p>Stad: {cv.course4.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CVDisplay