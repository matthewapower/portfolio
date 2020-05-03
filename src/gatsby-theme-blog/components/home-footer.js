import React from 'react'

export default function Footer() {
  return (
    <footer className="p-4 font-body text-center">
      © {new Date().getFullYear()}
      {` `}
      matthewapower
    </footer>
  )
}
