import React from 'react'
import emailjs from 'emailjs-com'

const SeniorStaff = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_q6tcg9f',
            'template_ts5ljey',
            e.target,
            'cl2fWxz7h1IGCC-wU'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <div className='flex flex-col justify-center items-center bg-blue-200 h-[100%] '>APPLICATION FOR EMPLOYMENT
            <div className='flex justify-center items-center w-[600px] h-full mt-[50px] mb-[50px] bg-white'>
                <form className='flex flex-col  w-[400px] self-start mb-[60px] mt-[60px] text-black ' onSubmit={sendEmail}>
                    <label htmlFor="fname" >Position for which application is made</label>
                    <input className='border border-black text-black' type="text" id="fname" name="Post" />
                    <label htmlFor="lname" className="mt-3">Institute</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Institute" />
                    <label htmlFor="fname" className="mt-3">Name</label>
                    <input className='border border-black text-black' type="text" id="fname" name="Name" />
                    <label htmlFor="lname" className="mt-3">Present Address</label>
                    <input className='border border-black text-black' type="text" id="lname" name="PAddress" />
                    <label htmlFor="fname" className="mt-3">Contact Address</label>
                    <input className='border border-black text-black' type="text" id="fname" name="CAddress" />
                    <label htmlFor="lname" className="mt-3">Telephone No</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Telephone" />
                    <label htmlFor="fname" className="mt-3">Nationality</label>
                    <input className='border border-black text-black' type="text" id="fname" name="Nationality" />
                    <label htmlFor="lname" className="mt-3">HomeTown(Give Address If Possible)</label>
                    <input className='border border-black text-black' type="text" id="lname" name="HomeTown" />
                    <label htmlFor="fname" className="mt-3">Place Of Birth</label>
                    <input className='border border-black text-black' type="text" id="fname" name="POB" />
                    <label htmlFor="lname" className="mt-3">Date Of Birth</label>
                    <input className='border border-black text-black' type="date" id="lname" name="DOB" />
                    <label htmlFor="fname" className="mt-3">Marital Status</label>
                    <input className='border border-black text-black' type="text" id="fname" name="Marital" />
                    <label htmlFor="lname" className="mt-3">Name of Wife/Husband</label>
                    <input className='border border-black text-black' type="text" id="lname" name="HWName" />
                    <label htmlFor="fname" className="mt-3">Children</label>
                    <input className='border border-black text-black' type="text" id="fname" name="Children" />
                    <label htmlFor="lname" className="mt-3">Father's Full Name</label>
                    <input className='border border-black text-black' type="text" id="lname" name="DadName" />
                    <label htmlFor="fname" className="mt-3">Father's Occupation/Profession</label>
                    <input className='border border-black text-black' type="text" id="fname" name="DadJob" />
                    <label htmlFor="lname" className="mt-3">Father's Nationality</label>
                    <input className='border border-black text-black' type="text" id="lname" name="DNationality" />
                    <label htmlFor="fname" className="mt-3">Father's Address</label>
                    <input className='border border-black text-black' type="text" id="fname" name="DAddress" />
                    <label htmlFor="lname" className="mt-3">Mother's Full Name</label>
                    <input className='border border-black text-black' type="text" id="lname" name="MomName" />
                    <label htmlFor="fname" className="mt-3">Mother's Occupation/Profession</label>
                    <input className='border border-black text-black' type="text" id="fname" name="MomJob" />
                    <label htmlFor="lname" className="mt-3">Mother's Nationality</label>
                    <input className='border border-black text-black' type="text" id="lname" name="MNationality" />
                    <label htmlFor="fname" className="mt-3">Mother's Address</label>
                    <input className='border border-black text-black' type="text" id="fname" name="MAddress" />
                    <label htmlFor="lname" className="mt-3">Name of Next of Kin</label>
                    <input className='border border-black text-black' type="text" id="lname" name="NextKin" />
                    <label htmlFor="fname" className="mt-3">Address of Next of Kin</label>
                    <input className='border border-black text-black' type="text" id="fname" name="AKin" />
                    <label htmlFor="lname" className="mt-3">Education</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Education" />
                    <label htmlFor="lname" className="mt-3">University Degree: (State Year, Subject, Class, Division and University in each case)</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Degree" />
                    <label htmlFor="lname" className="mt-3">Professional Qualifications</label>
                    <textarea className='border border-black text-black' type="text" id="lname" name="Qualification" />
                    <label htmlFor="fname" className="mt-3">Experience(State briefly nature of post-qualification experience providing dates
                        and salaries in each case and reasons for leaving each employment)</label>
                    <textarea className='border border-black text-black' type="text" id="fname" name="Experience" />
                    <label htmlFor="lname" className="mt-3">State present salary</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Salary" />
                    <label htmlFor="fname" className="mt-3">List of Publication</label>
                    <input className='border border-black text-black' type="text" id="fname" name="Publication" />
                    <label htmlFor="lname" className="mt-3">Referees(3 minimum; should include an HOD, one Lecturer and one Senior Officer)</label>
                    {/* <input className='border border-black text-black' type="text" id="lname" name="Referees" /> */}
                    <label htmlFor="fname" className="mt-3">Referee 1(Name,Address and Occupation)</label>
                    <textarea className='border border-black text-black' type="text" id="fname" name="Ref1" />
                    <label htmlFor="lname" className="mt-3">Referee 2(Name,Address and Occupation)</label>
                    <textarea className='border border-black text-black' type="text" id="lname" name="Ref2" />
                    <label htmlFor="fname" className="mt-3">Referee 3(Name,Address and Occupation)</label>
                    <textarea className='border border-black text-black' type="text" id="fname" name="Ref3" />
                    <label htmlFor="lname" className="mt-3">If appointed, how soon after notification of selection could you assume duty?</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Duty" />
                    <label htmlFor="lname" className="mt-3">Have you ever previously applied to the Council for Scientific and Industrial
                        Research for employment? </label>
                    <input className='border border-black text-black' type="text" id="lname" name="Prev" />
                    <label htmlFor="lname" className="mt-3">Have you ever suffered from any physical disability including nervous trouble
                        such as neurasthenia,nervous breakdown or strain?</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Suffered" />
                    <label htmlFor="lname" className="mt-3">Have you ever been convicted in a civil or miltary court?</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Convict" />
                    <label htmlFor="lname" className="mt-3">Are you bonded to serve in any other capacity? if so give details</label>
                    <input className='border border-black text-black' type="text" id="lname" name="Bonded" required />
                    <input className='border border-gray-600  mt-3 rounded-lg w-[100px]  cursor-pointer hover:bg-sky-200 justify-items-center' type="submit" value="Submit" />
                    <input className='border border-black text-black' type="file" id="lname" name="Prev" />
                </form>
            </div>

        </div>
    )
}

export default SeniorStaff