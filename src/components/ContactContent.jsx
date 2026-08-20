import React, { useState } from 'react'

const ContactContent = () => {

    let [selected, setSelected] = useState("");
    let [open, setOpen] = useState(false);

    let options = [
        "Promote Articles on your Blog",
        "I have Question about your Website",
        "Affiliate Posts Related Question"
    ];

    return (
        <div className='bg-white p-10'>
            <div className='flex flex-col'>
                <div className='w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27234.8174265129!2d74.24114846076961!3d31.431970120685644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901080b110569%3A0x33b0fb0b941e5adf!2sWAPDA%20Town%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1787053226267!5m2!1sen!2s"
                        width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div>
                    <h2 className='text-4xl my-8 font-semibold'>Get In Touch With Us!</h2>
                    <p>Appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she.</p>
                </div>
                <div className='mt-12'>
                    <form action="">
                        <p className='py-1'>Email</p>
                        <input className='border border-gray-300 outline-none w-full h-10 rounded-sm px-2' type="email" />
                        <p className='py-1'>I want to speak about</p>
                        <div className='relative'>
                            <input className='border border-gray-300 outline-none w-full h-10 rounded-sm px-2 text-gray-500 text-[12px] cursor-default' type="text" value={selected} readOnly onClick={() => setOpen(!open)} />
                            {open && (
                                <div className=' border border-gray-500 absolute top-full left-0 bg-white w-full max-h-max'>
                                    {options.map((option, index) => (
                                        <div key={index} onClick={() => {
                                            setSelected(option);
                                            setOpen(false);
                                        }} className='p-2 hover:bg-blue-500 text-gray-500 text-[12px] hover:text-white cursor-default' >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <p className='py-1'>Message</p>
                        <textarea type="text" className='text-[12px] h-40 p-2 text-gray-500 border border-gray-300 w-full outline-none ' />
                        <button className='w-full h-10 bg-[#FF4C60] text-white text-lg py-2 mt-1 '>SUBMIT</button>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default ContactContent