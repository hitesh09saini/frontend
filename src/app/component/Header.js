
import Link from 'next/link'
import Image from 'next/image'
import img from '/public/logo.png'
import email from '/public/email.gif'
const Header = () => {
  return (
    <div className='header flex justify-between items-center sm:px-7 py-2 absolute top-[-50px] left-0 w-full z-50' >
      <Link href="/">
        <Image src={img} alt="Logo" width={150} height={100} className='max-sm:w-[100px]' ></Image>
      </Link>
      <div className='sm:w-[50px] sm:h-[50px] bg-white flex justify-center items-center overflow-hidden rounded-full border shadow-lg shadow-inner'>
        <a href="mailto:hitesh9694saini@gmail.com" target="_blank" rel="noopener noreferrer" className='relative'>
          <Image src={email} alt="Logo" width={40} height={40} ></Image>
        </a>
      </div>

    </div>
  )
}

export default Header
