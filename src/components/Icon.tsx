import { Book, BookCheck, BookText } from "lucide-react";

interface IconProps {
    name: String
}

export default function Icon({name}: IconProps){

    const icons = [
        {name: "book", icon: <Book/>},
        {name: "book-text", icon: <BookText/>},
        {name: "book-check", icon: <BookCheck />}
    ]

    return icons.find( (icon) => name == icon.name )?.icon
}