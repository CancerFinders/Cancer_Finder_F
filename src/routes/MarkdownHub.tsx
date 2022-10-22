import {Link} from 'react-router-dom'
import logo from 'assets/test_logo.png'

export default function MarkdownHub () {
    return (
        <div className="md-hub">
            <h1 className='md-hub_title'>
                Markdown hub
            </h1>

            <nav className='md-hub_nav'>
                <Link to='/markdown/chest' className='md-hub_link'>
                    <img src={logo} alt="Nav logo" className="md-hub_link_img" />
                    <h3 className="md-hub_link_title">Грудь</h3>
                </Link>
                <Link to='/markdown/brain' className='md-hub_link'>
                    <img src={logo} alt="Nav logo" className="md-hub_link_img" />
                    <h3 className="md-hub_link_title">Мозг</h3>
                </Link>
                <Link to='/markdown/foot' className='md-hub_link'>
                    <img src={logo} alt="Nav logo" className="md-hub_link_img" />
                    <h3 className="md-hub_link_title">Ступня</h3>
                </Link>
                <Link to='/markdown/spine' className='md-hub_link'>
                    <img src={logo} alt="Nav logo" className="md-hub_link_img" />
                    <h3 className="md-hub_link_title">Позвоночник</h3>
                </Link>
                <Link to='/markdown/pelvis' className='md-hub_link'>
                    <img src={logo} alt="Nav logo" className="md-hub_link_img" />
                    <h3 className="md-hub_link_title">Ягодицы</h3>
                </Link>
                <Link to='/markdown/hand' className='md-hub_link'>
                    <img src={logo} alt="Nav logo" className="md-hub_link_img" />
                    <h3 className="md-hub_link_title">Рука</h3>
                </Link>
            </nav>
        </div>
    )
}