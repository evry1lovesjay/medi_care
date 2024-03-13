import Image from "next/image";
import Link from 'next/link';

const Footer= () => {

  return (
        <div className="h-full bg-[#243928]">
            <div className="text-[#91a663] flex flex-col justify-center items-center text-center">
                <ul>
                        <li className="m-8">Services</li>
                        <li className="m-8">About Us</li>
                        <li className="m-8">Jobs</li>
                        <li className="m-8">Contact</li>
                        <Link href="/faqs">
                            <li className="mb-4">FAQ</li>
                        </Link>
                </ul>
            </div>

            <hr className="mx-8 border-gray-500" />

            <div className="text-center mt-2 pb-2 text-gray-500 flex flex-col gap-3 justify-center items-center">
                <span className="text-xs">© Copyright 2024 Guiding Hand&#39;s Care Services - All Rights Reserved</span>
                <Image src="/facebook-svgrepo-com.svg" alt="facebook logo" width={30} height={30} className="bg-[#91a663] rounded-full"/>
            </div>
        </div>
  );
};

export default Footer;