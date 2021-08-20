import React from 'react'
import meImage from '../images/me.jpg'
export default function Nav() {
    return (
        <div className="nav">
            <img className="me" src={meImage} />
            <br />
            <ul className="navItems">
                <li>Josh.About()</li>
                <li>Josh.Projects()</li>
                <li>Josh.Resume()</li>
                <li>Josh.Blog()</li>
                <li>Josh.Contact()</li>


            </ul>

        </div>
    )
}
