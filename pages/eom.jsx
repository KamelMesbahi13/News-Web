import Toolbar from '../Components/Toolbar';
import styles from '../styles/EOM.module.css';

const Eom = ({ data }) => {
    return (
        <div className="page-container">
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee Of The Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{data.name}</h3>
                    <h6>{data.position}</h6>
                    <img src={data.image} alt="" />
                    <p>{data.description}</p>
                </div>
                
            </div>
        </div>
    )
}


export const getServerSideProps = async (pageContext) => {
    const response = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
    const data = await response.json()

    return {
        props: {
            data,
        }
    }
}

export default Eom