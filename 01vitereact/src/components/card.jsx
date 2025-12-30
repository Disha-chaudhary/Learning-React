


function Card(props) {
    console.log(props);
    return (
        <div className="card">
           <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60" alt="Avatar" className="card-img"/>
           <h1>{props.user}</h1>
           <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.

           </p>
           <button>Click me</button>
        </div>
    )
}

export default Card
