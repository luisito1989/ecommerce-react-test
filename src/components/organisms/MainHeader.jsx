import Logo from "../molecules/header/logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = () => {
  return (
    <div className="fixed w-full z-10 bg-blue-400">
      <div className="flex justify-between mx-auto container py-4 lg:max-w-200">
        <Logo />
        <MainMenu />
      </div>
    </div>
  )
}

export default MainHeader
