import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore eos beatae assumenda recusandae id placeat, accusantium vero quis quasi quisquam laboriosam voluptatum ratione nobis cupiditate hic explicabo. Quam mollitia nulla aspernatur dolores cum aperiam cupiditate illum minima ut quod debitis, numquam voluptatem doloribus, iure recusandae. Ipsum laudantium iusto explicabo.
            </p>

            <br />

            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet cum suscipit nihil debitis consectetur aliquid, accusamus optio quo voluptate repellendus reprehenderit sint voluptatibus culpa enim reiciendis velit dolorum. Rerum fuga culpa impedit molestiae exercitationem similique, perferendis, non dolor laudantium nemo ratione debitis, dolorum repudiandae quis neque dolore soluta natus.
            </p>
        </div>
    </div>
  )
}

export default About