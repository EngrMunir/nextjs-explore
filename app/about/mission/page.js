import React from 'react';
import profile from "@/public/images/prof.jpeg";
import Image from 'next/image';
const MissionPage = () => {
    return (
        <main className='mt-10'>
            <div>
                This is MissionPage
            </div>
            <Image src={profile} alt='profile'/>
        </main>
    );
};

export default MissionPage;