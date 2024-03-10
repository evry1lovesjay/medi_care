
const Footer= () => {

  return (
        <div className="h-full bg-neutral-900">
            <div className="text-gray-500 flex flex-col justify-center items-center text-center">
                <ul>
                        <li className="m-8">Services</li>
                        <li className="m-8">About Us</li>
                        <li className="m-8">Jobs</li>
                        <li className="m-8">Contact</li>
                        <li className="mb-8">FAQ</li>
                </ul>
            </div>

            <hr className="mx-8 border-gray-500" />

            <div className="text-center mt-4 text-gray-500 flex flex-col justify-center items-center">
                <span className="text-xs">© Copyright 2024 GuidedHand&#39;s Care Services - All Rights Reserved</span>
                <span>xxxxxxxxxxxxxxx</span>
            </div>
        </div>
  );
};

export default Footer;