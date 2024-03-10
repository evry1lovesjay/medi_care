"use client"
import Image from "next/image";
import Map from "./map";

const HomeCare= () => {

  return (
    <div>
        {/* Homepage image */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48" style={{ position: 'relative', width: 'auto', height: '60vh' }}>
            <Image
                src="/pexels-andrea-piacquadio-3768131.jpg"
                alt="Homepage image"
                sizes="300px"
                fill
                priority
                style={{
                objectFit: 'cover',
                }}
            />
        </div>
        
        {/* Home Care services */}
        <div className="mt-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <span className="text-bold text-2xl flex justify-center">Home Care Services</span>
                <div className="flex mt-4">
                    <div className="flex-1">
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
                            <li>
                                <span>RN Delegation</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-1 justify-end">
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
                            <li>
                                <span>Dementia Care Experts</span>
                            </li>
                            <li>
                                <span>Personalized Music Programming</span>
                            </li>
                        </ul>
                    </div>
                </div>
            <span className="flex justify-center">Coordination with in-home medical services and Aging Life Care Professionals</span>
        </div>

        <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-justify">
            With <b>Guided Hands Care services</b>, you&#39;ll get the combined experience of people who&#39;ve been serving seniors in the ----- area for over ---- years. We will care for you and your loved ones like we would our own family. Contact us now to set up a complimentary evaluation.
        </div>

        <div className="mt-16">
        {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
        <Map/>
        </div>
    </div>
    
  );
};

export default HomeCare;