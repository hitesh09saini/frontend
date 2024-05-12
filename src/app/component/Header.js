
import Image from 'next/image'
import img from '/public/logo.png'
import email from '/public/email.gif'
const Header = () => {
  return (
    <div className='header flex justify-between items-center px-2 sm:px-7 py-2 absolute top-[-100px] left-0 w-full ' >

      <Image src={img} alt="Logo" width={150} height={100} className='max-sm:w-[100px]' ></Image>


      <a href="mailto:hitesh9694saini@gmail.com" target="_blank" rel="noopener noreferrer"  >
        <div className='w-[50px] relative h-[50px] bg-white flex justify-center items-center overflow-hidden rounded-full border shadow-lg shadow-inner z-50'>
          <Image src={email} alt="Logo" className='max-sm:w-[100px]' ></Image>
        </div>
      </a>

    </div>
  )
}

export default Header
