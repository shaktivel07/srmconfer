import Image from 'next/image'
import landingBg from "../../assets/about/landing-bg.jpg";
import tick from "../../assets/icons/tick.svg";
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Inter({ subsets: ["latin"], weight: ["600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function page() {
    return (
        <div className='flex flex-col w-full'>
            <div className='h-[30vh] md:h-[50vh] overflow-hidden'>
                <Image src={landingBg} alt='bg' className='w-full object-cover h-full' />
            </div>
            <div className='md:py-12 pb-8 pt-8 space-y-12 px-6 md:px-20'>
                <div>
                    <h2 className={cn('text-2xl md:text-3xl text-blue-900 font-semibold pb-4 ', font.className)}>About Our University:</h2>
                    <p className={cn("leading-loose", poppins.className)}>SRM Institute of Science and Technology - Tiruchirapalli, offers a wide range of undergraduate, graduate, and doctorate programmes in six faculties: engineering and technology, management, medicine and health sciences, science and humanities, law, and agricultural sciences. Its campuses are located in and around Chennai, Tiruchirappalli (in TN), Modinagar (in UP), and Sonepat (in Haryana). All of these locations are close to Delhi NCR, Amaravati (in AP), and Gangtok (in Sikkim). SRMIST stands as a beacon of knowledge, innovation, and excellence, shaping the minds of future leaders through world-class education and global exposure. The institution is accredited with NAAC A++ and holds UGC Category 1 status, and has been consistently featured in the NIRF 2023 rankings among top universities in India, as well as in highly reputed global listings such as the QS World University Rankings 2023, Times Higher Education (THE) World Rankings 2023, Shanghai World Rankings 2023, and the Nature Index 2023. The institution provides a vibrant and inclusive campus life, encouraging students to explore creativity, research, and leadership beyond the classroom. With international collaborations, advanced laboratories, and experienced faculty members, SRMIST empowers its students to stay ahead in a rapidly evolving technological world. Renowned for its strong placement record and focus on holistic growth, SRMIST continues to inspire learners to ‘Learn, Leap, and Lead’ with confidence and purpose.</p>
                </div>
                <div>
                    <h2 className={cn('text-2xl md:text-3xl text-blue-900 font-semibold pb-4 ', font.className)}>About the Department of Computer Science and Engineering:</h2>
                    <p className={cn("leading-loose", poppins.className)}>The department of Computer Science and Engineering at SRM Institute of Science and Technology, Tiruchirappalli was established in the year 2021 to give standard education to the students and help them reach their full potential. The department strives to achieve its key objectives by providing top-notch IT infrastructure, creating a world-class environment for learning and research, collaborating with industry leaders to adopt industry best practices, and promoting moral and ethical values. The experienced faculty finds it easier to produce top-notch engineers due to the students&apos; promptness to learn, resulting in their recruitment by prestigious companies worldwide. The department&apos;s renowned undergraduate education is complemented by its emphasis on innovation and research-driven learning, encouraging students to explore modern technologies such as Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, and Internet of Things (IoT). Through project-based learning and real-time applications, students gain hands-on experience that builds both creativity and confidence.</p>
                </div>
                <div>
                    <h3 className={cn('text-3xl  font-semibold pb-4', font.className)}>Vision</h3>
                    <p className={cn("flex gap-3", poppins.className)}><Image src={tick} alt='-' className='size-7' />The department&apos;s primary goal is to provide quality education in computer science and engineering and produce highly competent engineers who can serve society on a global level.</p>
                </div>
                <div>
                    <h3 className={cn('text-3xl  font-semibold pb-4', font.className)}>Mission</h3>
                    <p className={cn("flex gap-3", poppins.className)}><Image src={tick} alt='-' className='size-7' />Our goal is to provide industry-oriented training that prepares our graduates for real-world challenges,while also emphasising the need for ethical conduct and social responsibility.</p>
                </div>
            </div>
        </div>
    )
}
