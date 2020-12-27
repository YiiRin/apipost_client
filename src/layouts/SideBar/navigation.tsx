import NavItem, { Props } from 'features/sidebar/NavItem'

/**
 * business menu
 */
const businessList: Props[] = [
  {
    icon: 'fa fa-clock-o',
    text: '最近',
    to: '/recent',
  },
  {
    icon: 'fa fa-terminal',
    text: 'APIs',
    to: '/apis',
  },
  {
    icon: 'fa fa-window-restore',
    text: '项目',
    to: '/project',
  },
  {
    icon: 'fa fa-users',
    text: '团队',
    to: '/team',
  },
]

/**
 * friends link
 */
const friendsLinksList: Props[] = [
  {
    icon: 'fa fa-graduation-cap',
    text: '云大使',
    to: '/cloud',
  },
  {
    icon: 'fa fa-pencil-square-o',
    text: '博客',
    to: '/blog',
  },
  {
    icon: 'fa fa-bell',
    text: '通知',
    to: '/notification',
  },
]

/**
 * other link
 */
const applicationList: Props[] = [
  {
    icon: 'fa fa-th-large',
    text: '应用',
    to: '/application',
  },
]

const mapListToRealMenu = (list: Props[]) => {
  return list.map((item) => <NavItem {...item} key={item.to} />)
}

export const businessMenu = mapListToRealMenu(businessList)
export const friendsLinksMenu = mapListToRealMenu(friendsLinksList)
export const applicationMenu = mapListToRealMenu(applicationList)
