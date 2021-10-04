import * as React from 'react'

interface IProps {
    className?: string,
    title?: string,
    subtitle?: string,
    content?: JSX.Element,
    styles?: any,
    contentStyle?: any
}

export default function Block(props: IProps) {
    return (
        <div className={props.className} style={props.styles}>
            {props.content}
        </div>
    )
}