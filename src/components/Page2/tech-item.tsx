import "./tech-item.css"

interface ItemInterface {
    lowercaseName: string
    image: string
    name: string
    desc: string
    parallax: boolean
}

function Item({lowercaseName, image, name, desc, parallax}: ItemInterface) {
    return (
        <div className={`${parallax ? "item-container" : "item-container-mobile"} ${lowercaseName} `}>
            <div className="image-container">
                <div className="image" 
                style={{
                background: `url(/${image})`,
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