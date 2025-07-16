export default function WayToText({image, title, description}) {
  return (
    <li>
        <p>
       <img src={image} alt="" style={{ width: '250px', height: '250px', border: '4px solid rgba(194, 193, 184, 0.72)', borderRadius: '20px'}} />
        <strong class="text">{title}</strong><br/>
        <br/>
        <strong class="text">{description}</strong>
        </p>
    </li>
  )
}
