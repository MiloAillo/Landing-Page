import { backendUrl, backendUrlWithPrefix } from "@/lib/variables"
import "./tech-item.css"

interface ItemInterface {
    image: string
    name: string
    desc: string
    parallax: boolean
}

function Item({image, name, desc, parallax}: ItemInterface) {
    console.log(backendUrl+image)
    return (
        <div className={`${parallax ? "item-container" : "item-container-mobile"} `}>
            <div className="image-container">
                <div className="image" 
                style={{
                background: `url(${backendUrlWithPrefix+image})`,
                width: "100%",
                height: "100%",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                }}
            ></div>
            </div>
            <div className="text">
                <p className="text-name">{name}</p>
                <p className={parallax ? "text-desc" : "text-desc-mobile"}>{desc}</p>
            </div>
        </div>
    )
}

export default Item