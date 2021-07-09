// general app layout

export default function Container(props) {
    return <div className={`${props.fluid ? "-fluid" : ""}`} {...props}></div>

}
