import React from 'react'

function Course  ()  {
  return (
     <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-3xl'>
                <span className='text-pink-500'>Welcome</span>
                🎉  to Your Learning Space</h1>
                <p className='mt-12 text-xl'>
                    Explore a carefully curated selection of courses designed to ignite your passion for learning. Whether you're a beginner or looking to master a new skill, there's something here for everyone. Start your journey today—your next discovery is just a click away!
                </p>
                 <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      
        
         
         
    </div>
    </>
  )
}
