import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import menuData from '../data/menuData'

function EditCard() {
    const navigate = useNavigate()
    const location = useLocation()
    const { id, name, info, imageUrl } = location.state

    const [form, setForm] = useState({ name, info, imageUrl })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSave = () => {
        const stored = localStorage.getItem('menuData')
        const current = stored ? JSON.parse(stored) : menuData

        console.log('id:', id)
        console.log('current:', current)

        const updated = current.map(item => {
            console.log('item.id:', item.id, typeof item.id, '==', id, typeof id)
            return item.id == id ? { ...item, ...form } : item
        })

        console.log('updated:', updated)
        localStorage.setItem('menuData', JSON.stringify(updated))
        navigate('/edit')
    }

    return (
        <div className="flex flex-col items-center gap-6 mt-16">
            <h1 className="text-4xl font-bold text-white">Düzenle</h1>
            <div className="flex flex-col gap-4 w-96">
                <div className="flex flex-col gap-1">
                    <label className="text-white font-semibold">İsim</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-white"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-white font-semibold">Açıklama</label>
                    <input
                        name="info"
                        value={form.info}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-white"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-white font-semibold">Resim URL</label>
                    <input
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-white"
                    />
                </div>
                <button
                    onClick={handleSave}
                    className="bg-green-500 text-white font-bold h-12 rounded-xl"
                >
                    Kaydet
                </button>
            </div>
        </div>
    )
}

export default EditCard