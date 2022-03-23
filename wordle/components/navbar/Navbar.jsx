import Link from 'next/link'
import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  LoginIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}) => {
  return (
    <div className="navbar mb-2">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <p className="text-xl ml-2.5 font-bold ">{GAME_TITLE}</p>
        <div className="right-icons">
          <Link href="/login" passHref>
            <LoginIcon className="h-6 w-6 mr-3 cursor-pointer" />
          </Link>
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer "
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
