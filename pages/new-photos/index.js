import Image from "next/image";

function NewPhotosPage(){
    return <>
    <h1> Stock Photos in here</h1>
    {[1,2,3,4,5].map(item => {
        return <div style={{margin: '54px', border: "1px solid" }} key={item} >
            {/* <img src={`/stock-photos/stock-photo-${item}.jpg`} alt={`photo-${item}`} width="280" height="420" /> */}
            <Image src={`/stock-photos/stock-photo-${item}.jpg`} width="280" height="420"/>
        </div> 
    })}
     </>;
}

export default NewPhotosPage;