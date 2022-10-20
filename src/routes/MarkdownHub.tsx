import {Link} from 'react-router-dom'

export default function MarkdownHub () {
    return (
        <div className="md-hub">
            <h1 className='md-hub_title'>
                Markdown hub
            </h1>

            <nav className='md-hub_nav'>
                <Link to='/markdown/chest' className='md-hub_link'>
                    <img src="assets/chest_logo.png" alt="Nav logo" className="md-hub_linkImg" />
                    <h3>Грудь</h3>
                </Link>
                <Link to='/markdown/brain' className='md-hub_link'>
                    <img src="assets/chest_logo.png" alt="Nav logo" className="md-hub_linkImg" />
                    <h3>Мозг</h3>
                </Link>
                <Link to='/markdown/foot' className='md-hub_link'>
                    <img src="assets/chest_logo.png" alt="Nav logo" className="md-hub_linkImg" />
                    <h3>Ступня</h3>
                </Link>
                <Link to='/markdown/spine' className='md-hub_link'>
                    <img src="assets/chest_logo.png" alt="Nav logo" className="md-hub_linkImg" />
                    <h3>Позвоночник</h3>
                </Link>
                <Link to='/markdown/pelvis' className='md-hub_link'>
                    <img src="assets/chest_logo.png" alt="Nav logo" className="md-hub_linkImg" />
                    <h3>Ягодицы</h3>
                </Link>
                <Link to='/markdown/hand' className='md-hub_link'>
                    <img src="assets/chest_logo.png" alt="Nav logo" className="md-hub_linkImg" />
                    <h3>Рука</h3>
                </Link>
            </nav>
        </div>
    )
}