import './styles.css'

export default function Header(){
    return (
        <div className="flex justify-between m-6">
            <div className="hover font-semibold text-xl">
                Shiva Lagisetty
            </div>
            <div className="flex justify-between gap-6">
                <div className="cursor-pointer">
                    About me
                </div>
                <div className="cursor-pointer">
                    Contact
                </div>
            </div>
        </div>
    )
}