'use client'
import Icon, { Item } from '@/icons/icon';
import React from 'react'
import ProfileCard from './ProfileCard';






const About = () => {
    function calculateAge() {
        const today = new Date();
        const birthDate = new Date(2000, 4, 10); // May is month 4 (0-based index)
        let age = today.getFullYear() - birthDate.getFullYear();

        if (
            today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    }
    const arr: Item[] = [{ title: 'Details', icon: "gerb", description: `Ukranian, From Kiyv,  ${calculateAge()} years old, Currently leaving in Lohne(Oldenburg) Germany, Work Permit in European Union` }, {
        title: "Education", icon: "education", description: `  Finished high school,
                        Finished IT courses CyberBionic Systematics as React Front-end`, title2: 'Languages', languages: 'Ukrainian - Native, English - C1 or B2, Germany - B2'
    }, {
        title: 'Soft skills', icon: 'sociality', description: `Communication, Friendly, Hardworking, Problem-solving, Organizational, Adaptability, Willingness to learn `
    }]

    return (
        <div id="About" className="min-h-screen flex justify-center items-center flex-col text-white gap-2">
            <h2 className='my-5 text-4xl'>About</h2>
            <div className='grid w-[80%] grid-cols-1 items-center justify-center gap-10 md:gap-5  text-center md:grid-cols-3 md:text-1xl text-base'>
                {arr.map((e, index) => (<div key={index} className='min-h-[30vh] p-3 w-[100%] flex flex-col gap-2 my-0 border-1 border-[#242424] mx-auto'>
                    <div className='flex justify-center '>
                        <Icon type={e.icon} width={"50px"} height={"50px"} />
                    </div>
                    <h2 className='font-semibold'> {e.title}</h2>
                    <p className='text-wrap'>
                        {e.description.split(',').map((word, i) =>
                            <span className='block' key={i}>{word.trim()}</span>
                        )}
                    </p>
                    {e.title2 && e.languages && <div>
                        <h2 className='font-medium'>{e?.title2} </h2>

                        <p className='text-wrap'>
                            {e.languages.split(',').map((word, i) =>
                                <span className='block' key={i}>{word.trim()}</span>
                            )}
                        </p>
                    </div>}
                </div>))}
                <ProfileCard
                    name="Dmytro Tarasenko"
                    title="Software Engineer"
                    handle="Dmytro Tarasenko"
                    status="online"
                    contactText="Contact Me"
                    avatarUrl="/2.jpg"
                    iconUrl=" "
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
        </div>
    )
}

export default About