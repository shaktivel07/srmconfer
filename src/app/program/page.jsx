import one from "../../assets/program/1.png";
import two from "../../assets/program/2.png";
import three from "../../assets/program/3.png";
import four from "../../assets/program/4.png";
import five from "../../assets/program/5.png";
import six from "../../assets/program/6.png";
import seven from "../../assets/program/7.png";
import eight from "../../assets/program/8.png";
import Image from 'next/image';

export default function page() {

    const tableCellStyle = "px-6 py-4 whitespace-nowrap font-semibold";
    const tableHeaderStyle = "px-6 py-3 text-left font-semibold text-neutral-200 text-lg uppercase tracking-wider border-b border-[#eeeeee2f]";

    const keyNoteSpeakers = [
        {
            name: "Xiaolei Wang",
            title: "Associate Professor",
            department: "Department of Electrical Engineer and Automation",
            university: "Aalto University, Finland",
            img: one
        },
        {
            name: "Mariofanna (Fanny) Milanova, IEEE Senior Member",
            title: "NVIDIA Deep Learning Instructor",
            position: "Fulbright Scholar and Professor",
            department: "Computer Science Department",
            university: "University of Arkansas",
            img: two
        },
        {
            name: "Xavier Fernando, PhD, P. Eng",
            title: "Professor",
            university: "Toronto Metropolitan University",
            img: three
        },
        {
            name: "Dr. Korhan Cengiz",
            title: "Senior Researcher",
            department: "Department of Information Technologies",
            faculty: "Faculty of Informatics and Management",
            university: "University of Hradec Kralove",
            location: "Kralove, 500 03, Czech Republic",
            img: four
        },
        {
            name: "Xiaohui Yuan, Ph.D.",
            title: "Associate Professor",
            department: "Department of Computer Science and Engineering",
            labDirector: "Computer Vision and Intelligent Systems Lab",
            university: "University of North Texas",
            img: five
        },
        {
            name: "Basim Alhadidi, PhD. Professor",
            department: "Department of Computer Information Systems",
            faculty: "Prince Abullah Bin Ghazi Faculty of Information and Communication Technology",
            university: "Al-Balqa Applied University",
            img: six
        },
        {
            name: "Prof. Olabiyisi Stephen Olatunde, PhD, MCPN, MNCS",
            title: "Professor of Computer Science",
            department: "Lautech Information Communication Technology Centre",
            img: seven
        },
        {
            name: "Dr. Lipo WANG",
            title: "Associate Professor",
            department: "School of Electrical and Electronic Engineering",
            university: "Nanyang Technological University",
            location: "Singapore",
            img: eight
        },
        {
            name: "Elpiniki I. Papageorgiou, PhD, MSc",
            title: "Professor in AI",
            department: "Energy Systems Department, University of Thessaly",
            location: "Gaiopolis Campus, GR-41500 Larissa, Greece",
            img: one
        },
        {
            name: "Yiu-Wing Leung",
            department: "Department of Computer Science",
            university: "Hong Kong Baptist University",
            location: "Kowloon Tong, Hong Kong",
            img: two
        },
        {
            name: "Chin-Shiuh Shieh (謝欽旭)",
            title: "Ph.D., Professor",
            department: "Department of Electronic Engineering",
            university: "National Kaohsiung University of Science and Technology",
            location: "No. 415, Jiangong Rd., Kaohsiung City 80778, Taiwan (R.O.C.)",
            img: three
        },
        {
            name: "Xiaohui Yuan, Ph.D.",
            title: "Associate Professor",
            department: "Department of Computer Science and Engineering",
            university: "University of North Texas",
            location: "P.O. Box 311366 Denton, TX 76203",
            img: four
        },
        {
            name: "Dr. Hadi Susanto",
            title: "Associate Professor",
            department: "Department of Electrical Engineering and Computer Science",
            university: "Khalifa University",
            location: "Abu Dhabi, UAE",
            img: five
        }
    ];

    const chiefPatrons = [
        { name: "Dr. R. Shivakumar", title: "Chairman", institution: "SRM Group of Educational Institutions (Ramapuram & Trichy Campus)" },
        { name: "Mr. S. Niranjan", title: "Co-Chairman", institution: "SRM Group of Educational Institutions (Ramapuram & Trichy Campus)" }
    ];

    const patrons = [
        { name: "Dr. N. Sethuraman", title: "Chief Director", institution: "SRM Group of Educational Institutions, Tiruchirappalli Campus" },
        { name: "Prof. Dr. Sameeruddin Khan", title: "Pro Vice Chancellor", institution: "SRM Group of Educational Institutions, Tiruchirappalli Campus" },
        { name: "Dr. R. Jagadeesh Kannan", title: "Dean - Faculty of Engineering and Technology", institution: "SRM Group of Educational Institutions" }
    ];

    const conferenceChair = [
        { name: "Dr. S. Kanaga Suba Raja", title: "Associate Dean & Professor", department: "Department of Computer Science and Engineering, SRM Institute of Science and Technology, Tiruchirappalli" }
    ];

    const organizingSecretary = [
        { name: "Dr. P. Shanmuga Sundari", title: "Assistant Professor", department: "School of Computing, SRM Institute of Science and Technology, Tiruchirappalli" },
        { name: "Dr. A. Kaliappan", title: "Associate Professor", department: "School of Computing, SRM Institute of Science and Technology, Tiruchirappalli" }
    ];

    const organizingChair = [
        { name: "Dr. R. Balaji Ganesh", qualification: "Head – AIML, Associate Professor", designation: "School of Computing" },
        { name: "Dr. R. Deebalakshmi", qualification: "Head - Cyber Security, Associate Professor", designation: "School of Computing" },
        { name: "Dr. S. Shanmuga Priya", qualification: "Associate Professor & Program Coordinator (AI & DS)", designation: "School of Computing" },
        { name: "Dr. P.Senthil Kumar", qualification: "Associate Professor", designation: "School of Computing" },
        { name: "Dr.R.Mallikka", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.K.R.Saranya", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.Siron Anita Susan", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.Guna Sundari", qualification: "Assistant Professor", designation: "School of Computing" }
    ];

    const publicationChairs = [
        { name: "Dr. A. Kaliappan", qualification: "Associate Professor", designation: "School of Computing" },
        { name: "Dr.P.Shanmuga Sundari", qualification: "Assistant Professor", designation: "School of Computing" }
    ];

    const technicalSupportCommittee = [
        { name: "Dr. Chitradevi D", qualification: "Associate Professor", designation: "School of Computing" },
        { name: "Dr. R. Sujarani", qualification: "Associate Professor", designation: "School of Computing" },
        { name: "Dr. N. Saranya", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr. Sheeba", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.Sakthivel", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.Naresh", qualification: "Assistant Professor", designation: "School of Computing" }
    ];

    const steeringCommittee = [
        { name: "Dr. Nagaraj", qualification: "Associate Professor", designation: "School of Computing" },
        { name: "Dr. V. Ramasamy", qualification: "Associate Professor", designation: "School of Computing" },
        { name: "Dr. Y. Suganya", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.Priyadarshini", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr. A.N. Gnana Jeevan", qualification: "Assistant Professor", designation: "School of Computing" }
    ];

    const websitePublicitySocialMediaChair = [
        { name: "Dr. Paulraja Singh", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr. M. Padmapriya", qualification: "Assistant Professor", designation: "School of Computing" }
    ];

    const financeChair = [
        { name: "Dr. K. Venkatesh Guru", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.Satheesh", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr. S.P. Ramya", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr. S. Aarthi", qualification: "Assistant Professor", designation: "School of Computing" }
    ];

    const registrationChair = [
        { name: "Dr.Joshphine Usha", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Ms. R.Sharanya", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.R.Sheeba", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Ms.Sasikala", qualification: "Assistant Professor", designation: "School of Computing" },
        { name: "Dr.Megala", qualification: "Assistant Professor", designation: "School of Computing" }
    ];

    const studentList = [
        "S MohanaKumar (II CSE C)",
        "AN Alagammai (II CSE C)",
        "Akash Sankar Chowdhury (III CSE)",
        "Shreya Mazumder (III CSE Al&ML)",
        "Samiksha Krishnasamy (II CSE A)",
        "Sri Ramaswamy S (II CSE A)",
        "Nithish Kumar N (II CSE A)",
        "Sanjay Raam VJ (II CSE A)",
        "Makeshwaran KP (II CSE A)",
        "R V Darsan (I Al&ML)",
        "Zian Surani (I Al&ML)",
        "Sandeep K (III CSE)",
        "Vignesh D (III CSE)",
        "ThirumukhilS P (III CSE)",
        "Jeyajeev V (III CSE)",
        "Shalini (II Al&ML)",
        "Laksharai Jha (II CSE A)",
        "Rishi Arun Kumar (II CSE A)",
        "Devi Nanda (III Al & ML)",
        "Suchi Pambhar (II CSE A)",
        "Amisha Kumari M (II CSE A)",
        "Karthik S (II CSE A)",
        "Priya R (II CSE A)",
        "Arun Kumar M (III CSE)",
        "Divya S (III CSE Al&ML)",
        "Ravi Kumar T (II CSE A)",
        "Sneha P (II CSE A)",
        "Venkatesh R (II CSE A)",
        "Anjali M (I Al&ML)",
        "Rahul K (I Al&ML)",
        "Meera S (III CSE)",
        "Kiran D (III CSE)",
        "Suresh P (III CSE)",
        "Latha V (III CSE)",
        "Nandini R (II Al&ML)",
        "Prakash J (II CSE A)",
        "Saranya K (II CSE A)",
        "Deepak N (III Al & ML)",
        "Pooja T (II CSE A)",
        "Ramesh M (II CSE A)"
    ];

    return (
        <div className="w-full mx-auto py-10 bg-gradient-to-r from-[#E29E03] to-[#214B9C] scroll-m-0" id="keynote">
            <div className='container flex flex-col justify-center text-white md:py-12 pb-12'>
                <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">KEYNOTE SPEAKERS</h1>
                <div className='flex flex-wrap justify-center items-center md:grid grid-cols-3 gap-y-10'>
                    {keyNoteSpeakers.map((person, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-8 justify-center items-center">
                                <Image src={person.img} className="w-[100px]" alt="person" />
                                <div className="text-center">
                                    <h3 className="text-sm md:max-w-[250px]">{person.name}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.title}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.department}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.university}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.location}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container text-white w-full overflow-x-auto pt-12 scroll-m-0" id="comittee">
                <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center uppercase">Organising Committee</h1>
                <div className="space-y-5">
                    <h2 className="text-xl font-bold mb-3">Chief Patrons:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {chiefPatrons.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.institution}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Patrons:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {patrons.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.institution}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Conference Chair:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {conferenceChair.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.department}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Organizing Secretary:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {organizingSecretary.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.department}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Organizing Chair(s):</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Qualification</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {organizingChair.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.qualification}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Publication Chairs:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Qualification</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {publicationChairs.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.qualification}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Technical Support Committee:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Qualification</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {technicalSupportCommittee.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.qualification}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Steering Committee:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Qualification</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {steeringCommittee.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.qualification}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Website Publicity/Social Media Chair:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Qualification</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {websitePublicitySocialMediaChair.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.qualification}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Finance Chair:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Qualification</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {financeChair.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.qualification}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Registration Chair:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Qualification</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {registrationChair.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.qualification}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='container text-white w-full overflow-x-auto py-12 scroll-m-0' id="organizers">
                <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center uppercase">Organising Committee (Students)</h1>
                <div className="flex flex-wrap justify-center">
                    {studentList?.map((student, index) => {
                        return (
                            <div key={index} className="w-full">
                                <div className=" rounded-lg shadow-lg">
                                    <div className="p-6">
                                        <h1 className="md:text-xl font-semibold">{student}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
