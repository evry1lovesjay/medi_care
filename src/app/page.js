// "use client"

import Map from "@/components/Map/index"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className="bg-[#f5f5f5]">
        {/* Homepage image */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48" style={{ position: 'relative', width: 'auto', height: '70vh' }}>
            <Image
                src="/pexels-andrea-piacquadio-3768131.jpg"
                alt="Homepage image"
                sizes="1080px"
                fill
                priority
                style={{
                objectFit: 'cover',
                }}
            />
        </div>
    
    {/* Home Care services */}
    <div className="mt-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="">
            <span className="text-bold text-2xl flex justify-center font-bold mb-8 text-center">Home Care Services</span>
                <div className="flex flex-col justify-center items-center text-center md:flex-row mt-4 gap-4">
                    <div className="w-full bg-white rounded-lg shadow-md p-6 h-60 flex items-center justify-center">
                        <ul>
                            <li>
                                <span>Medication Reminders</span>
                            </li>
                            <li>
                                <span>Dressing and Grooming</span>
                            </li>

                            <li>
                                <span>Doctor Appointments</span>
                            </li>
                            <li>
                                <span>Errands and Outings</span>
                            </li>
                            <li>
                                <span>Extensive Personal Care</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-md p-6 h-60 flex items-center justify-center">
                        <ul>
                            <li>
                                <span>Hygiene and Bathing</span>
                            </li>
                            <li>
                                <span>Exercise and Activities of Daily Living</span>
                            </li>

                            <li>
                                <span>Hydration and Nutrition</span>
                            </li>
                            <li>
                                <span>Light Homemaking</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-md p-6 h-60 flex items-center justify-center">
                        <ul>
                            <li>
                                <span>Personalized Music Programming</span>
                            </li>
                            <li>
                                <span>Coordination with in-home medical services and Aging Life Care Professionals</span>
                            </li>
                        </ul>
                    </div>
                </div>
            <span className="hidden justify-center items-center text-center">Coordination with in-home medical services and Aging Life Care Professionals</span>
        </div>

        <div className="mt-8 text-justify">
            With <b>Guiding Hands Care Services</b>, you&#39;ll get the combined experience of people who&#39;ve been serving seniors in the ----- area for over ---- years. We will care for you and your loved ones like we would our own family. Contact us now to set up a complimentary evaluation.
        </div>
    </div>

    <div className="mt-16 h-96">
      <Map/>
    </div>
</div>
  )
}

export default Homepage
