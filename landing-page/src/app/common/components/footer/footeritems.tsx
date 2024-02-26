import React from 'react'

const FooterItems: React.FC<{title:string, items:string[]}> = ({title, items}) => {
  return (
    <div>
      <p className="text-xl font-semibold">{title}</p>
      <ul className="list-disc list-inside list-none">
        {items.map((item) => (
          <li className="mt-2" key={item}>{item}</li>
        ))}
         </ul>
    </div>
  )
}

export default FooterItems