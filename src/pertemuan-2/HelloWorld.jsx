export default function HelloWorld(){
      const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <img src="./img/logo-pcr.webp" width="100%"/>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard 
	            nama="Aliya" 
	            nim="169412"
	            tanggal={new Date().toLocaleDateString()}
	          />

            <UserCard
                nama="Adudu"
                nim="1234"
                tanggal="2026/12/03"
                />

            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai </small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div className="card">
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}