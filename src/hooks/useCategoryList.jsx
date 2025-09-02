import { useEffect, useState } from "react"

export const useCategoryList = () => {
  const [CategoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const getCategoryList = async () => {
      const URL = `${import.meta.env.VITE_API_URL}/categories`

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {Accept: "application/json"}
        })
        const result = await response.json()
        setCategoryList(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getCategoryList()
  }, [] )

  return {
    CategoryList, loading, error 
  }
}
