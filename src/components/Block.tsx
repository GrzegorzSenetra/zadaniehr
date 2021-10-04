import * as React from 'react'

interface IProps {
    title?: string,
    subtitle?: string,
    content?: string,
    content1?: string,
    styles?: any,
    contentStyle?: any
}

export default function Block(props: IProps) {
    return (
        <div className={"Block"} style={props.styles}>
            <h1>{props.title}</h1>
            <h3 style={{color: '#00B5FE'}}>{props.subtitle}</h3>

            <div className={"ContentText"}>
                <p>{props.content}</p>
                <br />
                <p>{props.content1}</p>
            </div>
            <button>Zobacz więcej</button>
        </div>
    )
}