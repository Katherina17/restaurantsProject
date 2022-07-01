import './Pagination.css';


function Paginations(){
   return(
    <nav className='navigation'>
        <ul className="pagination">
            <li className="page-item first"><a className="page-link" href="#">«</a></li>
            <li className="page-item prev"><a className="page-link" href="#">‹</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item next"><a className="page-link" href="#">›</a></li>
            <li className="page-item last"><a className="page-link" href="#">»</a></li>

        </ul>
    </nav>
   )
}

export default Paginations;