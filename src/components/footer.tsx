import { Icon } from '@iconify/react'

function Footer() {
  return (
    <footer flex-center font-sans py-10 text-white>
      <a href="https://mphy.me" target="_blank" mr-2>©MurphyChen 2022</a>
      |
      <a href="https://github.com/hacker-c" target="_blank" ml-2>
        <Icon icon="mdi:github" width="20"></Icon>
      </a>
    </footer>
  )
}

export default Footer
