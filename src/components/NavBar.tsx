import Link from "next/link";

interface NavBarProps{
    active: "explorar" | "resenhas" | "estante"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-brown-400 border-b-4 pb-2" 

    return (
        <nav className="flex justify-between items-center px-10 py-8 w-full">
            
            <ul className="flex gap-14">
                <li className={ active == "explorar"? classActive:"" }>
                    <Link href="/">explorar</Link>
                </li>
                <li className={ active == "resenhas"? classActive:"" }>
                    <Link href="/resenha">resenhas</Link >
                </li>
                <li className={ active == "estante"? classActive:"" }>
                    <Link  href="/estante">estante</Link >
                </li>
            </ul>
            <div className="flex items-center px-4">
                < h1 className="text-2xl font-bold px-6"style={{ color: "#744938" }}>MinhaEstante</h1>
                {/* <div className="w-16 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/300" alt="Avatar do usuario" />
                </div> */}
            </div>
        </nav>
    )
}