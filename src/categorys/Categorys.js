import React from 'react'


const linkData = [
    {
        link: `Детский Мир`
    },
    {
        link: `Недвижимость`
    },
    {
        link: `Транспорт`
    },
    {
        link: `Работа`
    }
]
const Categorys = () => {
    return (
        <div className="container">
            {linkData.map((v) => {
                return <Link className={`${theme}`} >{v.link} </Link>

            })}
        </div>
    )
}


export default Categorys
