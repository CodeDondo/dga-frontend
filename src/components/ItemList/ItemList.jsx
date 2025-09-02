import { useItemList } from '../../hooks/useItemList'
import { Link } from 'react-router-dom'
import styles from './ItemList.module.scss'

export const ItemList = () => {
    const { itemList, loading, error } = useItemList()


    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>
    return (
        <ul className={styles.grid}>
            {itemList.slice(0, 6).map(item => {
                const { id, name, image, slug } = item
                return (
                    <li key={id} className={styles.item}>
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
    )
}
