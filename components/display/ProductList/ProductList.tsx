import {HTMLAttributes} from "react";

type ListProps = HTMLAttributes<HTMLUListElement>

export default function List({children, ...props}: ListProps) {
    return <ul {...props} className={`w-full ${props.className}`}>{children}</ul>
}
