import "./project-item.css"

interface ProjectInterface {
    image?: string
    tittle: string
    desc: string
    tag?: string[]
    github?: string
    live?: string
    parallax: boolean
}

function Item({ image, tittle, desc, tag, github, live, parallax }: ProjectInterface) {

    return (
        <div className={parallax ? "project-item" : "project-item-mobile"}>
            <div className={parallax ? "project-image" : "disable"} style={{
                background: `${image !== undefined ? `url(/${image})` : "white"}`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
            }}>{image === undefined ? 'No Image Provided' : ""}</div>
            <div className={parallax ? "content-background" : "content-background-mobile"}>
                <div className={parallax ? "project-content" : "project-content-mobile"}>
                    <div className="project-texts">
                        <div className="project-tittle">{tittle}</div>
                        <div className="project-desc">{desc}</div>
                    </div>
                    <div className="project-details">
                        <div className="project-tag">
                            {tag?.map((e) => {
                                return <div className="tag">{e}</div>
                            })}
                        </div>
                        <div className="project-redirect">
                            <p><a href={github} className={`${github !== undefined ? "enabled" : "disabled"}`}>{`< View on Github`}</a></p>
                            <p><a href={live} className={`${live !== undefined ? "enabled" : "disabled"}`}>{`Live View >`}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item