import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
// import { BsDownload, BsFillPersonLinesFill } from 'react-icons/bs'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com/in/gaurav-kanwat/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/gauravkanwat',
        },
        {
            id: 3,
            child: (
                <>
                Twitter <FaTwitter size={30} />
                </>
            ),
            href: 'https://twitter.com/Kanwat_Gaurav1',
        },
        {
            id: 4,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:gauravkanwat99@gmail.com',
        },
        {
            id: 5,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id, child, href, style, download}) => (
                    <li key={id}
                    // eslint-disable-next-line
                    className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 ml-[-100px]' + " " + style}>
                    <a 
                    href={href} 
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel='noreferrer'
                    >
                    {child}
                    </a>
                </li>
                ))}
                    
            </ul>
        </div>
    )
}

export default SocialLinks