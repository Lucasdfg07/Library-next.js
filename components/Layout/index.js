import Header from '../shared/Header';

export default function Layout({ children }) {
    return(
        <div className="body">
            <Header />
            
            <div className="home">
                { children }
            </div>
        </div>
    )
}