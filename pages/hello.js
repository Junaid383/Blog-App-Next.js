function Hello ({data})
{
    console.log('call data ', data)
     return <><span>hello</span></>
}
export default Hello

export async function getServerSideProps() {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     let data = await todos.json()
      console.log('call me  to', todos)
      return {
        props:{
            data:data
        }
      }
}