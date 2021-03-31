//*using only with dynamic route to specify an array of 

export const getStaticPaths=async ()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()

    const paths=data.map(ninja=>{
        return{
            params:{id:ninja.id.toString()}
        }
    })

    //*route to this page only if route params is item from paths array
    //*if not include route to 404 page
    return{
        paths:paths,
        fallback:false
    }
}

export const getStaticProps= async (context)=>{
    const id=context.params.id
    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data=await res.json()

    return{
        props:{ninja:data}
    }
}

function Details({ninja}) {
    return (
        <div>
            <h3>{ninja.name}</h3>
            <h3>{ninja.email}</h3>
            <h3>{ninja.website}</h3>
        </div>
    );
}

export default Details;