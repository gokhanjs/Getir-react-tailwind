import { useState, useEffect } from "react"
import Banners from 'api/banners.json'
export default function Campaigns() {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(Banners)
    }, [])
    return (
        <div className='container-full mx-auto md:py-8'>
            <h3 className='hidden md:block text-sm font-semibold mb-3 px-4 md:px-0'>Kampanyalar</h3>
            <div className="grid grid-cols-3 gap-x-2">
                {banners && banners.map(banner => (
                    <div key={banner.id}>
                        <img className='object-cover md:rounded-lg' src={banner.image} alt="kampanya" />
                    </div>
                ))}
            </div>
        </div>
    )
}
