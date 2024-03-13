const ServicesPage = () => {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Services</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service details */}
            <ServiceDetail
              title="Assistance at Home"
              description="We provide assistance for clients in their home, assisted living, or skilled facility. We will tailor a detailed program based upon the current needs and preferences of the client, and continuously adapt our care plan as the client’s needs evolve."
            />
            <ServiceDetail
              title="Comprehensive Evaluation"
              description="Our comprehensive evaluation addresses various aspects of caregiving including medication reminders, hygiene and bathing, dressing and grooming, hydration and nutrition, light homemaking, exercise and activities of daily living, doctor appointments, errands and outings, extensive personal care, dementia care experts, RN delegation, and coordination with in-home medical services and Aging Life Care Professionals."
            />
             <ServiceDetail
            title="Medication Reminders"
            description="Are medications being taken at the correct times, or at all? The #1 reason people move into facilities is inability to take medications per doctors’ orders. Our Caregivers can remind clients to take medications correctly, assist them to reorder, and pick up from the pharmacy. If family is unavailable to fill medication boxes, Guiding Hands Care Services can refer you to outside services for medication management and oversight."
            />
            <ServiceDetail
                title="Hygiene, Bathing, Dressing, Grooming, Exercise"
                description="As part of the initial evaluation, we will determine the client’s preferred routine for daily activities such as bathing, dressing, grooming and hygiene, at all levels, whether it be verbal reminders or extensive hands-on care. Because we are guests in our clients’ homes, we want to honor preferences, routines, and traditions, as maintaining a sense of normalcy is vital. Have there been, falls or trips to the ER? Let us help ensure that your loved one is maintaining day to day activities, and can remain safely at home. Caregivers could even assist clients to continue physical therapy exercises in order to maintain mobility and reduce the risk of falls."
            />
            <ServiceDetail
                title="Nutrition, Hydration and Homemaking"
                description="Are you concerned about special diet needs, weight loss following doctors’ orders? Our Caregivers can assist with the daily tasks of meal planning, preparation, fluid intake and ensuring a clean, healthy home environment. While we aren’t dieticians, we can follow basic dietary guidelines when preparing food like “no added salt”, “low carbohydrates”, fluid restrictions, or avoiding foods that are contraindicated with certain medications. We will also help with daily/weekly household chores like laundry, dishes, vacuuming, taking the garbage to the curb, etc. We believe that a healthy client needs a healthy environment."
            />
            <ServiceDetail
                title="Errands, Activities and Doctor Appointments"
                description="Let us help with grocery shopping (includes ordering curbside), trips to the pharmacy and physicians’ offices. We also provide assistance with errands, personal shopping, social outings, exercise routines and gym visits, club activities, movies, and other meaningful activities in the home. As appropriate, our Caregivers can even help facilitate virtual family visits for relatives."
            />
            <ServiceDetail
                title="Extensive Personal Care; Palliative Support"
                description="Depending on the physical needs of the client, their medical diagnoses, family support, and special requirements, NAME OF YOUR AGENCY will arrange for Caregivers who are appropriately skilled for your loved one’s care. We will always make sure that the scheduled Caregivers have an understanding of the medical concerns and the skill level to handle the care-tasks needed. Should your loved one be at the end of their journey, we are able to provide bed bound, total care with a gentle touch, and bring quality of life and compassion to every moment. Our goal is to allow loved ones to focus on their important family relationships, rather than the daily tasks involved in personal care."
            />
            <ServiceDetail
                title="Dementia/Alzheimer’s Care"
                description="At GUIDING HANDS CARE SERVICES, we know that when one is suffering from any type of dementia, the whole family is affected, and hiring professionals can be imperative to prevent safety concerns and family caregiver burnout. Behavioral issues are usually indicative of an unmet need. With our experience working in memory care settings, we have specially vetted Caregivers who can help meet that need. We’ll plan for activities and interventions that are appropriate for the level of dementia your loved one is in, and throughout the span of the disease process."
            />
            <ServiceDetail
            title="Coordination with in-home medical services and Aging Life Care professionals"
            description="We will work alongside hospice and home health to pick up care where they leave off and communicate concerns or changes in conditions to the appropriate agency representative. Should we identify the need for home nursing or therapy services, we will provide you with a short list of trusted agencies in town, which would be paid for by medical health insurance. During the evaluation, we may make recommendations for safety in the home like furniture adjustments, lighting, or clutter removal. If the client’s family lives out of town or needs more extensive oversight beyond the realm of home care, we will refer to Aging Life Care professionals to help the family manage any complex dynamics."
            />
            <ServiceDetail
                title="Nursing Home Care/Assisted Living Care/Memory Care/Hospital"
                description="COVID-19 Precautions put in place by the State may temporarily affect our ability to service your loved one in a facility. This is on a case-by-case basis, and NAME OF YOUR AGENCY Administration would be happy to discuss care needs with facility executives to come to an agreement that serves all involved. We will work alongside the facility staff to provide an enhanced quality of care for clients residing in a nursing home, assisted living or memory care community. Should this be temporary due to a hospitalization, change in condition, or adjustments to a new medication or a new environment, or if you wish to have one-on-one care with your loved one at any time, we will offer consistent staffing to give you additional peace of mind."
            />
            <ServiceDetail
                title="RN Delegated Services"
                description="With RN Delegation, our Caregivers are able to provide additional higher-tier, skilled services such as Medication Administration, Blood Glucose Monitoring, Non-sterile Dressing Changes and many other nursing-type tasks, as our staff are trained and overseen by a Registered Nurse. This allows your loved one to remain in their home environment and still receive most of the services normally provided in a nursing facility."
            />
          </div>
        </div>
      </div>
    );
  };
  
  const ServiceDetail = ({ title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

export default ServicesPage