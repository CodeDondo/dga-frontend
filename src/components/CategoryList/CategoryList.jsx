import { useCategoryList } from '../../hooks/useCategoryList'
import { Link } from 'react-router-dom'
import styles from './CategoryList.module.scss'

export const CategoryList = () => {
    const { CategoryList, loading, error } = useCategoryList()


    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>
    return (
        <>
        <h3>Populære kategorier:</h3>
            <ul className={styles.grid}>
                {CategoryList.slice(0, 6).map(Category => {
                    const { id, name, image, slug } = Category
                    return (
                        <li key={id} className={styles.Category}>
                            <Link to={`${slug}`} className={styles.link}>
                                <div className={styles.imageWrapper}>
                                    <img src={image} alt={name} className={styles.image} />
                                    <div className={styles.overlay}>
                                        <span>{name}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
