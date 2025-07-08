import "./project-item.css"

interface ProjectInterface {
    imageExist: boolean
    image?: string | null
    tittle: string
    desc: string
    tag?: string[]
}

function Item({ imageExist, image, tittle, desc, tag }: ProjectInterface) {

    return (
        <div className="project-item">
            <div className="project-image" style={{
                background: `${imageExist? `url(/${image})` : "white"}`,
                backgroundSize: `cover`,
                backgroundPosition: `center`
            }}>{imageExist !== true ? 'No Image Provided' : ""}</div>
            <div className="content-background">
                <div className="project-content">
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
                            <p><a href="">{`< View on Github`}</a></p>
                            <p><a href="">{`Live View >`}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item