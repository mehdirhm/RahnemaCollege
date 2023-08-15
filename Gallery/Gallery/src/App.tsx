import './App.css'
import { GalleryContainer } from './Components/GalleryContainer/GalleryContainer'
import { useReq } from './Hooks/useReq'
import { getCategories } from './services/getcategories'
import { getPhotos } from './services/getPhotos'
import { CategoriesContainer } from './Components/CategoriesContainer/CategoriesContainer'
import { CardProps } from './Types/Types'
import { useEffect, useState } from 'react'

function App() {
  const [categories, setCategories] = useState<string>('');
  const [photos, setPhotos] = useState<CardProps[]>([]);
  const { data, error, loading } = useReq(getCategories);
  const [input, setInput] = useState('');
 
  useEffect(() => {
    if (categories) {
      getPhotos(categories).then((data) => {
        setPhotos(data)
        
      })
    }
  }, [categories])

  const handleChange = (e: any) => {
    if(e.target.value === ''){
      getPhotos(categories).then((data) => {
        setPhotos(data)
        
      })
    }
    setInput(e.target.value);
    const filtered = photos.filter((item) => item.alt.toLowerCase().includes(input.toLowerCase()));
    setPhotos(filtered);
  }
  console.log(photos)

  return (
    <>
     <input
        onChange={handleChange}
        value={input}
        placeholder="Please Enter name"
        type="text"
        className=" border w-[700px] mb-5 p-3 h-[50px]"
      />
    <CategoriesContainer setCategories = {setCategories} data={data} />
      <GalleryContainer  cards={photos} />
    </>
  );
}


export default App
