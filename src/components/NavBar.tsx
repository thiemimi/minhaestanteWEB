import Link from "next/link";

interface NavBarProps{
    active: "explorar" | "comunidade" | "resenhas" | "estante"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-black-400 border-b-4 pb-2"
    return (
        <nav className="flex justify-between items-center px-4 py-2 bg-lime-700 w-full">
            <h1 className="text-2xl font-bold">MinhaEstante</h1>
            <ul className="flex gap-14">
                <li className={ active == "explorar"? classActive:"" }>
                    <Link href="/explorar">explorar</Link>
                </li>
                <li className={ active == "comunidade"? classActive:"" }>
                    <Link href="/comunidade">comunidade</Link >
                </li>
                <li className={ active == "resenhas"? classActive:"" }>
                    <Link href="/">resenhas</Link >
                </li>
                <li className={ active == "estante"? classActive:"" }>
                    <Link  href="/estante">estante</Link >
                </li>
            </ul>
            <div className="w-16 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="Avatar do usuario" />
            </div>
        </nav>
    )
}