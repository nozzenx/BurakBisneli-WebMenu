import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import menuData from '../data/menuData'

function Add() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', info: '', imageUrl: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAdd = () => {
    if (!form.name || !form.info || !form.imageUrl) return

   const stored = localStorage.getItem('menuData')
    const current = stored ? JSON.parse(stored) : menuData

    const newItem = { id: Date.now(), ...form }
    const updated = [...current, newItem]

    localStorage.setItem('menuData', JSON.stringify(updated))
    navigate('/menu')
  }

  return (
    <div className="flex flex-col items-center gap-6 mt-16">
      <h1 className="text-4xl font-bold text-white">Yeni Ekle</h1>
      <div className="flex flex-col gap-4 w-96">
        <input
          name="name"
          placeholder="İsim"
          onChange={handleChange}
          className="p-3 rounded-xl bg-white"
        />
        <input
          name="info"
          placeholder="Açıklama"
          onChange={handleChange}
          className="p-3 rounded-xl bg-white"
        />
        <input
          name="imageUrl"
          placeholder="Resim URL"
          onChange={handleChange}
          className="p-3 rounded-xl bg-white"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white font-bold h-12 rounded-xl"
        >
          Ekle
        </button>
      </div>
    </div>
  )
}

export default Add