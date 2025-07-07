import "./tech-item.css"

interface ItemInterface {
    lowercaseName: string
    image: string
    name: string
    desc: string
}

function Item({lowercaseName, image, name, desc}: ItemInterface) {
    return (
        <div className={`item-container ${lowercaseName}`}>
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
                <p className="text-desc">{desc}</p>
            </div>
        </div>
    )
}

export default Item