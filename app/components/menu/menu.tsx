import MenuMainItem from "./menuItem";

export default function MenuMain() {
    const menuItems = [
        {
            name : "Pemesanan",
            href : '/pemesanan',
            icon : 'icon-pemesanan.png'
        },
        {
            name : "Riwayat",
            href : '/riwayat-pemesanan',
            icon : 'icon-history.png'
        },
        {
            name : "Paket",
            href : '/paket',
            icon : 'icon-paket.png'
        },
        {
            name : "Harga Tiket",
            href : '/tiket',
            icon : 'icon-ticket.png'
        },
        {
            name : "S & K",
            href : '/syarat-dan-ketentuan',
            icon : 'icon-syaratketentuan.png'
        },
        {
            name : "Bantuan",
            href : '/bantuan',
            icon : 'icon-bantuan.png'
        }
    ]
    
    return (
        <div className="grid grid-cols-3 gap-5 my-10">
            {
                menuItems.map((item, index) => {
                    return <MenuMainItem key={index} name={item.name} href={item.href} icon={item.icon} />
                })
            }
        </div>
    )
}