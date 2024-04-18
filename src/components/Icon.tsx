import { icons } from "@/app/utils/icons";
interface IconProps {
    name: String
}
export default function Icon({name}: IconProps){

    return icons.find( (icon) => name == icon.name )?.icon
}