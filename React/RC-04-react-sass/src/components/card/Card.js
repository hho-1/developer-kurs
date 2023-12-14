import "./Card.scss"

const Card = ({veri}) => {
  return (
    <div className="konteynir">
        {veri.map(({id, name, job, comment, img}) => (
            <div key={id} className="kart">
                <h1>{name}</h1>
                <h2>{job}</h2>
                <p>{comment}</p>
                <img src={img} alt="" />
                <div className='btn-div'>
                    <button className='btn-div-small'>Small</button>
                    <button className='btn-div-large'>Large</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card