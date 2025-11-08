import Image from "next/image";
import date from "../../assets/icons/date.svg";

export default function EventDates() {
    return (
        <div className="flex flex-col items-center justify-center md:justify-around gap-8 py-6 scroll-m-20" id="dates">
            <div className="flex justify-center items-center gap-5 -ml-20">
                <Image src={date} alt="date" />
                <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">KEY <span className="text-yellow">DATES</span></h1>
            </div>
            <div className="flex flex-col gap-6 px-5 py-6 md:px-0 md:py-0">
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">1</span><p>Full Length Paper Submission: <span className="font-semibold">April 15, 2026</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">2</span><p>Acceptance Notification: <span className="font-semibold">May 15, 2026</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">3</span><p>Early Registration: <span className="font-semibold">June 5, 2026</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">4</span><p>Late Registration: <span className="font-semibold">June 30, 2026</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">5</span><p>Camera Ready Submission: <span className="font-semibold">July 10, 2026</span></p></div>
            </div>
        </div>
    )
};