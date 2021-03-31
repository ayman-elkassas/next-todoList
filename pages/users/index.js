import Link from "next/link";

//*getStaticProps : to get data and pass it to component as props

export const getStaticProps=async ()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()

    //*to pass props as props to this component
    return{
        props:{ninjas:data}
    }
}


const index = ({ninjas}) => {

    const ninjaList=ninjas.map((val,key)=>{
        return (
            <Link href={'users/'+val.id}>
                <div key={val.id}>
                    {val.name}
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>All ninjas</h1>
            {ninjaList}
        </div>
    );
};

export default index